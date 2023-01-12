import React from 'react'

const PyramidItem = ({ money, questionNumber, setQuestionNumber }) => {
  return (
     <li className={questionNumber === money.id ? "moneyListItem active" : "moneyListItem"}>
        <span className="moneyListItemNumber">{money.id}</span>
        <span className="moneyListItemAmount">{money.amount}</span>
    </li>
  )
}

export default PyramidItem
