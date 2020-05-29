import React from 'react';
import ToDo from './ToDo';
import { useToDos } from '../context';

function ToDos() {
  const toDos = useToDos();
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
      ))}
    </ul>
  );
}

export default ToDos;
