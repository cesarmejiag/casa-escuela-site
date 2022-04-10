import { useForm, Controller } from "react-hook-form";
import CustomSelect from "../components/CustomSelect";

const Contact2 = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  const selectOptions = [
    { label: "option 1", value: "option-1" },
    { label: "option 2", value: "option-2" },
    { label: "option 3", value: "option-3" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="select"
          control={control}
          render={({ field }) => {
            return <CustomSelect {...field} options={selectOptions} />;
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact2;
