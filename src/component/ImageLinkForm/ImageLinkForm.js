import React from "react";
import "./Image.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect face in your pictures.Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 ">
          <input
            className="f4 pa2 w-70 center "
            type="text"
            onChange={onInputChange}
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2  dib bg-light-grey "
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
