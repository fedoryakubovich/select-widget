import { ActionTypes } from "../../contexts/actions";
import { useAppContext } from "../../contexts/useAppContext";
import { Button } from "../Button/Button";
import { Selected } from "../Selected/Selected";
import { Typography } from "../Typography/Typography";

export const SelectModalFooter = ({
  selected,
  removeItem,
}: {
  selected: { [key: string]: string };
  removeItem: (id: string) => void;
}) => {
  const { dispatch } = useAppContext();

  let textEnd = "item";
  if (Object.keys(selected).length > 1) textEnd = "items";

  const handleSave = () => {
    dispatch({
      type: ActionTypes.SAVE_SELECTED_ITEMS,
      payload: selected,
    });
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };

  const handleCancel = () => {
    dispatch({ type: ActionTypes.CLOSE_MODAL });
  };

  return (
    <Selected>
      <Typography color="white" variant="label">
        {`Current selected ${textEnd}:`}
      </Typography>

      <Selected.List items={selected} onRemove={removeItem} />

      <Selected.Actions>
        <Button color="success" variant="contained" onClick={handleSave}>
          Save
        </Button>

        <Button color="danger" variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
      </Selected.Actions>
    </Selected>
  );
};
