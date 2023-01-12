import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import Timer from './Timer';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';

const QuestionContainer = ({questionNumber, setQuestionNumber, earned, setEarned}) => {
  const [stop, setStop] = useState(false);
  const [letsPlay] = useSound(play);

  useEffect(() => {
    letsPlay()
  }, [letsPlay]);

    return (
      <>
        {stop ? <h1 className='result'>You earnd {earned}</h1> : (
        <>
          <div className='top'>
              <Timer
                questionNumber={questionNumber}
                setStop={setStop}
              />
          </div>
          <div className='bottom'>
            <Questions
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
              setEarned= {setEarned}
            />
          </div>
        </>
       )}
      </>
  )
}

export default React.memo(QuestionContainer);
