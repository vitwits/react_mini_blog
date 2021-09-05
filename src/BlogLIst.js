import React from 'react';

const BlogLIst = ({ blogs, title, handleDelete }) => {

  return (
    <div>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map( (blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLIst;