import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Practise = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 border border-2">
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="text-uppercase text-dark">title</h1>
            </div>
          </div>
          <div className="col-3 border border-2">
            <div className="d-flex justify-content-center align-content-center">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
          <div className="col-2 border border-2">
            <h3 className="text-uppercase text-dark">
              akashkurdekar39@gmail.com
            </h3>
          </div>
          <div className="col-8 border border-2">main</div>
          <div className="col-2 border border-2 p-2">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="progress w-100 mt-2">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{width: "15%"}} 
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practise;
