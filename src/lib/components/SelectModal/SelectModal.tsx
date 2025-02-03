import { useVirtualizer } from "@tanstack/react-virtual";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { MAX_SELECTED_ITEMS } from "../../constants";
import { ActionTypes } from "../../contexts/actions";
import { useAppContext } from "../../contexts/useAppContext";
import { Checkbox } from "../Checkbox/Checkbox";
import { Modal } from "../Modal/Modal";

import { SelectModalFilters } from "./SelectModalFilters";
import { SelectModalFooter } from "./SelectModalFooter";

import classes from "./SelectModal.module.css";

export const SelectModal = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { dispatch, isOpenModal, selectedItems, items } = useAppContext();
  const [selected, setSelected] = useState<{ [key: string]: string }>(
    selectedItems,
  );

  useEffect(() => {
    setSelected(selectedItems);
  }, [selectedItems]);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 28,
  });

  const handleCloseModal = () => dispatch({ type: ActionTypes.CLOSE_MODAL });

  const removeItem = useCallback((id: string) => {
    setSelected((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const addItem = useCallback((id: string, label: string) => {
    setSelected((prev) => ({ ...prev, [id]: label }));
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      const id = e.target.id;
      const label = e.target.name;

      return checked ? addItem(id, label) : removeItem(id);
    },
    [addItem, removeItem],
  );

  const isListDisabled = Object.keys(selected).length === MAX_SELECTED_ITEMS;

  return (
    <Modal title="Select items" onClose={handleCloseModal} open={isOpenModal}>
      <SelectModalFilters />

      <section className={classes.checkboxListWrapper}>
        <section ref={parentRef} style={{ height: "266px", overflow: "auto" }}>
          <section
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualItem) => {
              const item = items[virtualItem.index];
              const isDisabled = isListDisabled && !selected[item.id];

              return (
                <div
                  key={virtualItem.key}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={classes.checkboxWrapper}
                >
                  <Checkbox
                    label={item.label}
                    value={item.id}
                    checked={!!selected[item.id]}
                    onChange={handleChange}
                    disabled={isDisabled}
                  />
                </div>
              );
            })}
          </section>
        </section>
      </section>

      <SelectModalFooter selected={selected} removeItem={removeItem} />
    </Modal>
  );
};
