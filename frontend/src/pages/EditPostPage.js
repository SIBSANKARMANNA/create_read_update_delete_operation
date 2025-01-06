import React, { useEffect, useState } from 'react';
import { getPostById, updatePost } from '../services/postService';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import "../styles/EditPostPage.css";

const EditPostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await getPostById(id);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    const handleEdit = async (postData) => {
        await updatePost(id, postData);
        navigate('/');
    };

    return (
        <div className="edit-post-page">
            <h1>Edit Post</h1>
            {post && <PostForm initialData={post} onSubmit={handleEdit} />}
        </div>
    );
};

export default EditPostPage;
