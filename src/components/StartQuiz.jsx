import React, { useState } from "react";
import OptionsView from "./OptionsView";
import FunctionalButton from "./FunctionalButton";

let quiz1 = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    options: [
      "largest railway station",
      "highest railway station",
      "longest railway station",
      "None of the above",
    ],
    answerIndex: 0,
  },
  {
    question: "Entomology is the science that studies",
    options: [
      "Behavior of human beings",
      "Insects",
      "The origin and history of technical and scientific terms",
      "The formation of rocks",
    ],
    answerIndex: 1,
  },
  {
    question: "The World Largest desert is",
    options: ["Thar", "Kalahari", "Sahara", "Sonoran"],
    answerIndex: 2,
  },
  {
    question: "Country that has the highest in Barley Production",
    options: ["China", "India", "Russia", "France"],
    answerIndex: 2,
  },
  {
    question: "The Central Rice Research Station is situated in",
    options: ["Chennai", "Cuttack", "Bengaluru", "Quilon"],
    answerIndex: 1,
  },
  {
    question: "Mount Everest is located in",
    options: ["India", "China", "Bhutan", "Nepal"],
    answerIndex: 3,
  },
];

let answersPut = [];

const StartQuiz = () => {
  const [view, setView] = useState(0);
  const [user, setUser] = useState([]);

  const changeQuestion = (btn) => {
    let btnType = "";
    if(btn !== undefined){
        btnType = btn.target.name;
    }
    else{
      btnType="next"
    }
    
    if (btnType === "prev") {
      setView(view - 1);
    } else {
      setView(view + 1);
    }
  };

  const handleSubmit = (userdata) => {
    //console.log("Submitted");
    //console.log(userdata);
    setUser((prevValues)=>{
      let temp =  [prevValues,userdata];
      console.log(temp);
      return (temp);
    })
  };

  const handleOptions = (index) => {
    //console.log(index);
    answersPut.push({
      questionNumber: view+1,
      answergiven:index+1
    })
    if(view === quiz1.length -1){
      setUser({userlog:answersPut});
      return;
    }
    changeQuestion();
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
          <div className="border">
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row justify-content-between align-items-center mcq">
                <h4>MCQ Quiz</h4>
                <span>
                  ({view + 1} of {quiz1.length})
                </span>
              </div>
            </div>
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row align-items-center question-title">
                <h3 className="text-danger literal-q">Q.</h3>
                <h5 className="mt-1 ml-2">{quiz1[view].question}</h5>
              </div>

              {quiz1[view].options.map((option, index) => (
                <OptionsView
                  key={index}
                  option={option}
                  handleOptions={handleOptions}
                  index={index}
                />
              ))}
            </div>

            <FunctionalButton
              changeQuestion={changeQuestion}
              handleSubmit={handleSubmit}
              view={view}
              quizLength={quiz1.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
