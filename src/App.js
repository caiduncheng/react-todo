import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "hello",
      day: "2020-04-11 14:30",
      important: true,
    },
    {
      id: 2,
      text: "hello",
      day: "2020-04-11 14:30",
      important: true,
    },
    {
      id: 3,
      text: "hello",
      day: "2020-04-11 14:30",
      important: true,
    },
    {
      id: 4,
      text: "hello",
      day: "2020-04-11 14:30",
      important: true,
    },
    {
      id: 5,
      text: "hello",
      day: "2020-04-11 14:30",
      important: true,
    },
  ]);

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // 添加任务

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "当前没有任务"
              )}
            </>
          )}
        />
        <Route path="/about" component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
