import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();

  return (
    <div className="blog-card">
      <div className="thumbnail-container">
        <img className="thumbnail-img" src={RegisterBg} alt="post" />
      </div>
      <div className="content">
        <h2 className="heading-content">Component Blog Item</h2>
        <p className="author">Author</p>
        <div className="body-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            enim? Aut, illum minus. Exercitationem ratione labore molestiae
            commodi quo mollitia nisi! Rem, veritatis? Numquam animi doloribus,
            impedit optio molestias cum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo quod doloribus, quasi nemo labore, dolorum
            illum libero, est adipisci nostrum dolor modi dignissimos! Ab natus
            maiores sunt itaque! Molestias, repellat.
          </p>
        </div>
        <Gap height={25} />
        <Button
          title="Read More"
          onClick={() => history.push("/detail-blog")}
        />
        <Gap height={25} />
      </div>
    </div>
  );
};

export default BlogItem;
