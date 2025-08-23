import React from 'react';
import a from './a.png'; // optional: reuse your background

export default function AboutUs() {
  const style = {
    backgroundImage: `url(${a})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    padding: '2rem'
  };

  return (
    <div style={style}>
      <div className="container">
        <h1>About QuizArena</h1>
        <p>
          QuizArena is your one-stop destination for fast, fun, and free quizzes
          spanning multiple categories—General Knowledge, History, Sports, Animals, and more.
        </p>
        <h3>Our Mission</h3>
        <p>
          We believe learning should be engaging and interactive. Our quizzes help
          you test your knowledge, challenge friends, and discover new trivia every day.
        </p>
        <h3>Built With</h3>
        <ul>
          <li>React for a dynamic, component-based UI</li>
          <li>React Router for seamless navigation</li>
          <li>Open Trivia DB API for fresh questions</li>
          <li>Bootstrap for quick, responsive styling</li>
        </ul>
        <h3>Meet the Team</h3>
        <p>
          This project was crafted by a team of passionate developers dedicated to
          making learning fun. Feedback and contributions are always welcome on our
          GitHub repo.
        </p>
      </div>
    </div>
  );
}