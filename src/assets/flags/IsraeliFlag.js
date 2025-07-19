import React from 'react';

export default function IsraeliFlag() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-16 bg-gradient-to-b from-white via-blue-600 to-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      <span className="mt-1 text-xs font-medium">Israeli</span>
    </div>
  );
}
