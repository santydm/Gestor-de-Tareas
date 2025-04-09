function TaskStats ({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    return (
        <div className="text-center my-6">
            <p className="text-lg font-semibold">Total: {total} </p>
            <p className="text-green-600"> Completadas: {completed} </p>
            <p className="text-red-600">Pendientes: {pending} </p>
        </div>
    );
}

export default TaskStats;