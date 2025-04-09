import { useState, useEffect } from "react";
import {v4 as uuid4} from "uuid";

export default function TaskForm({onAdd, onUpdate, editingTask, setEditingTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            alert("Debe introducir un titulo");
            return;
        }

        if (editingTask) {
            onUpdate({
                ...editingTask,
                title,
                description,
            });
            setEditingTask(null);
        } else {
            const newTask = {
                id: uuid4(),
                title,
                description,
                completed: false,
                createdAt: new Date(),
            };
            onAdd(newTask);
            console.log("Tarea agregada: ", newTask);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-md shadow-md max-w-lg mx-auto">
    <h2 className="text-xl font-bold mb-4 text-white">
       {editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
    </h2>

    <input 
      type="text" 
      placeholder="Titulo" 
      className="w-full mb-2 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea 
      placeholder="Descripcion" 
      className="w-full mb-2 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      value={description} 
      onChange={(e) => setDescription(e.target.value)}
    ></textarea>

    <button 
      type="submit" 
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {editingTask ? 'Actualizar': 'Agregar'}
    </button>
</form>    
    )
}