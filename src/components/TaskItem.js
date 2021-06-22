import { useState } from 'react';
import { Trash, Pencil } from 'react-bootstrap-icons';

const TaskItem = (props) => {
  const [check, setCheck] = useState(props.status);
  return (
    <li className="list-group-item">
      <div class="card-wrapper">
        <div class="card-details">
          {/* <h3 class="card-title">Product #1</h3> */}
          <div className={`todo-indicator ${props.priority}`}></div>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-2">
                <div className="custom-checkbox custom-control">
                  {' '}
                  <input
                    className="custom-control-input"
                    //   id="exampleCustomCheckbox12"
                    type="checkbox"
                    defaultChecked={check}
                    onChange={() => {
                      if (check === true) {
                        setCheck(false);
                      } else {
                        setCheck(true);
                      }
                    }}
                  />
                  <label
                    className="custom-control-label"
                    // onChange={() => {
                    //   if (check === true) {
                    //     setCheck(false);
                    //   } else {
                    //     setCheck(true);
                    //   }
                    // }}
                    // for="exampleCustomCheckbox12"
                  ></label>{' '}
                </div>
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
              <div className="widget-content-right">
                {' '}
                <button className="border-0 btn-transition btn btn-outline-success">
                  {' '}
                  <i className="fa fa-check">
                    <Pencil />
                  </i>
                </button>{' '}
                <button className="border-0 btn-transition btn btn-outline-danger">
                  {' '}
                  <i class="far fa-trash-alt">
                    <Trash />
                  </i>{' '}
                </button>{' '}
              </div>
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
