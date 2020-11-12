import React from "react";
import "./textarea.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="textarea" {...rest}></textarea>
    </div>
  );
};

export default TextArea;
