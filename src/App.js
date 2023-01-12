import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Pyramid from "./components/Pyramid";
import QuestionContainer from "./components/QuestionContainer";
import Start from "./components/Start";

function App() {
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$0");
  
  useEffect(() => {
     questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
  }, [questionNumber]);

  return (
    <div className="app">
      {
        !username ? <Start setUsername={setUsername} /> : (
            <>
            <div className="main">
            <QuestionContainer
                questionNumber= {questionNumber}
                setQuestionNumber= {setQuestionNumber}
                earned= {earned}
                setEarned= {setEarned}
            />
            </div>
            <div className="pyramid">
            <Pyramid
                 moneyPyramid= {moneyPyramid}
                 questionNumber= {questionNumber}
                 setQuestionNumber= {setQuestionNumber}
            />
            </div>
        </>)
      }

    </div>
  );
}

export default App;
