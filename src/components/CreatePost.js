import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);  // Për të ruajtur imazhin
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Ruajmë imazhin në state
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();

        // Krijojmë një formData për të dërguar të dhënat dhe foton
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);  // Shto foton

        try {
            // Dërgojmë kërkesën POST për ngarkimin e fotos
            const response = await axios.post('http://localhost:8080/api/posts/uploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccess(response.data);  // Përdorim përgjigjen pozitive
            setError('');
        } catch (err) {
            setError('Error uploading image or creating post');  // Nëse ndodhi ndonjë gabim
            setSuccess('');
        }
    };

    return (
        <form onSubmit={handleCreatePost}>
            <h2>Create Post</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={handleImageChange}  // Funksioni për të përzgjedhur foton
                required
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
