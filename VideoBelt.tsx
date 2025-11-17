import React from 'react';

const VideoBelt = () => {
  return (
    <div className="overflow-hidden bg-gray-900 py-4">
      <div className="flex animate-scroll" style={{ 
        animation: 'scroll 20s linear infinite' 
      }}>
        {/* Your video items */}
        <div className="flex space-x-4">
          {/* Add your video elements here */}
          <div className="flex-shrink-0 w-64 h-36 bg-gray-700 rounded-lg"></div>
          <div className="flex-shrink-0 w-64 h-36 bg-gray-700 rounded-lg"></div>
          <div className="flex-shrink-0 w-64 h-36 bg-gray-700 rounded-lg"></div>
          <div className="flex-shrink-0 w-64 h-36 bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoBelt;
