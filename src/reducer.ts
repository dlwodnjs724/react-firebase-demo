import { ToDos, ToDoAction } from './context';
import { ADD, DELETE } from './actions';

function toDoReducer(state: ToDos, action: ToDoAction): ToDos {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { id: Date.now(), text: action.payload as string },
        ],
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(
          (toDo) => toDo.id !== (action.payload as number),
        ),
      };
    default:
      throw new Error();
  }
}

export default toDoReducer;
