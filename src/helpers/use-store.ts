import { TodoList } from "../store/TodoList";
import { useContext } from "react";
import { StoreContext } from "./store-provider";

export const useStore = (): TodoList => useContext(StoreContext);