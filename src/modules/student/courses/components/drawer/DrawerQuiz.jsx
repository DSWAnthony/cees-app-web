import React from 'react';
import { Drawer } from 'antd';

const DrawerQuiz = ({ open, onClose, item }) => (
  <Drawer
    open={open}
    width={350}
    onClose={onClose}
    title={item.title || 'Quiz'}
    footer={
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => {/* handle submit quiz */}}
        >
          Submit
        </button>
      </div>
    }
  >
    {/* render quiz details using item */}
    <h1>{item.title}</h1>
  </Drawer>
);

export default DrawerQuiz;