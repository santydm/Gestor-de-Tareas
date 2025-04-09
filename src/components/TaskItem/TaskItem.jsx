import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
    return (
        <div
        className={`items-start justify-between bg-white p-4 rounded shadow transition-all 
        ${task.completed ? 'opacity-60 line-through text-gray-500' : ''}`}>
        <div className="flex items-start gap-3">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1"/>
            <div>
                <h3 className="font-bold text-lg">{task.title}</h3>
                <p className="text-sm">{task.description}</p>
            </div>
        </div>

        <div className="flex gap-2">
            <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:underline text-sm">Editar</button>
            <button
            onClick={() => onDelete(task)}
            className="text-red-600 hover:underline text-sm">Eliminar</button>
        </div>
        </div>
    );
}

export default TaskItem;