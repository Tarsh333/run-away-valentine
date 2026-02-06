import React, { useState } from 'react';

const RunAwayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 200);
    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'left 0.2s, top 0.2s',
        padding: '10px',
      }}
    >
      <button
        className="button-style"
        onMouseDown={moveButton}   // desktop click
        onTouchStart={moveButton} // mobile tap
      >
        No!
      </button>
    </div>
  );
};

export default RunAwayButton;
