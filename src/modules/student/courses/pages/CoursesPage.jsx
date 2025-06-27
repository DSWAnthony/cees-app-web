import React, { useState } from 'react';
import { FaBook, FaStar, FaTasks, FaCalendarAlt, FaUser, FaBars } from 'react-icons/fa';

const cursos = [
  {
    title: "Estrategias Didácticas",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
  {
    title: "Diseño de planes de estudio para prueba",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
  {
    title: "Pedagogía Interculturales",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
  {
    title: "Estrategias Didácticas",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
  {
    title: "Diseño de planes de estudio para prueba",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
  {
    title: "Pedagogía Interculturales",
    professor: "Dr José Valdez",
    image: "https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg"
  },
];

const CoursesPage = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Puedes reemplazar esta función con la lógica real de logout/redirección
  const handleLogout = () => {
    alert('Sesión cerrada');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      {/* Menú lateral */}
      {menuOpen && (
        <aside style={{
          width: '250px',
          backgroundColor: '#2A9786',
          padding: '25px 20px',
          boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          height: '100%',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
              fontSize: '22px',
              fontWeight: 'bold',
            }}>
              <FaUser style={{ marginRight: '10px', fontSize: '24px' }} />
              Bienvenido
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={menuItemStyle}><FaBook style={iconStyle} /> <span>Cursos</span></li>
              <li style={menuItemStyle}><FaStar style={iconStyle} /> <span>Calificaciones</span></li>
              <li style={menuItemStyle}><FaTasks style={iconStyle} /> <span>Tareas pendientes</span></li>
              <li style={menuItemStyle}><FaCalendarAlt style={iconStyle} /> <span>Calendario</span></li>
              <li style={menuItemStyle}><FaUser style={iconStyle} /> <span>Perfil</span></li>
            </ul>
          </div>

          <div>
            <li 
              style={{
                ...menuItemStyle,
                marginTop: '10px',
                backgroundColor: '#1377BD',
                justifyContent: 'center',
              
              }}
              onClick={handleLogout}
            >
              🔒 Cerrar sesión
            </li>
            <p style={{ fontSize: '12px', textAlign: 'center', color: '#d0f0ed', marginTop: '15px' }}>
              © 2025 Plataforma Educativa
            </p>
          </div>
        </aside>
      )}

      {/* Contenido principal */}
      <div style={{
        flex: 1,
        padding: '20px',
        backgroundColor: '#f0f0f0',
        overflowY: 'auto'
      }}>
        <button
          onClick={toggleMenu}
          style={{
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          <FaBars />
        </button>

         <h1 style={{ marginBottom: '20px', color:'#2A9786', fontWeight: 'bold',fontSize: '24px',marginLeft: '20px' }}>Listado de cursos</h1>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}>
          {cursos.map((curso, index) => (
            <div key={index} style={{
              width: '500px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              marginRight: '20px',
              marginBottom: '20px',
            }}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img src={curso.image} alt={curso.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px' }}>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  {curso.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
                  Profesor: {curso.professor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Estilos
const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '18px',
  padding: '10px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#fff',
  transition: 'background 0.3s',
  backgroundColor: 'transparent'
};

const iconStyle = {
  fontSize: '18px'
};

export default CoursesPage;