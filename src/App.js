import logo from './logo.svg';
import TaskList from './components/TasksList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    // <div className="App">
    <center>
      <TaskList name="Past" />
      <TaskList name="Today" showAdd={true} />
      <TaskList name="Future" />
    </center>
  );
}

export default App;
