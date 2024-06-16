import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const [input, setInput] = useState(null);
  const navigate = useNavigate();



  const submitHandler = () => {
    navigate(`/repos/${input}`  );
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
                        <div className="section ">
                          
                          <div className="form-container">
                          <button type="button" className="btn mt-4" onClick={()=> {navigate("/home")}}>
              Home
            </button>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Enter user name"
                                id="logemail"
                                autoComplete="off"
                                onChange={(event) => {
                                  setInput(event.target.value);
                                }}
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
