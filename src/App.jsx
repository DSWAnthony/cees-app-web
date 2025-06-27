import { useState } from 'react'
import CoursesPage from './modules/student/courses/pages/CoursesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='underline'> </h1>
      
      <CoursesPage></CoursesPage>
    </>
  )
}

export default App
