// Main.js
import React from 'react';
import a  from './a.png';
import f  from './1.png';
import s  from './2.png';
import t  from './3.png';
import ft from './4.png';

import MainContent from './MainContent';

export default function Main() {
  return (
    <div
      style={{
        backgroundImage: `url(${a})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#fff'
        }}
      >
        <h1>Welcome To QuizArena.com</h1>
        <p style={{ marginTop: '0.5%', fontSize: '1.5rem' }}>
          – Ultimate Quiz Site
        </p>
      </header>

      <div
        className="options"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '2rem',
          gap: '2rem'
        }}
      >
        <MainContent title="General Knowledge" image={f} path="/gk" />
        <MainContent title="History"           image={s} path="/history" />
        <MainContent title="Sports"            image={t} path="/sports" />
        <MainContent title="Animals"           image={ft} path="/animals" />
      </div>
    </div>
  );
}