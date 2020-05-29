import React, { useState } from 'react';
import { useToDoDispatch } from '../context';
import { ADD } from '../actions';

function ToDoForm() {
  const [text, setText] = useState('');
  const toDodispatch = useToDoDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    toDodispatch({ type: ADD, payload: text });
    setText('');
  };
  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setText(value);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="input todo"
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default ToDoForm;
