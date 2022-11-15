import React from "react";
import "../css/modal.css";
import TransitionDiv from "./TransitionDiv";

export default function PhotosModal({ modalOptions, setModalOptions }) {
  if (modalOptions.isOpen) {
    return (
      <div
        onClick={(e) => {
          if (e.target.contains(e.target.childNodes[0])) {
            return setModalOptions({
              isOpen: !modalOptions.isOpen,
              currentPhoto: null,
            });
          }
        }}
        className="modal-wrapper"
      >
        <div className="modal-content">
          <TransitionDiv className='animation'>
            <div className="img-wrapper">
              <img className="modalimg" src={modalOptions.currentPhoto}></img>
            </div>
          </TransitionDiv>
        </div>
      </div>
    );
  }
}
