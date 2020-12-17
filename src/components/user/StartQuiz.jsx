import React, { useState } from "react";
import OptionsView from "./OptionsView";
import FunctionalButton from "./FunctionalButton";


let answersPut = [];

const StartQuiz = (props) => {
  const {quizData} = props;

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

    setUser((prevValues)=>{
      let temp =  [prevValues,userdata];
      localStorage.setItem("user",temp); //saving data in local storage
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
    if(view === quizData.length -1){
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
                  ({view + 1} of {quizData.length})
                </span>
              </div>
            </div>
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row align-items-center question-title">
                <h3 className="text-danger literal-q">Q.</h3>
                <h5 className="mt-1 ml-2">{quizData[view].question}</h5>
              </div>

              {quizData[view].options.map((option, index) => (
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
              quizLength={quizData.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
