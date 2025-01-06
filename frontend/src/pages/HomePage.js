import React from 'react';
import PostList from '../components/PostList';

import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            
            <div className='main'>
                <PostList />
            </div>
            
        </div>
    );
};

export default HomePage;
