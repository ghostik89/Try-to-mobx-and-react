import { createContext } from "react";
import { TodoList } from "../store/TodoList";


export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;