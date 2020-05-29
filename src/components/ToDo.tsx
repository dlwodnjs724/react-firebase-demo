import React from 'react';
import { ToDo as IToDo, useToDoDispatch } from '../context';
import { DELETE } from '../actions';

const ToDo: React.FunctionComponent<IToDo> = ({ id, text }) => {
  const toDoDispatch = useToDoDispatch();
  return (
    <li>
      {text}
      <button onClick={() => toDoDispatch({ type: DELETE, payload: id })}>
        X
      </button>
    </li>
  );
};

export default ToDo;
