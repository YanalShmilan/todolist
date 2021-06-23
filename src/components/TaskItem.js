import { useState } from 'react';
import {
  Trash,
  Pencil,
  App,
  CheckSquare,
  ExclamationSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { deleteTask, changeTask, checkTask } from '../store/actions';

const TaskItem = (props) => {
  const data = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkTask(props.id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(props.id));
  };
  const handleChangeTask = () => {
    const task = data.find((task) => (task.id = props.id));
    dispatch(changeTask(props.id, task));
  };
  console.log(props.isFinished);
  return (
    <li className="list-group-item">
      <div class="card-wrapper">
        <div class="card-details">
          {/* <h3 class="card-title">Product #1</h3> */}
          <div className={`todo-indicator ${props.priority}`}></div>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-2">
                {props.isFinished && props.status === false ? (
                  <div className="custom-checkbox custom-control">
                    <App style={{ color: 'grey' }} />
                  </div>
                ) : (
                  <div className="custom-checkbox custom-control">
                    {props.status ? (
                      <CheckSquare onClick={() => handleCheck()} />
                    ) : (
                      <App onClick={() => handleCheck()} />
                    )}
                  </div>
                )}
              </div>
              <div className="widget-content-left">
                <div className="widget-heading">
                  {props.title}{' '}
                  {/* <div className="badge badge-danger ml-2">
                    Rejected
                  </div> */}
                </div>
                <div className="widget-subheading">
                  <i>
                    {props.type} - {props.date}
                  </i>
                </div>
              </div>
              {props.isFinished && props.status === false ? (
                <div className="widget-content-right">
                  {' '}
                  <button className="border-0 btn-transition btn ">
                    {' '}
                    <i className="fa fa-check" onClick={() => {}}>
                      <Pencil style={{ color: 'grey' }} />
                    </i>
                  </button>{' '}
                  <button className="border-0 btn-transition btn ">
                    {' '}
                    <i class="far fa-trash-alt" onClick={() => {}}>
                      <Trash style={{ color: 'grey' }} />
                    </i>{' '}
                  </button>{' '}
                </div>
              ) : (
                <div className="widget-content-right">
                  {' '}
                  <button className="border-0 btn-transition btn btn-outline-success">
                    {' '}
                    <i className="fa fa-check" onClick={handleChangeTask}>
                      <Pencil />
                    </i>
                  </button>{' '}
                  <button className="border-0 btn-transition btn btn-outline-danger">
                    {' '}
                    <i class="far fa-trash-alt" onClick={handleDelete}>
                      <Trash />
                    </i>{' '}
                  </button>{' '}
                </div>
              )}
            </div>
          </div>
          <hr />
        </div>
        {/* <!-- end card-details --> */}

        <span class="reveal-details">
          <p> {props.details}</p>
        </span>
        {/* <!-- end reveal-details --> */}
      </div>
      {/* <!-- end card-wrapper --> */}
    </li>
  );
};
export default TaskItem;
