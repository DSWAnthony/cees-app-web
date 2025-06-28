import { useState } from 'react'
import CoursesPage from './modules/student/courses/pages/CoursesPage'
import StudentModulo from './modules/student/courses/pages/StudentModulo'

function App() {
  const [currentView, setCurrentView] = useState('courses')

  return (
    <div style={{ padding: '20px' }}>
      {/* Contenedor centrado para los botones */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        gap: '10px' // Espacio entre botones
      }}>
        <button
          onClick={() => setCurrentView('courses')}
          style={{
             padding: '10px 20px',
            backgroundColor: currentView === 'courses' ? '#4CAF50' : '#e0e0e0',
            color: currentView === 'courses' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '500',
            ':hover': {
              backgroundColor: '#4CAF50',
              color: 'white'
            }
          }}
        >
          Mostrar Cursos
        </button>
        <button
          onClick={() => setCurrentView('student')}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === 'student' ? '#4CAF50' : '#e0e0e0',
            color: currentView === 'student' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '500',
            ':hover': {
              backgroundCoor: '#4CAF50',
              color: 'white'
            }
          }}
        >
          Mostrar Estudiante
        </button>
      </div>

      {/* Renderizado condicional de los componentes */}
      {currentView === 'courses' && <CoursesPage />}
      {currentView === 'student' && <StudentModulo />}
    </div>
  )
}

export default App;