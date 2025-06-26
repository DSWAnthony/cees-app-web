import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentLayout from '../layouts/student/pages/StudentLayout'
import ProfilePage from '../../modules/student/profile/pages/ProfilePage.jsx'
import PendingTasksPage from '../../modules/student/pending-tasks/pages/PendingTasksPage';
import PendingTaskDetailPage from '../../modules/student/pending-tasks/pages/PendingTaskDetailPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          <Route index path="home" element={<div>Student Home Page</div>} />
          <Route path="courses" element={<div>Student Courses Page</div>} />
          <Route path="pending-tasks" element={<PendingTasksPage />} />
          <Route path="pending-tasks/:id" element={<PendingTaskDetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<div>Student Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
