import React from 'react';
import { Link } from "react-router-dom";

const BlogLIst = ({ blogs, title }) => {

  return (
    <div>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map( (blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default BlogLIst;