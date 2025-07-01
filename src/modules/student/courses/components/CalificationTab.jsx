import React from 'react'
import { useGradesData } from '../hooks/useGradesData.js';


export function CalificationTab() {
  const { grades } = useGradesData();

  const getStatusBadge = (status, grade) => {
    switch (status) {
      case "Calificado":
        return (
            <div className="flex items-center  gap-3 ">
              <span className="whitespace-nowrap bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center">{grade}</span>
            </div>
        )
      case "Sin abrir":
        return (
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center">{grade}</span>
            </div>
        )
      case "Entregado":
        return (
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center">Sin calificar</span>
            </div>
        )
      case "Vencido":
        return (
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center">{grade}</span>
            </div>
        )
      default:
        return <span
            className="whitespace-nowrap bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center">Sin calificar</span>
    }
  }

  return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-bold text-[#374159]">Actividades</th>
              <th className="text-left py-4 px-6 font-bold text-[#374159]">Fecha de vencimiento</th>
              <th className="text-left py-4 px-6 font-bold text-[#374159]">Estado</th>
              <th className="text-left py-4 px-6 font-bold text-[#374159]">Calificación</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {grades.map((grade) => (
                <tr key={grade.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-medium text-[#374159]">{grade.activity}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-[#374159]">{grade.dueDate}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-gray-600">{grade.status}</div>
                  </td>
                  <td className="py-4 px-6">{getStatusBadge(grade.status, grade.grade)}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}


export default CalificationTab