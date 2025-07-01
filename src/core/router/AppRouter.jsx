import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentLayout from '../layouts/student/pages/StudentLayout'
import ProfilePage from '../../modules/student/profile/pages/ProfilePage.jsx'
import PendingTasksPage from '../../modules/student/pending-tasks/pages/PendingTasksPage';
import PendingTaskDetailPage from '../../modules/student/pending-tasks/pages/PendingTaskDetailPage';
import CoursesPage from '../../modules/student/courses/pages/CoursesPage.jsx';
import CourseDetailPage from '../../modules/student/courses/pages/CourseDetailPage.jsx';
import ForumDiscussionPage from '../../modules/student/courses/pages/ForumDiscussionPage.jsx';
import DrawerQuiz from '../../modules/student/courses/components/drawer/DrawerQuiz.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          <Route index path="home" element={<div>Student Home Page</div>} />
          <Route path="courses" element={ <CoursesPage/>} />
          <Route path="courses/detail" element={ <CourseDetailPage/> } />
          <Route path="pending-tasks" element={<PendingTasksPage />} />
          <Route path="pending-tasks/:id" element={<PendingTaskDetailPage />} />
          <Route path="califications" element={<div>Califications Page</div>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="calendar" element={<div>Calendar Page</div>} />
          <Route path="courses/detail/forum" element={ <ForumDiscussionPage/>} />
          <Route path="quiz" element={<DrawerQuiz></DrawerQuiz>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
