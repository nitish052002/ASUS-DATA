import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form: React.FC = () => {
  const [input, setInput] = useState<string>(""); // Specify the type of input as string
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/repos/${input}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section">
                          <div className="form-container">
                            <button
                              type="button"
                              className="btn mt-4"
                              onClick={() => navigate("/")}
                            >
                              Home
                            </button>
                            <div className="form-group">
                              <input
                                type="text" // Change type to "text" since it's a username input
                                name="logemail"
                                className="form-style"
                                placeholder="Enter user name"
                                id="logemail"
                                autoComplete="off"
                                value={input} // Bind the input value to the state
                                onChange={handleChange} // Use handleChange function to update state
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <button
                              type="button"
                              className="btn mt-4"
                              onClick={submitHandler}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
