import TaskItem from './TaskItem';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { useState } from 'react';
const TaskList = (props) => {
  const [show, setShow] = useState(false);

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
                  <ul className=" list-group list-group-flush">
                    <TaskItem
                      status={true}
                      title="finish the template"
                      date="in 7 days"
                      type="work"
                      details="this is details"
                      priority="bg-danger"
                    />
                    <TaskItem
                      status={false}
                      title="finish the template"
                      date="in 7 days"
                      type="work"
                      details="this is details"
                      priority="bg-warning"
                    />
                    <TaskItem
                      status={true}
                      title="finish the template"
                      date="in 7 days"
                      type="work"
                      details="this is details"
                      priority="bg-success"
                    />
                  </ul>
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
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" placeholder="Enter task title" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Task Details</Form.Label>
              <Form.Control type="text" placeholder="optional" />
            </Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="1">Low</option>
              <option value="2">Moderate</option>
              <option value="3">High</option>
            </Form.Control>
            <Form.Group>
              <br />

              <Form.Label>Due date</Form.Label>
              <Form.Control type="date" placeholder="Enter task title" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default TaskList;
