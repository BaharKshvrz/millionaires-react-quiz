import React, { useEffect, useState } from 'react'
import { questionList } from '../data/data';
import useSound from 'use-sound';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';

const Questions = ({ questionNumber, setQuestionNumber, setStop, setEarned }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    setQuestion(questionList[questionNumber - 1]);
  }, [questionList, questionNumber]);


  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
     }, duration);
  }

  const handleAnswer = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => { setClassName(a.correct ? "answer correct" : "answer wrong"); });
    delay(6000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber(prev => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
       }
    });
   }

  return (
    <div className='questionBox'>
       <div className='question'>
         {question?.question}
      </div>
      <div className='answers'>
        {
          question?.answers.map((a, index) => (
            <div
              key={index}
              className={selectedAnswer === a ? className : "answer"}
              onClick={() => handleAnswer(a)}
            >
              {a.text}
            </div>
          ))
        }
     </div>
      </div>
  )
}

export default Questions
