import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePendingTasks from '../hooks/usePendingTasks';

const PendingTaskDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const tasks = usePendingTasks();
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) return <div className="p-4">Tarea no encontrada</div>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
      <p><strong>Curso:</strong> {task.course}</p>
      <p className="text-gray-600 mt-2">{task.description}</p>
      <p className="text-sm text-gray-500 mt-2">Vence: {task.dueDate}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
      >
        Volver
      </button>
    </div>
  );
};

export default PendingTaskDetailPage;
