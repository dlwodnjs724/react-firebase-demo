import React from 'react';
import ToDos from './ToDos';
import ToDoForm from './ToDoForm';
import ToDoContextProvider from '../context';

function App() {
  return (
    <ToDoContextProvider>
      <ToDoForm />
      <ToDos />
    </ToDoContextProvider>
  );
}

export default App;
