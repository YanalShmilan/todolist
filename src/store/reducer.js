import {
  CREATE_TASK,
  DELETE_TASK,
  CHANGE_TASK,
  CHECK_TASK,
  FETCH_TASKS,
} from './actions';
import data from '../data';
const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case CREATE_TASK:
      const newTask = action.payload.task;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case DELETE_TASK:
      const newTasks = state.tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
      return {
        ...state,
        tasks: newTasks,
      };
    case CHANGE_TASK:
      const newTasks2 = state.tasks.map((task) =>
        task.id !== action.payload.taskId ? task : action.payload.task
      );
      return {
        ...state,
        tasks: newTasks2,
      };
    case CHECK_TASK:
      const taskToCheck = state.tasks.find(
        (task) => task.id === action.payload.taskId
      );
      taskToCheck.status = !taskToCheck.status;
      const newTasks3 = state.tasks.map((task) =>
        task.id !== action.payload.taskId ? task : taskToCheck
      );
      return {
        ...state,
        tasks: newTasks3,
      };

    default:
      return state;
  }
};

export default reducer;
