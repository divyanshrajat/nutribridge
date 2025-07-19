import React from 'react';

export default function LanguageSelector() {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm text-gray-600">Language:</span>
      <select className="border border-gray-300 rounded p-1 text-sm">
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="he">Hebrew</option>
      </select>
    </div>
  );
}