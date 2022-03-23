import { useEffect, useReducer, useRef } from "react";

const initialState = {
  loading: false,
  error: undefined,
  data: undefined,
};

// Keep state logic separated.
const fetchReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...initialState, loading: true };
    case "fetched":
      return { ...initialState, data: action.payload };
    case "error":
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};

const useFetch = (url, options) => {
  // Used to prevent state update it the component in unmounted.
  const cancelRequest = useRef(false);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given.
    if (!url) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: "error", payload: error });
      }
    };

    fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted.
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
};

export default useFetch;
