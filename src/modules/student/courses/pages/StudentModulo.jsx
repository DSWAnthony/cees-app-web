import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const StudentModulo = () => {
  const [activeTab, setActiveTab] = useState('contenido');

  return (
    <div style={styles.container}>
      {/* Header con imagen optimizada */}
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Estrategias didácticas</h1>
        <div style={styles.imageContainer}>
          <img 
            src="https://www.revistaeconomia.com/wp-content/uploads/2024/09/Economia_Web-42-6-696x410.jpg" 
            alt="Banner del curso"
            style={styles.headerImage}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x300/f5f5f5/3498db?text=Banner+Curso';
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <div style={styles.navigation}>
        <div 
          style={activeTab === 'contenido' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('contenido')}
        >
          <strong>Contenido</strong>
        </div>
        <div 
          style={activeTab === 'calificaciones' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('calificaciones')}
        >
          Calificaciones
        </div>
        <div 
          style={activeTab === 'foro' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('foro')}
        >
          Foro
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        {/* Left Column */}
        <div style={styles.leftColumn}>
  {activeTab === 'contenido' && (
    <>
      <h2 style={styles.moduleTitle}>Módulo 1: Fundamentos de la didáctica universitaria
          <FaChevronDown style={styles.chevronIcon} />

      </h2>
      <h2 style={styles.moduleTitle}>Módulo 2: Estrategias de enseñanza
          <FaChevronDown style={styles.chevronIcon} />

      </h2>
      <h2 style={styles.moduleTitle}>Módulo 3: Evaluación educativa
          <FaChevronDown style={styles.chevronIcon} />

      </h2>
    </>
  )}
</div>

        {/* Right Column - Quiz */}
        <div style={styles.rightColumn}>
          <div style={styles.quizCard}>
            <h3 style={styles.quizTitle}>Módulo 1: Prueba W2</h3>
            <h4 style={styles.quizSubtitle}>Estrategias didácticas</h4>
            
            <div style={styles.quizSection}>
              <h5 style={styles.sectionHeader}>Descripción</h5>
              <p style={styles.quizText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <hr style={styles.divider} />
            
            <div style={styles.quizSection}>
              <h5 style={styles.sectionHeader}>Fecha límite</h5>
              <p style={styles.quizText}>12/06/2025 23:59</p>
            </div>
            
            <hr style={styles.divider} />
            
            <div style={styles.quizSection}>
              <h5 style={styles.sectionHeader}>Límite de tiempo</h5>
              <p style={styles.quizText}>30 minutos</p>
            </div>
            
            <hr style={styles.divider} />
            
            <div style={styles.quizSection}>
              <h5 style={styles.sectionHeader}>Intentos</h5>
              <p style={styles.quizText}>3 intentos restantes</p>
            </div>
            
            <hr style={styles.divider} />
            
            <div style={styles.quizSection}>
              <h5 style={styles.sectionHeader}>Calificación</h5>
           <div style={styles.gradeContainer}>
          <p style={styles.quizText}>Sin intentos</p>
          <div style={styles.scoreBox}>
            -20
          </div>
        </div>
            </div>
            
            <button style={styles.quizButton}>
              Iniciar evaluación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos optimizados con alineación corregida
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: '25px',

  },
  
  header: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '15px',
    fontWeight: '600',
  },
    gradeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '5px',
  },
    chevronIcon: {
    fontSize: '14px',
    color: '#555',
    verticalAlign: 'middle',
    marginLeft: 'auto',

  },
  scoreBox: { //butoonnnnn
      fontSize: '16px',
    color: '#2c3e50',
    marginBottom: '30px',
    padding: '10px 45px',
    backgroundColor: '#D9D9D9',
    borderRadius: '30px',
    fontWeight: '600',
      marginLeft: 'auto',
    lineHeight: '1.4',
    textTransform: 'none'
     // ← Esto desactiva las mayúsculas
    
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  navItem: {
    fontSize: '18px',
    color: '#555',
    cursor: 'pointer',
    padding: '5px 0',
    transition: 'all 0.3s ease',
  },
  activeNavItem: {
    fontSize: '18px',
    color: '#2c3e50',
    fontWeight: 'bold',
    borderBottom: '3px solid #3498db',
    paddingBottom: '5px',
  },
  contentWrapper: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: 1,
    minWidth: '0',
  },
  rightColumn: {
    width: '350px',
    position: 'sticky',
    top: '120px', // Ajuste clave para la alineación
    alignSelf: 'flex-start',
    marginTop: '20px',
  },
  moduleTitle: {
    fontSize: '16px',                   // Tamaño reducido (antes 18px)
    color: '#2c3e50',
    marginBottom: '15px',
    padding: '15px',                    // Padding interno reducido
    backgroundColor: '#f8f9fa',
    fontWeight: '600',                  // Negrita moderada
    borderLeft: '4px solid #3498db',    // Línea lateral azul
    textTransform: 'none',
  display: 'flex',
    gap: '10px',
    
  },
  quizCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  quizTitle: {
    fontSize: '20px',
    color: '#2c3e50',
    marginBottom: '5px',
  },
  quizSubtitle: {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '15px',
  },
  quizSection: {
    marginBottom: '15px',
  },
  sectionHeader: {
    fontSize: '16px',
    color: '#2c3e50',
    marginBottom: '8px',
    fontWeight: '600',
  },
  quizText: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
    margin: '0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #eee',
    margin: '15px 0',
  },
  points: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '5px 0 0',
  },
  quizButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
    }
}
};

export default StudentModulo;