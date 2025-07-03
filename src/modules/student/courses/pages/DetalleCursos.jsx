import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function DetalleCursos() {
  // Lista de PDFs (pueden ser diferentes si lo deseas)
  const pdfUrl = 'https://materialeseducativos.org/wp-content/uploads/Logica-Proposicional-II-Para-Quinto-Grado-de-Secundaria.pdf';
  const thumbnailUrl = 'https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g';

  // Crear una lista de 6 elementos
  const pdfs = Array(6).fill({ url: pdfUrl, thumb: thumbnailUrl });

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white min-h-screen">
      {/* Título */}
      <h1 className="text-3xl font-bold text-blue-800 mb-1">Tema 1 Presentación</h1>
      <p className="text-gray-400 font-semibold mb-6">Estrategias Didácticas</p>

      {/* Botón volver */}
      <button className="flex items-center text-teal-600 mb-8 hover:underline">
        <FaArrowLeft className="mr-2" />
        Volver a la pantalla anterior
      </button>

      {/* Contenido */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Logro de aprendizaje */}
        <section className="mb-6">
          <h2 className="text-md font-semibold text-gray-700 mb-2">Logro de aprendizaje</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. 
          </p>
        </section>

        {/* Material de la clase */}
        <section>
          <h2 className="text-md font-semibold text-gray-900 mb-2">Material de la clase</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.  
          </p>

          {/* Grid de miniaturas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {pdfs.map((pdf, index) => (
              <a
                key={index}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <img
                  src={pdf.thumb}
                  alt={`PDF ${index + 1}`}
                  className="h-[150px] object-contain border-2 border-gray-300 shadow-sm rounded hover:scale-105 transition-transform duration-200"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
