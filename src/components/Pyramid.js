import PyramidItem from './PyramidItem';


const Pyramid = ({moneyPyramid, questionNumber, setQuestionNumber}) => {
  return (
      <ul className="moneyList">
          {
              moneyPyramid.map(m => <PyramidItem
                  key={m.id}
                  money={m}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
              />)
          } 
     </ul>
  )
}

export default Pyramid
