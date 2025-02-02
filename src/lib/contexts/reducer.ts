import { Item } from "../../types";
import { ITEMS } from "../constants";

import { Actions, ActionTypes } from "./actions";

export type State = {
  isOpenModal: boolean;
  selectedItems: { [key: string]: string };
  searchValue: string;
  filter: string;
  items: Item[];
};

export const initialState: State = {
  isOpenModal: false,
  selectedItems: {},
  searchValue: "",
  filter: "",
  items: ITEMS,
};

export const AppReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return { ...state, isOpenModal: true };
    case ActionTypes.CLOSE_MODAL:
      return { ...state, isOpenModal: false };
    case ActionTypes.SAVE_SELECTED_ITEMS:
      return { ...state, selectedItems: action.payload };
    case ActionTypes.REMOVE_ITEM: {
      const { selectedItems } = state;

      if (selectedItems[action.payload]) {
        const { [action.payload]: _, ...rest } = selectedItems;

        return { ...state, selectedItems: rest };
      }

      return state;
    }
    case ActionTypes.SET_SEARCH_VALUE: {
      const filteredItems = ITEMS.filter((item) =>
        item.label.toLowerCase().includes(action.payload.toLowerCase()),
      );

      return { ...state, searchValue: action.payload, items: filteredItems };
    }
    case ActionTypes.SET_FILTER: {
      const filteredItems = ITEMS.filter(
        (item) => Number(item.id) > Number(action.payload),
      );

      return { ...state, filter: action.payload, items: filteredItems };
    }
    default:
      return state;
  }
};
