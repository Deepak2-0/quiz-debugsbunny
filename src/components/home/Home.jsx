import TableColumn from "./TableColumn";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { dataBase, handleStartQuiz } = props;

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="thead-dark home-table-top">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Quiz Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">No. of Questions</th>
            <th scope="col">Test Link</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.map((item, index) => (
            <TableColumn
              key={index}
              index={index}
              quizName={item.quizName}
              startDate={item.startDate}
              endDate={item.endDate}
              totalQuestion={item.quizData.length}
              quizNumberToStart={handleStartQuiz}
            />
          ))}
        </tbody>
      </table>
      <Link to={"/admin"}>
        <button className="btn btn-success">Add Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
