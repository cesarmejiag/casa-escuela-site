import styles from "../styles/weather.module.css";
import useFetch from "../hooks/useFetch";

const padZero = (number) => {
  return `00${number}`.slice(-2);
};

const formatTime = (datetime) => {
  const date = datetime ? new Date(datetime) : new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const m = "AM";

  if (hours > 12) {
    hours -= 12;
    m = "PM";
  }

  return `${padZero(hours)}:${padZero(minutes)} ${m}`;
};

const weather = () => {
  // https://www.weatherapi.com/api-explorer.aspx
  const apikey = "491e1bf6e76e4bad84e43123221803";
  const query = "20.9800512,-89.7029589";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${query}&aqi=no`;
  const { loading, data, error } = useFetch(url);

  // Extract data from weatherapi.
  const temp_f = data?.current?.temp_f || "-";
  const temp_c = data?.current?.temp_c || "-";
  const localtime = data?.location?.localtime || "-";

  return (
    <div className={styles.weather}>
      <div className="row">
        <div className="col-6">
          <div className={styles.name}>
            <div>Mérida, Yucatán.</div>
            <div>México</div>
          </div>
        </div>
        <div className="col-6">
          <div className={styles.info}>
            <div>{formatTime(localtime)}</div>
            <div>
              {temp_f} F / {temp_c} C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weather;
