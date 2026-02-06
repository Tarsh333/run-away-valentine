import React from 'react';
import RunAwayButton from './RunAwayButton';
import './Please.css';

const Please = ({ lesgoo }) => {
  return (
    <form className="valentine-page" onSubmit={lesgoo}>
      <div className="heart-bg">❤️</div>

      <h1 className="valentine-text">Be my Valentine? 💘</h1>

      <img
        src="/us.jpeg" // 👈 replace with your image path
        alt="Us"
        className="couple-img"
      />

      <div className="button-row">
        <button className="yes-button" type="submit">
          Yes, I’m yours 💕
        </button>

        <RunAwayButton />
      </div>
    </form>
  );
};

export default Please;
