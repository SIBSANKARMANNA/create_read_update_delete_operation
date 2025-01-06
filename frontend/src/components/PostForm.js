import React, { useState } from 'react';
import "../styles/PostForm.css";

const PostForm = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [content, setContent] = useState(initialData?.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
            <form onSubmit={handleSubmit} className="post-form">
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        
    );
};

export default PostForm;
