function  TaskList({ tasks, onDelete, onToggleComplete }) {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-400">No hay tareas aun</p>
    }

    return (
        <ul className="space-y-4 mt-4">
            {tasks.map((task) => (
                <li key={task.id} className={`bg-gray-800 p-4 rounded-md flex justify-between items-center ${task.completed ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task.id)} className="w-4 h-4" />
                    <div>
                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <p className="text-sm text-gray-400">{task.description}</p>
                    </div> 
                </div>
                <button onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:text-red-700">
                    Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;