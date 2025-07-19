import React from 'react';

export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#4ADE80" />
      <path d="M30 50C30 39 39 30 50 30C61 30 70 39 70 50C70 61 61 70 50 70C39 70 30 61 30 50Z" fill="white" />
      <path d="M40 50C40 44.5 44.5 40 50 40C55.5 40 60 44.5 60 50C60 55.5 55.5 60 50 60C44.5 60 40 55.5 40 50Z" fill="#3B82F6" />
      <path d="M50 35L55 45L65 45L57 52L60 62L50 55L40 62L43 52L35 45L45 45L50 35Z" fill="#FBBF24" />
    </svg>
  );
}