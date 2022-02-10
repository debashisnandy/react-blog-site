import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const item = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="col s12 l6 mx-height">
      <div className="card">
        <img className="item-cover" src={cover} alt="cover" />
        <div className="flex-container">
          {" "}
          <Chip label={category} />
        </div>
        <Link to={`/blog/${id}`}>
          {" "}
          <h3 className="margin-lr">{title}</h3>
        </Link>

        <p className="item-desc margin-lr">{description}</p>
        <footer className="margin-lr mt-2 padding-bottom">
          <div className="item-author">
            <img src={authorAvatar} alt="avatar" />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default item;
