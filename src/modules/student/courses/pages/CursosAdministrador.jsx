import React from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit, FaEllipsisV } from 'react-icons/fa';

export default function CursosAdministrador() {
  const cursos = [
    {
      id: 1,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
    {
      id: 2,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
    {
      id: 3,
      imagen: 'https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg',
      titulo: 'Estrategias Didácticas',
      descripcion: 'Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.',
      profesor: 'José Valdez',
      precio: 'S/ 500',
      duracion: '120h',
      certificado: 'Sí',
    },
  ];

  return (
    <div className="p-8">
      {/* Título */}

<h1 className="text-3xl font-bold mb-2 text-green-600">Cursos</h1>

      {/* Buscador y botón */}
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <div className="flex items-center bg-white border rounded px-3 py-2 w-64 shadow-sm">
          <FaSearch className="text-gray-400 mr-2 text-sm" />
          <input
            type="text"
            placeholder="Buscar curso..."
            className="outline-none w-full text-sm"
          />
        </div>
        {/* Botón Crear */}
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm rounded px-4 py-2 shadow">
          <FaPlus className="mr-2" /> Crear Nuevo Curso
        </button>
      </div>

      {/* Tarjetas */}
      <div className="flex justify-center flex-wrap gap-20">
        {cursos.map((curso) => (
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl w-[350px] h-[500px] flex flex-col">
            {/* Imagen */}
            <img
              src={curso.imagen}
              alt="Curso"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            {/* Contenido */}
            <div className="p-4 max-w-xl mx-auto bg-white rounded shadow flex flex-col flex-1 justify-between">
  {/* Título y descripción */}
            <div>
            <h1 className="text-0xl font-bold mb-4">Estrategias Didácticas</h1>
            <p className="mb-2">
                Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior.
            </p>
            {/* "Profesor:" alineado a la derecha */}
            <span className="font-semibold">Profesor:</span> 
            {/* Nombre pegado a la izquierda del espacio restante */}
            <span className="text-left w-full ml-41">José Valdez</span>

            {/* "Profesor:" alineado a la derecha */}
            <span className="font-semibold">Precio:</span> 
            {/* Nombre pegado a la izquierda del espacio restante */}
            <span className="text-left w-full ml-54">S/ 500</span>

            {/* "Profesor:" alineado a la derecha */}
            <span className="font-semibold">Duración:</span> 
            {/* Nombre pegado a la izquierda del espacio restante */}
            <span className="text-left w-full ml-51">120h</span>

            {/* "Profesor:" alineado a la derecha */}
            <span className="font-semibold">Certificado:</span> 
            {/* Nombre pegado a la izquierda del espacio restante */}
            <span className="text-left w-full ml-52"> Sí</span>
           
        </div>
              {/* Botones */}
              <div className="flex justify-between items-center mt-2">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-3 w-24 h-10">
                <FaEye className="mr-2" /> Ver
                </button>

                <button className="flex items-center bg-green-600 hover:bg-green-700 text-white rounded px-4 py-3 w-24 h-10">
                <FaEdit className="mr-2" /> Editar
                </button>

                <button className="flex items-center justify-center bg-[#4b6c63] hover:bg-[#3b5a52] rounded p-3 w-20 h-10">
                <FaEllipsisV className="text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}