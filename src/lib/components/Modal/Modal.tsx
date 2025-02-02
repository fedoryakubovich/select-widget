import {
  DialogHTMLAttributes,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

import classes from "./Modal.module.css";

type ModalProps = DialogHTMLAttributes<HTMLDialogElement> & {
  title: string;
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  children,
  onClose,
  open,
  ...props
}) => {
  console.log("lol");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    return open ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [open]);

  return (
    <dialog {...props} className={classes.modal} ref={dialogRef}>
      <section className={classes.modalHeader}>
        <Typography>{title}</Typography>

        <section className={classes.modalCloseButton}>
          <Button variant="text" onClick={onClose}>
            X
          </Button>
        </section>
      </section>

      <section className={classes.modalContent}>{children}</section>
    </dialog>
  );
};
