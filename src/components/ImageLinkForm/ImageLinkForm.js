import React from "react";
import "./imageLinkForm.css";

export const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">{"this magic brain will detected faces"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            name="text"
            placeholder="enter image url"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
