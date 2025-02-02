import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

import classes from "./Checkbox.module.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value: string;
};
export const Checkbox: FC<CheckboxProps> = ({ label, value, ...props }) => {
  return (
    <div className={classes.checkbox}>
      <input {...props} type="checkbox" id={value} name={label} value={value} />
      <label
        htmlFor={value}
        className={classNames(classes.checkboxLabel, {
          [classes.disabled]: props.disabled,
        })}
      >
        {label}
      </label>
    </div>
  );
};
