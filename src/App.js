import logo from './logo.svg';
import TaskList from './components/TasksList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.tasks);
  // const finished = data.filter(
  //   (task) => new Date(task.dueDate) < new Date() || task.status === true
  // );
  const finished = data.filter((task) => task.status === true);
  const today = data
    .filter(
      (task) =>
        (new Date(task.dueDate) > new Date() &&
          task.status === false &&
          new Date(task.dueDate).getDate() < new Date().getDate() + 1) ||
        (new Date(task.dueDate) < new Date() && task.status === false)
    ).sort(function(a, b) {     let dateA = new Date(a.dueDate), dateB = new Date(b.dueDate);     return dateB - dateA; });
  const future = data.filter(
    (task) =>
      new Date(task.dueDate).getDate() > new Date().getDate() + 1 &&
      task.status === false
  );

  console.log(future);

  return (
    // <div className="App">
    <center>
      <TaskList data={today} name="Today" showAdd={true} />
      <TaskList data={future} name="Future" />
      <TaskList data={finished} name="Finshed" />
    </center>
  );
}

export default App;
