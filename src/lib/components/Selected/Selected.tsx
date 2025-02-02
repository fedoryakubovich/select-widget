import classNames from "classnames";
import { PropsWithChildren } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

import classes from "./Selected.module.css";

export const Selected = ({ children }: PropsWithChildren) => {
  return <section className={classes.container}>{children}</section>;
};

type SelectedListProps = {
  items: { [key: string]: string };
  onRemove?: (id: string) => void;
};

const SelectedList = ({ items, onRemove }: SelectedListProps) => {
  if (!Object.keys(items).length) {
    return null;
  }

  return (
    <section className={classes.list}>
      {Object.entries(items).map(([id, label]) => (
        <section key={id} className={classes.selectedItem}>
          <Typography className={classes.selectedItemLabel}>{label}</Typography>

          <section className={classes.selectedItemActions}>
            <section className={classNames(classes.divider)} />
            <Button variant="text" onClick={() => onRemove?.(id)}>
              X
            </Button>
          </section>
        </section>
      ))}
    </section>
  );
};

const Actions = ({ children }: PropsWithChildren) => {
  return <section className={classes.actions}>{children}</section>;
};

Selected.Actions = Actions;
Selected.List = SelectedList;
