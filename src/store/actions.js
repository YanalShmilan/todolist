import axios from 'axios';
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:8000/tasks');
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTask = (task) => {
  return async (dispatch) => {
    try {
      task.status = false;
      const res = await axios.post(`http://localhost:8000/tasks`, task);
      task = res;
      dispatch({
        type: CREATE_TASK,
        payload: { task },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const changeTask = (taskId, task) => {
  return async (dispatch) => {
    try {
      if (task.priority === 'bg-success') {
        task.priority = 'bg-warning';
      } else if (task.priority === 'bg-warning') {
        task.priority = 'bg-danger';
      } else {
        task.priority = 'bg-success';
      }
      console.log(task);
      const res = await axios.put(
        `http://localhost:8000/tasks/${taskId}`,
        task
      );
      task = res;
      dispatch({
        type: CHANGE_TASK,
        payload: { taskId, task },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const checkTask = (taskId) => {
  return {
    type: CHECK_TASK,
    payload: { taskId },
  };
};
