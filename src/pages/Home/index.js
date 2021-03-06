import React from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={40} />
      <div className="blog-item">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />

        <Button title="Next" />
      </div>
    </div>
  );
};

export default Home;
