import React from "react";
import { Link } from "react-router-dom";

const TableColumn = (props) => {
  const {
    index,
    quizName,
    startDate,
    endDate,
    totalQuestion,
    quizNumberToStart,
  } = props;
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{quizName}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>{totalQuestion}</td>
        <td>
          <Link to={`/quiz/${index + 1}`}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={()=>quizNumberToStart(index)}
            >
              Start
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableColumn;
