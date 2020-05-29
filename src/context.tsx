import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import toDoReducer from './reducer';

export interface ToDo {
  id: number;
  text: string;
}

export interface ToDos {
  toDos: ToDo[];
}

export interface ToDoAction {
  type: string;
  payload: string | number;
}

const ToDoStateContext = createContext<ToDos | undefined>(undefined);

const ToDoDispatchContext = createContext<Dispatch<ToDoAction> | undefined>(
  undefined,
);

const initialState = {
  toDos: [],
};

const ToDoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  return (
    <ToDoDispatchContext.Provider value={dispatch}>
      <ToDoStateContext.Provider value={state}>
        {children}
      </ToDoStateContext.Provider>
    </ToDoDispatchContext.Provider>
  );
};

export const useToDos = () => {
  const toDoState = useContext(ToDoStateContext);
  if (!toDoState) throw new Error('ToDoProvider not found');
  return toDoState.toDos;
};

export const useToDoDispatch = () => {
  const toDoDispatch = useContext(ToDoDispatchContext);
  if (!toDoDispatch) throw new Error('ToDoProvider not found');
  return toDoDispatch;
};

export default ToDoContextProvider;
