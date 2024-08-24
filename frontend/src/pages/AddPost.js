import React, { useState } from 'react';
import axios from 'axios';
import '../css/addPost.css';
import { useNavigate, useParams } from 'react-router-dom';

const AddPost = () => {
  const [post, setPost] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const { data } = await axios.get(`https://solid-zebra-7jv4666vjpj3w6pq-8000.app.github.dev/api/v1/post/${id}`, { headers: { "Authorization": token } });
      const response = await axios.put(`https://solid-zebra-7jv4666vjpj3w6pq-8000.app.github.dev/api/v1/post/${id}`,
        {
          title: post.title != '' ? post.title : data.data.title,
          content: post.content != '' ? post.content : data.data.content,
          author: post.author != '' ? post.author : data.data.author
        },
        { headers: { "Authorization": token } },
      );
      navigate(`/posts/${id}`);
    } else {
      const response = await axios.post('https://solid-zebra-7jv4666vjpj3w6pq-8000.app.github.dev/api/v1/post/createpost',post, { headers: { "Authorization": token } })
      navigate("/postList");
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <input
        type="text"
        name="author"
        value={post.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default AddPost;
