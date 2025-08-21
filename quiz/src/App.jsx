import React, { useState, useEffect } from "react";
import questionsData from "./questions.js";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // track clicked answer

  const loadQuestions = () => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 8));
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const handleAnswer = (answer, index) => {
    setSelectedAnswer(index); // mark which button was clicked

    if (answer.isCorrect) {
      setScore(score + 1);
    }

    // Wait a bit to show feedback before moving to next question
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    loadQuestions();
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Finished!</h2>
          <p>
            Your score: {score} / {questions.length}
           <p> 
            Percentage: {Math.round((score / questions.length) * 100)}%
            </p>
          </p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h3>
            Question {currentIndex + 1} / {questions.length}
          </h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <p className="question-text">{currentQuestion.question}</p>

          <div className="answer-section">
            {currentQuestion.answers.map((answer, idx) => {
              let className = "";
              if (selectedAnswer !== null) {
                if (answer.isCorrect) className = "correct";
                else if (selectedAnswer === idx && !answer.isCorrect) className = "wrong";
              }

              return (
                <button
                  key={idx}
                  className={className}
                  onClick={() => handleAnswer(answer, idx)}
                  disabled={selectedAnswer !== null} // disable buttons after click
                >
                  {answer.text}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
