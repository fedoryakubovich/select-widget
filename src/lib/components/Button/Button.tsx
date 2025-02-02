import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "success" | "danger";
  variant?: "contained" | "text";
};

export const Button: FC<ButtonProps> = ({ color, variant, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(classes.button, {
        [classes.success]: color === "success",
        [classes.danger]: color === "danger",
        [classes.contained]: variant === "contained",
        [classes.text]: variant === "text",
      })}
    />
  );
};
