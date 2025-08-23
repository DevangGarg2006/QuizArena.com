import React, { useEffect, useState } from 'react';
import background from './a.png';

function decode(html) {// Decodes any HTML entities (like &quot;) in quiz questions or answers into readable text
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function shuffle(array) {//Shuffles an array randomly—used to mix up the answer choices so the correct one isn’t always in the same spot
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Animals() {
  const [questions, setQuestions] = useState([]);//Stores the array of quiz questions fetched from the API
  const [current, setCurrent] = useState(0);//Tracks the index of the current question being displayed
  const [selected, setSelected] = useState(null);//Tracks which answer the user clicked for the current question
  const [score, setScore] = useState(0);//Keeps track of how many correct answers the user has submitted
  const [loading, setLoading] = useState(true);// data loading
  const [error, setError] = useState(null);//sees that if  API errors
  const [finished, setFinished] = useState(false);// whether the quiz has ended
  const fetchQuestions = async () => {//Starts an asynchronous function to get quiz questions
    setLoading(true);//Indicates the app is busy loading  resets any previous error message
    setError(null);// resets any previous error message
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=10&category=27');
      const data = await res.json();//Converts the API response to a JavaScript object
      const prepped = data.results.map(q => ({
        ...q,//Copies all its properties (...q)
        answers: shuffle([...q.incorrect_answers, q.correct_answer])//Creates a new answers array by combining correct and incorrect answers, then shuffling it
      }));
      setQuestions(prepped);
    } catch (err) {//if Catches any error
      setError('Unable to load questions.');//sets the error message
    } finally {
      setLoading(false);//finally  ends the loading state
    }
  };

  useEffect(() => {//Runs only once when the component mounts, triggering the question-fetching logic
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {//Records the user’s answer and updates their score if it was correct
    setSelected(answer);
    if (answer === questions[current].correct_answer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {//Goes to the next question or ends the quiz if it was the last one
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {//Goes to the next question or ends the quiz if it was the last one
    setScore(0);
    setCurrent(0);
    setSelected(null);
    setFinished(false);
    fetchQuestions();
  };

  const containerStyle = {//Defines styling for the entire quiz wrapper, using your background image for visual appeal
    padding: 24,
    margin: '0 auto',
    width: "100%",
    color: 'white',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  };

  if (loading) return <div style={containerStyle}><h2>Animals Quiz</h2><p>Loading...</p></div>;

  if (error) return (
    <div style={containerStyle}>
      <h2>Animals Quiz</h2>
      <p style={{ color: 'red' }}>{error}</p>
      <button onClick={fetchQuestions}>Try Again</button>
    </div>
  );

  if (finished) return (
    <div style={containerStyle}>
      <h2>Quiz Finished!</h2>
      <p>Your score: {score} / {questions.length}</p>
      <button onClick={restartQuiz}>Retake Quiz</button>
    </div>
  );

  const question = questions[current];

  return (
    <div style={containerStyle}>
      <h2>Animals Quiz</h2>
      <strong>Question {current + 1} of {questions.length}</strong>
      <p>{decode(question.question)}</p>
      <ul style={{ padding: 0, listStyle: 'none' }}>  {/*listStyle: 'none' removes the dot of ul */}
        {question.answers.map((ans, i) => (
          <li key={i} style={{ marginBottom: 12 }}>
            <button
              disabled={selected !== null}
              onClick={() => handleAnswer(ans)}
              style={{
                padding: '10px 20px',
                background: selected === ans ? '#d9eafd' : '#eee',
                border: selected === ans ? '2px solid #2d72d9' : '1px solid #ccc',
                width: '30%',
                textAlign: 'left',
                cursor: selected !== null ? 'default' : 'pointer'
              }}
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          </li>
        ))}
      </ul>
      {selected && (
        <p style={{ color: selected === question.correct_answer ? 'green' : 'red' }}>
          {selected === question.correct_answer ? 'Correct!' : `Wrong! Correct answer: ${decode(question.correct_answer)}`}
        </p>
      )}
      <button
        disabled={!selected}
        onClick={nextQuestion}
        style={{
          marginTop: 24,
          padding: '10px 20px',
          background: selected ? '#2d72d9' : '#ccc',
          color: '#fff',
          border: 'none',
          cursor: selected ? 'pointer' : 'not-allowed'
        }}
      >
        {current + 1 === questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}
