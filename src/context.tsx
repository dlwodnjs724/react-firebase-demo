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

interface ToDoStateDispatch {
  state: ToDos;
  dispatch: Dispatch<ToDoAction>;
}

const initialState: ToDos = { toDos: [] };

const ToDoContext = createContext<ToDoStateDispatch | undefined>(undefined);

const ToDoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDos = () => {
  const toDoStateDispatch = useContext(ToDoContext);
  if (!toDoStateDispatch) throw new Error('ToDoProvider not found');
  const {
    state: { toDos },
  } = toDoStateDispatch;
  return toDos;
};

export const useToDoDispatch = () => {
  const toDoStateDispatch = useContext(ToDoContext);
  if (!toDoStateDispatch) throw new Error('ToDoProvider not found');
  const { dispatch: toDoDispatch } = toDoStateDispatch;
  return toDoDispatch;
};

export default ToDoContextProvider;
