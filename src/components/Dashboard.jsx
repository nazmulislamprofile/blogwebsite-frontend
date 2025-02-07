import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [editingBlog, setEditingBlog] = useState(null);

    // Fetch Blogs
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        axios.get('https://blogwebsite-bakcend.vercel.app/api/getBlogs', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setBlogs(response.data))
        .catch(error => console.error(error));
    };

    // Create or Update Blog
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = editingBlog 
            ? `https://blogwebsite-bakcend.vercel.app/api/updateBlog/${editingBlog._id}`
            : 'https://blogwebsite-bakcend.vercel.app/api/createBlog';

        const method = editingBlog ? 'put' : 'post';

        axios[method](apiUrl, { title, content, image }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(() => {
            toast.success(editingBlog ? "Blog Updated Successfully!" : "Blog Created Successfully!");
            setTitle('');
            setContent('');
            setImage('');
            setEditingBlog(null);
            fetchBlogs(); // Refresh without reloading page
        })
        .catch(error => {
            toast.error("Something went wrong!");
            console.error(error);
        });
    };

    // Delete Blog
    const handleDelete = (id) => {
        axios.delete(`https://blogwebsite-bakcend.vercel.app/api/deleteBlog/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(() => {
            toast.success("Blog Deleted Successfully!");
            fetchBlogs(); // Refresh after delete
        })
        .catch(error => {
            toast.error("Failed to delete the blog!");
            console.error(error);
        });
    };

    return (
        <div className="container py-5 mt-5">
            <h2 className="text-center mb-4">Dashboard - Manage Blogs</h2>

            {/* Toast Notifications */}
            <ToastContainer position="top-right" autoClose={2000} />

            {/* Blog Form */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        placeholder="Enter image URL"
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    {editingBlog ? 'Update Blog' : 'Create Blog'}
                </button>
            </form>

            {/* Blog List */}
            <div className="row">
                {blogs.map(blog => (
                    <div key={blog._id} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            {blog.image && <img src={blog.image} className="card-img-top" alt="Blog" style={{ height: '200px', objectFit: 'cover' }} />}
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.content}</p>
                                <button 
                                    className="btn btn-primary me-2" 
                                    onClick={() => {
                                        setTitle(blog.title);
                                        setContent(blog.content);
                                        setImage(blog.image);
                                        setEditingBlog(blog);
                                    }}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
