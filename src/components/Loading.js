import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full rotate-45">
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-purple-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;