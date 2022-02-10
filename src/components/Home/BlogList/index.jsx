import React from "react";
import BlogItem from "./BlogItem";


const BlogList = ({ blogs }) => {
  return (

      <div className="row">
        {blogs.map((blog,index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>

  );
};

export default BlogList;
