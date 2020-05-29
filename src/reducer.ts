import { ToDos, ToDoAction, ToDo } from './context';
import { ADD, DELETE, COMPLETED, UNCOMPLETED } from './actions';

function toDoReducer(state: ToDos, action: ToDoAction): ToDos {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: state.toDos.concat({
          id: Date.now(),
          text: action.payload as string,
          completed: false,
        }),
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(
          (toDo: ToDo) => toDo.id !== (action.payload as number),
        ),
        completed: state.completed.filter(
          (toDo: ToDo) => toDo.id !== (action.payload as number),
        ),
      };
    case COMPLETED:
      const completed: ToDo | undefined = state.toDos.find(
        (toDo: ToDo) => toDo.id === (action.payload as number),
      );
      if (!completed) {
        return state;
      } else {
        return {
          ...state,
          toDos: state.toDos.filter((toDo: ToDo) => toDo.id !== completed.id),
          completed: state.completed.concat({
            ...completed,
            completed: true,
          }),
        };
      }
    case UNCOMPLETED:
      const uncompleted: ToDo | undefined = state.completed.find(
        (toDo: ToDo) => toDo.id === (action.payload as number),
      );
      if (!uncompleted) {
        return state;
      } else {
        return {
          ...state,
          toDos: state.toDos.concat({
            ...uncompleted,
            completed: false,
          }),
          completed: state.completed.filter(
            (toDo: ToDo) => toDo.id !== uncompleted.id,
          ),
        };
      }
    default:
      throw new Error();
  }
}

export default toDoReducer;
