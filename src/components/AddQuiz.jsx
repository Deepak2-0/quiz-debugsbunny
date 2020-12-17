import React, { useState} from "react";
import QuestionOptionsForm from "./QuestionOptionsForm";
import { Link } from "react-router-dom";

const AddQuiz = (props) => {
  const {addQuizData} = props;
  const [totalQuestion, setTotalQuestion] = useState([1]);
  const [data1, setData1] = useState({
    quizName: "",
    startDate: "",
    endDate: "",
  });
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleAddQuestion = (event) => {
    event.preventDefault();
    //console.log("clicked");

    let lastNum = totalQuestion.length;
    setTotalQuestion((prevValues) => {
      return [...prevValues, lastNum + 1];
    });
  };

  const handleAddQuiz = (event) => {
    event.preventDefault();

    if(questions.length === 0 || answers.length===0 || options.length=== 0) return;

    let quizData = [];

    for(let i=0;i<questions.length;i++){
      let temp = {
        question:questions[i],
        options:options[i],
        answerIndex:answers[i]
      }
      quizData.push({...temp});
    }

    let totalPart = {...data1, quizData};
    console.log(totalPart);
    addQuizData(totalPart);
    
  };

  const mainData1 = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    let name = event.target.name;
    let value = event.target.value;
    setData1((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleQuestions = (event, questionNum) => {
    let temp1 = [...questions];
    let temp2 = event.target.value;
    temp1.splice(questionNum - 1, 1, temp2);
    setQuestions(temp1);
  };

  const handleAnswers = (event, questionNum) => {
    let temp1 = [...answers];
    let temp2 = event.target.value;
    temp1.splice(questionNum - 1, 1, temp2);
    setAnswers(temp1);
  };

  const handleOptions = (event, questionNum, optionNum) => {
    let temp1 = [...options];
    let temp2 = null;
    try {
      temp2 = temp1[questionNum - 1];
    } catch (error) {
      temp2 = [];
    }
    if (temp2 === undefined) temp2 = [];
    temp2[optionNum - 1] = event.target.value;
    temp1[questionNum - 1] = temp2;
    setOptions(temp1);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <form noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quizName">Quiz Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Quiz Name"
                name="quizName"
                onChange={mainData1}
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                onChange={mainData1}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                onChange={mainData1}
              />
            </div>

            {totalQuestion.map((el) => (
              <QuestionOptionsForm
                key={el}
                questionNum={el}
                handleQuestions={handleQuestions}
                handleOptions={handleOptions}
                handleAnswers={handleAnswers}
              />
            ))}

            <button
              className="btn btn-primary mb-3 addQuestion-button"
              onClick={handleAddQuestion}
            >
              Add Question
            </button>
              <button
                type="submit"
                className="btn btn-success mb-3 addQuiz-button"
                onClick={handleAddQuiz}
              >
                Add Quiz
              </button>
            <Link to={`/`}><button className="btn btn-primary mb-3 addQuiz-button">Home</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuiz;
