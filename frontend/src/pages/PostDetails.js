import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../css/postDetails.css';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`https://solid-zebra-7jv4666vjpj3w6pq-8000.app.github.dev/api/v1/post/${id}`, { headers: { "Authorization": token } });
      setPost(data.data);
    };
    getPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const handleUpdate = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <button className="update-button" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default PostDetails;
