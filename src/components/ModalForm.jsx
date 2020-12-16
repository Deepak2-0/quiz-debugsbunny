import React,{useState} from "react";


const ModalForm = (props) => {

  const {onSubmit} = props;

  const [currentUser,setCurrentUsser] = useState({
    name:"",
    number:""
  });

  const handleChange = (event) =>{
    
    let temp = event.target.name;
    let value = event.target.value;
    
    setCurrentUsser(prevValue=>{
      return (
        {
          ...prevValue,
          [temp]:value
        }
      );
    })
  }

  const SubmitModalForm = () =>{
    if(currentUser.name === "" || currentUser.number === ""){
      return;
    }
    onSubmit(currentUser);
    
  }
  
  return (
    <div className="modal-body">
      <button
        className="btn btn-primary d-flex align-items-center btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Submit
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter Details to get answers
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="name"
                    value={currentUser.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="message-text"
                    name="number"
                    maxLength={10}
                    required={true}
                    value={currentUser.number}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={SubmitModalForm} data-bs-dismiss="modal">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
