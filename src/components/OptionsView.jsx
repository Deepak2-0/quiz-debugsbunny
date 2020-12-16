import React from "react";

const OptionsView = (props) => {
    const {option, handleOptions,index}= props;
  return (
      <>
    <div className="ans ml-2">
      {/* <label className="radio">
        {" "}
        <input type="radio" name="brazil" value="brazil" />{" "}
        <span>{props.option}</span>
      </label> */}
      <button type="button" className="btn btn-outline-dark options" onClick={()=>handleOptions(index)}>{option}</button>
    </div>
    </>
  );
};

export default OptionsView;
