// Create a new file named PlayButton.js (or any other suitable name)
// Place this file in the same directory as your Card1 component

// PlayButton.js
import React from 'react';

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    {/* Replace with your actual SVG path */}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" fill="#7644d8"/> <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="#7644d8"/>  </svg>
);

export default PlayButton;
