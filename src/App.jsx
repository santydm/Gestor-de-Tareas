import { useState, useEffect } from "react";
import {v4 as uuid4} from "uuid";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskStats from "./components/TaskStats/TaskStats";

function App() {
  const initialTasks = [
    {
      id: uuid4(),
      title: "Aprende React",
      description: "Estudiar los fundamentos de react",
      completed: false,
      createdAt: new Date()
    }
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [filter, setFilter] = useState('all'); // 'all','active', 'completed'
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ?  updatedTask : task
    );
    setTasks(updatedTasks);
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => 
    task.id === id ? {...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
  }
  const getFilteredTasks = () => {
    if (filter === "active") return tasks.filter(task => !task.completed);
    if (filter === "completed") return tasks.filter( task => task.completed);
    return tasks;
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3x1 font-bold mb-6 text-center">Gestion de Tareas</h1>
      <TaskForm
        onAdd={handleAddTask}
        onUpdate={handleUpdateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        />
      <div className="mt-6">
        <TaskStats tasks={tasks} />  
      </div>  
      <div className="mt-4">
        <TaskFilter filter={filter} setFilter={setFilter} />
      </div>
      
      <div className="mt-6">
        <TaskList 
          tasks={getFilteredTasks()}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}/>
      </div>
    </div>  
    </div>  
  );
}
export default App