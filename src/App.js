import React, { useEffect, useState } from 'react';
import Please from './Please';
import Yayy from './Yayy';
import ValentineLanding from './ValentineLanding';
import './App.css';
import details from './Email';
import emailjs from 'emailjs-com';

const App = () => {
  const [yes, setYes] = useState(null);
  const [landingDone, setLandingDone] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('yes!!') != null) {
      setYes(true);
    }
  }, []);

  const lesgoo = (e) => {
    e.preventDefault();
    setYes(true);

    emailjs
      .sendForm(`Steins;Gate`, details.TEMPLATE_ID, e.target, details.USER_ID)
      .then(
        (result) => {
          alert('Yayyyyyyy!!!!!!!!');
        },
        (error) => {
          alert('An error occurred, Please try again');
        }
      );

    localStorage.setItem('yes!!', 'yayy!');
  };

  // ❤️ SHOW LANDING FIRST
  if (!landingDone) {
    return <ValentineLanding onComplete={() => setLandingDone(true)} />;
  }

  // 👉 EXISTING APP CONTINUES
  return (
    <div className="home">
      {yes == null ? <Please lesgoo={lesgoo} /> : <Yayy />}
    </div>
  );
};

export default App;
