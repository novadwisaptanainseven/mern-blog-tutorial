import React from "react";
import "./upload.scss";
import { RegisterBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={RegisterBg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
