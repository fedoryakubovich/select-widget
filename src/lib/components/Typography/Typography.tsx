import classNames from "classnames";
import { PropsWithChildren } from "react";

import classes from "./Typography.module.css";

type TypographyProps = PropsWithChildren<{
  variant?: "label" | "title";
  color?: "white" | "primary" | "secondary";
  className?: string;
}>;
export const Typography = ({
  children,
  variant,
  color,
  className,
}: TypographyProps) => {
  return (
    <p
      className={classNames(classes.typography, className, {
        [classes.label]: variant === "label",
        [classes.title]: variant === "title",
        [classes.white]: color === "white",
        [classes.primary]: color === "primary",
        [classes.secondary]: color === "secondary",
      })}
    >
      {children}
    </p>
  );
};
