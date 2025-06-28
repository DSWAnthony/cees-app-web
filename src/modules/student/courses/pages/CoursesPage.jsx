import React from 'react';

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
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '40px 20px'
    }}>
      <h1 style={{
        marginBottom: '30px',
        color: '#2A9786',
        fontWeight: 'bold',
        fontSize: '26px',
        textAlign: 'center'
      }}>
        Listado de cursos
      </h1>

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
  );
}

export default CoursesPage;