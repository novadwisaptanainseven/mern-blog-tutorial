// Style
import "./detailblog.scss";

// Libraries
import React from "react";
import { RegisterBg } from "../../assets";
import { Link } from "../../components";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumbs" />
      <h2 className="blog-title">Title Blog</h2>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        perferendis numquam totam, obcaecati repudiandae est vel earum? Magnam
        atque facere cum id eos saepe illum harum eaque! Fugiat pariatur eveniet
        porro earum odit tempora, totam voluptate perferendis. Nostrum, animi
        cumque nesciunt et quibusdam officiis voluptas ab nam vero quisquam at
        fugiat voluptate accusantium modi natus ea, facere nihil? Doloremque
        adipisci excepturi nam. Voluptatibus nulla harum enim doloremque totam!
        Blanditiis, tenetur. Rerum maiores doloremque delectus quam. Excepturi
        sunt, error esse quidem fuga explicabo beatae blanditiis cumque, cum
        veniam minima eum hic repellat soluta neque reprehenderit atque
        necessitatibus voluptatem voluptatibus. Adipisci iste sint quisquam
        repudiandae dolor error ex quas hic dolore labore enim sunt, id nihil
        aliquam soluta incidunt eaque sapiente nemo rerum autem. Sunt commodi
        cumque, nisi quas nesciunt illum libero nihil. Impedit quis a
        perferendis commodi eligendi dicta, modi beatae quas doloremque eaque
        voluptatibus facere molestiae animi, amet id similique dignissimos cum.
        A quas rem neque illo earum inventore hic totam qui nam soluta et, ut
        beatae aperiam! Illo aut similique magnam dolores, totam inventore
        nostrum? Dolore provident maxime, ex dignissimos quibusdam ut aliquam,
        fugiat reiciendis illo, quaerat eius accusantium totam nostrum voluptate
        similique perspiciatis neque eum enim minus? Quod.
      </p>
      <Link title="Kembali ke home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
