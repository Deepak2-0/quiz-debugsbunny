import React from "react";
import ModalForm from "./ModalForm";

const FunctionalButton = (props) => {
  const { changeQuestion, handleSubmit, view, quizLength } = props;
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
      <button
        className="btn btn-primary d-flex align-items-center btn-danger"
        name="prev"
        type="button"
        disabled={view === 0}
        onClick={changeQuestion}
      >
        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
      </button>

      {/* <button
        className="btn btn-primary d-flex align-items-center btn-primary"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button> */}

      <ModalForm onSubmit={handleSubmit} />

      <button
        className="btn btn-primary border-success align-items-center btn-success"
        name="next"
        type="button"
        disabled={view === quizLength - 1}
        onClick={changeQuestion}
      >
        Next&nbsp;
        <i className="fa fa-angle-right ml-2"></i>
      </button>
    </div>
  );
};

export default FunctionalButton;
