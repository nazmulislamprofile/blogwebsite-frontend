import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogwebsite-bakcend.vercel.app/api/getBlogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Latest Blogs</h2>
      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                {/* Blog Image (Optional) */}
                <img
                  src={blog.image || "https://via.placeholder.com/400x200"}
                  className="card-img-top"
                  alt={blog.title}
                />

                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">
                    {blog.content.length > 100
                      ? blog.content.substring(0, 100) + "..."
                      : blog.content}
                  </p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>No blogs found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
