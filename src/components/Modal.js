import React from "react";
import closeIcon from "../../src/styles/icons/x.svg";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalWrapper">
        <div onClick={props.onClose}>
          <img src={closeIcon} alt="close" />
        </div>
        <div className="modalContent">
          <div
            className="content"
            style={{ justifyContent: "flex-start", marginLeft: "10rem" }}
          >
            <div className="aboutModal" onClick={props.about}>
              <h1>About</h1>
            </div>
            <div className="experienceModal" onClick={props.experience}>
              <h1>Experience</h1>
            </div>
          </div>
          <div className="content" style={{ justifyContent: "flex-start" }}>
            <div className="workModal" onClick={props.work}>
              <h1>Work</h1>
            </div>
            <div className="contactModal" onClick={props.contact}>
              <h1>Contact</h1>
            </div>
          </div>
          <div className="content" style={{ justifyContent: "flex-start", marginLeft: "10rem" }}>
            <div className="resumeModal" onClick={props.resume}>
              <h1>Resume</h1>
            </div>
            <div className="resumeModal" onClick={props.resume}>
              <h1>Anything</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
