import "./App.css";
import { useState } from "react";
import Home from "./components/home/Home";
import StartQuiz from "./components/user/StartQuiz";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import data from "./data";
import AddQuiz from "./components/AddQuiz";

function App() {
  const [dataBase, setDataBase] = useState(data);
  const [quizDataIndex, setQuizDataIndex] = useState(0);

  const handleStartQuiz = (indexOfQuiz) => {
    setQuizDataIndex(() => {
      return indexOfQuiz;
    });
  };

  const addQuizData = (list) => {
    //console.log(list);
    setDataBase(prevValue =>{
      return [...prevValue, list];
    })
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                dataBase={dataBase}
                handleStartQuiz={handleStartQuiz}
              />
            )}
          />
          <Route
            path="/quiz/:id"
            render={(props) => (
              <StartQuiz
                {...props}
                quizData={dataBase[quizDataIndex].quizData}
              />
            )}
          />

          <Route
            path="/admin"
            render={(props) => (
              <AddQuiz
                {...props}
                addQuizData={addQuizData}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
