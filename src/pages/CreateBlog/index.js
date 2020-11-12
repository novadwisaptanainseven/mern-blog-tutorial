// Style
import "./createblog.scss";

// Libraries
import React from "react";
import { Input, Button, Upload, Gap, Link } from "../../components";
import TextArea from "../../components/atoms/TextArea";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();

  return (
    <div>
      <Link title="Kembali ke home" onClick={() => history.push("/")} />
      <h2>Create New Blog Post</h2>
      <Input label="Post Title" type="text" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
