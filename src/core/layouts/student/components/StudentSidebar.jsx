// StudentSidebar.jsx
import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const StudentSidebar = () => {
  return (
    <Sider
        width={220}
        className="bg-white text-gray-800 shadow-md"
        style={{ position: 'fixed', height: '100vh', left: 0, top: 0, zIndex: 1000 }}
        breakpoint="lg"
        trigger={null}
        collapsible
        theme="light"
    >
        <div className="flex items-center justify-center h-50 bg-blue-500 text-white text-lg font-bold">
            Student 
        </div>
        <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="block px-4 py-2 hover:bg-gray-200">Courses</Link>
              </li>
              <li>
                <Link to="/pending-tasks" className="block px-4 py-2 hover:bg-gray-200">Pending Tasks</Link>
              </li>
              <li>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
              </li>
            </ul>
        </nav>
    </Sider>
  )
}

export default StudentSidebar;
