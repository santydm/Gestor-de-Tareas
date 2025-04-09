function TaskFilter ({filter, setFilter}) {
    const filters = ['all', 'active', 'completed'];

    return (
        <div className="flex justify-center space-x-4 my-6">
            {filters.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-md border ${
                    filter === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  >
                    {f === 'all' && 'Todas'}
                    {f === 'active' && 'Activas'}
                    {f === 'completed' && 'Completadas'}
                </button>
            ))}
        </div>
    );
}
export default TaskFilter;