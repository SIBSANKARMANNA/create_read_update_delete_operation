import React from 'react';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import "../styles/CreatePostPage.css";

const CreatePostPage = () => {
    const navigate = useNavigate();

    const handleCreate = async (postData) => {
        await createPost(postData);
        navigate('/');
    };

    return (
        <div className="create-post-page">
            <h1>Create New Post</h1>
            <PostForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreatePostPage;
