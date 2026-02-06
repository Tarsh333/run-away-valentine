import React, { useState } from 'react';
import './Please.css';

const RunAwayButton = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 + 120,
    y: window.innerHeight / 2 + 120,
  });

  const moveButton = () => {
    const padding = 100;
    const newX = Math.random() * (window.innerWidth - padding);
    const newY = Math.random() * (window.innerHeight - padding);

    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      type="button"
      className="no-button"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
      onMouseDown={moveButton}
      onTouchStart={moveButton}
    >
      No 😈
    </button>
  );
};

export default RunAwayButton;
