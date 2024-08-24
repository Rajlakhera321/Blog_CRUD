import React, { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get('https://solid-zebra-7jv4666vjpj3w6pq-8000.app.github.dev/api/v1/post',  { headers: {"Authorization" : token} });
            console.log(response.data, "data")
            setPosts(response.data.data);
        };
        getPosts();
    }, []);

    return (
        <div className="post-list">
            <div className='post-list'>
                <h1>Blog Posts</h1>
                <Link to="/addPost" className="add-post-button">Add Post</Link>
            </div>
            <ul>
                {posts?.map(post => (
                    <li key={post._id}>
                        <a href={`/posts/${post._id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
