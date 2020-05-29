import React from 'react';
import ToDo from './ToDo';
import { useToDos, ToDo as IToDo, useCompleted } from '../context';

function ToDos() {
  const toDos = useToDos();
  const completed = useCompleted();
  return (
    <>
      <h3>Uncompleted</h3>
      <ul>
        {toDos.map((toDo: IToDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </ul>
      <h3>Completed</h3>
      <ul>
        {completed.map((toDo: IToDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDos;
