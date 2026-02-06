import React, { useState } from 'react';
import './ValentineLanding.css';

const messages = [
  'Tap to fill with love 💖',
  'Keep going 💕',
  'A little more 💗',
  'Almost there 💘',
  'I can feel it 💓',
  'My heart is racing 💞',
  'Just one more touch 💝',
];

const ValentineLanding = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const handleTap = () => {
    if (ready) return;

    const nextProgress = Math.min(progress + 100 / 7, 100);
    setProgress(nextProgress);

    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    }

    if (nextProgress === 100) {
      setReady(true);
      setTimeout(onComplete, 1200); // 👈 continue app
    }
  };

  return (
    <div className="valentine-container">
      <div className="heart" onClick={handleTap}>
        ❤️
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="message">{ready ? 'Ready? 💘' : messages[messageIndex]}</p>
    </div>
  );
};

export default ValentineLanding;
