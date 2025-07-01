import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video } from 'lucide-react';

const CourseCard = ({ id, title, description }) => {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="text-blue-600" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <Link
        to={`/courses/${id}/recordings`}
        className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
      >
        <Video size={18} /> Ver grabaciones
      </Link>
    </div>
  );
};

export default CourseCard;
