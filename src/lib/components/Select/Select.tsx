import classNames from "classnames";
import { FC, SelectHTMLAttributes } from "react";

import classes from "./Select.module.css";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { label: string; value: number }[];
};
export const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select {...props} className={classNames(classes.select, props.className)}>
      {options.map(({ label, value }) => (
        <option
          key={`${label}-${value}`}
          value={value}
          className={classes.option}
        >
          {label}
        </option>
      ))}
    </select>
  );
};
