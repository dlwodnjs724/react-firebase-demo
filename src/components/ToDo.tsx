import React from 'react';
import { ToDo as IToDo, useToDoDispatch } from '../context';
import { DELETE, COMPLETED, UNCOMPLETED } from '../actions';

const ToDo: React.FunctionComponent<IToDo> = ({ id, text, completed }) => {
  const toDoDispatch = useToDoDispatch();
  return (
    <li>
      {text}
      <button onClick={() => toDoDispatch({ type: DELETE, payload: id })}>
        X
      </button>
      {completed ? (
        <button
          onClick={() => toDoDispatch({ type: UNCOMPLETED, payload: id })}
        >
          U
        </button>
      ) : (
        <button onClick={() => toDoDispatch({ type: COMPLETED, payload: id })}>
          C
        </button>
      )}
    </li>
  );
};

export default ToDo;
