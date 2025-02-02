import { createContext } from "react";

import { Actions } from "./actions";
import { State } from "./reducer";

type AppContextType = State & { dispatch: React.Dispatch<Actions> };

export const AppContext = createContext<AppContextType | null>(null);
