import React from 'react';

export default function IndianFlag() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-16 bg-gradient-to-b from-orange-500 via-white to-green-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute w-6 h-6 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
      <span className="mt-1 text-xs font-medium">Indian</span>
    </div>
  );
}