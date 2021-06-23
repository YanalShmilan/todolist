import TaskItem from './TaskItem';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Moment from 'react-moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../store/actions';
const TaskList = (props) => {
  const [task, setTask] = useState({
    priority: 'bg-warning',
    type: 'Personal',
  });
  const dispatch = useDispatch();
  const data = props.data;
  let tasks = [];
  if (props.name === 'Today') {
    tasks = data.map((task) => {
      if (new Date(task.dueDate) < new Date()) {
        return (
          <TaskItem
            id={task.id}
            status={task.status}
            title={task.name}
            date={<Moment from={new Date()}>{task.dueDate}</Moment>}
            type={task.type}
            details={task.details}
            priority={task.priority}
            isFinished={true}
          />
        );
      } else {
        return (
          <TaskItem
            id={task.id}
            status={task.status}
            title={task.name}
            date={<Moment from={new Date()}>{task.dueDate}</Moment>}
            type={task.type}
            details={task.details}
            priority={task.priority}
            isFinished={false}
          />
        );
      }
    });
  } else {
    tasks = data.map((task) => (
      <TaskItem
        id={task.id}
        status={task.status}
        title={task.name}
        date={<Moment from={new Date()}>{task.dueDate}</Moment>}
        type={task.type}
        details={task.details}
        priority={task.priority}
      />
    ));
  }

  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    dispatch(createTask(task));
    setTask({ priority: 'bg-warning', type: 'Personal' });
    handleClose();
  };
  const handleChange = async (event) => {
    console.log('here');
    await setTask({ ...task, [event.target.name]: event.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="fa fa-tasks"></i>&nbsp;{props.name}
            </div>
          </div>
          <div className="scroll-area-sm">
            <perfect-scrollbar className="ps-show-limits">
              <div style={{ position: 'static' }} className="ps ps--active-y">
                <div className="ps-content">
                  <ul className=" list-group list-group-flush">{tasks}</ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          {props.showAdd && (
            <div class="d-block text-right card-footer">
              <button class="btn btn-primary" onClick={handleShow}>
                Add Task
              </button>
            </div>
          )}
        </div>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Enter task title"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Task Details</Form.Label>
              <Form.Control
                name="details"
                type="text"
                onChange={handleChange}
                placeholder="optional"
              />
            </Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              name="priority"
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={handleChange}
              value={task.priority}
              custom
            >
              <option value="bg-success">Low</option>
              <option value="bg-warning">Moderate</option>
              <option value="bg-danger">High</option>
            </Form.Control>
            <Form.Label>Type</Form.Label>
            <Form.Control
              name="type"
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={handleChange}
              value={task.type}
              custom
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </Form.Control>
            <Form.Label>Due date</Form.Label>
            {/* <Form.Control
                type="datetime-local"
                placeholder="Enter task title"
              /> */}
            <Datetime
              name="date"
              onChange={(value) => {
                setTask({ ...task, ['dueDate']: value.toDate() });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default TaskList;
