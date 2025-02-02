import { FC, PropsWithChildren, useReducer } from "react";

import { AppContext } from "./AppContext";
import { AppReducer, initialState } from "./reducer";

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
