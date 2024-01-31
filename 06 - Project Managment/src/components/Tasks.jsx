import React from "react";
import NewTask from "./NewTask";

function Tasks({ tasks, onAddTasks, onDeleteTasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tarefas</h2>
      <NewTask onAdd={onAddTasks} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          Esse projeto não tem nenhuma tarefa ainda
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.descricao}</span>
              <button
                onClick={() => onDeleteTasks(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Limpar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
