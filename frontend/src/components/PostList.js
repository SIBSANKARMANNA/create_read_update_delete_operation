import React, { useEffect, useState } from 'react';
import { getAllPosts, deletePost } from '../services/postService';
import { useNavigate } from 'react-router-dom';
import "../styles/PostList.css";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await getAllPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts(posts.filter((post) => post._id !== id));
    };

    return (
        <div className="post-list">
            <h1>Posts</h1>
            <button onClick={() => navigate('/create')}>Create New Post</button>
            {posts.map((post) => (
                <div className="post" key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => navigate(`/edit/${post._id}`)}>Edit</button>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;
