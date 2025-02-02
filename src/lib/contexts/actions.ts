export enum ActionTypes {
  OPEN_MODAL,
  CLOSE_MODAL,
  SAVE_SELECTED_ITEMS,
  REMOVE_ITEM,
  SET_SEARCH_VALUE,
  SET_FILTER,
}

export type OpenModalAction = { type: ActionTypes.OPEN_MODAL };
export type CloseModalAction = { type: ActionTypes.CLOSE_MODAL };
export type SaveSelectedItemsAction = {
  type: ActionTypes.SAVE_SELECTED_ITEMS;
  payload: { [key: string]: string };
};
export type RemoveItemAction = {
  type: ActionTypes.REMOVE_ITEM;
  payload: string;
};
export type SetSearchValueAction = {
  type: ActionTypes.SET_SEARCH_VALUE;
  payload: string;
};
export type SetFilterAction = {
  type: ActionTypes.SET_FILTER;
  payload: string;
};

export type Actions =
  | OpenModalAction
  | CloseModalAction
  | SaveSelectedItemsAction
  | RemoveItemAction
  | SetSearchValueAction
  | SetFilterAction;
