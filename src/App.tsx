import { useCallback } from "react";

import { Button } from "./lib/components/Button/Button";
import { Selected } from "./lib/components/Selected/Selected";
import { SelectModal } from "./lib/components/SelectModal/SelectModal";
import { Typography } from "./lib/components/Typography/Typography";
import { ActionTypes } from "./lib/contexts/actions";
import { useAppContext } from "./lib/contexts/useAppContext";

function App() {
  const { dispatch, selectedItems, isOpenModal } = useAppContext();
  const count = Object.keys(selectedItems).length;

  let textEnd = "item";
  if (count > 1) textEnd = "items";

  const handleRemoveItem = (id: string) => {
    dispatch({ type: ActionTypes.REMOVE_ITEM, payload: id });
  };

  const handleOpenModal = useCallback(() => {
    dispatch({ type: ActionTypes.OPEN_MODAL });
  }, [dispatch]);

  return (
    <>
      <section style={{ padding: "20px" }}>
        <Typography color="primary" variant="title">
          Select items
        </Typography>

        <Selected>
          <Typography color="secondary" variant="label">
            {`You currently have ${count} selected ${textEnd}.`}
          </Typography>

          <Selected.List items={selectedItems} onRemove={handleRemoveItem} />

          <Selected.Actions>
            <Button
              color="success"
              variant="contained"
              onClick={handleOpenModal}
            >
              Change my choice
            </Button>
          </Selected.Actions>
        </Selected>
      </section>

      {isOpenModal && <SelectModal />}
    </>
  );
}

export default App;
