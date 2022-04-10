import { useState } from "react";

const CustomSelect = ({ options, ...selectProps }) => {
  return (
    <div>
      <select {...selectProps}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
