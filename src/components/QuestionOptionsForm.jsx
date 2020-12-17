import React from "react";

const QuestionOptionsForm = (props) => {
    const {questionNum,handleQuestions,handleOptions,handleAnswers} = props
  return (
    <div className="question-option">
      <div className="form-group">
        <label htmlFor="Question">Question {questionNum}</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Question"
          name="question"
          onChange={(event)=>handleQuestions(event, questionNum)}
        />
      </div>

      <div className="col">
        <label htmlFor="Question">Options</label>
        <input type="text" className="form-control" placeholder="Option 1" 
        onChange={(event)=>handleOptions(event, questionNum,1)}
        />
        <input type="text" className="form-control" placeholder="Option 2" 
        onChange={(event)=>handleOptions(event, questionNum,2)}
        />
        <input type="text" className="form-control" placeholder="Option 3" 
        onChange={(event)=>handleOptions(event, questionNum,3)}
        />
        <input type="text" className="form-control" placeholder="Option 4" 
        onChange={(event)=>handleOptions(event, questionNum,4)}
        />
        <input type="number" className="form-control" placeholder="Answer No 1/2/3/4"
        onChange={(event)=>handleAnswers(event, questionNum)}/>
      </div>
    </div>
  );
};

export default QuestionOptionsForm;
