import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Bëjmë kërkesë GET për të marrë postimet
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error loading posts');
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <div>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            {post.image && <img src={`http://localhost:8080/uploads/${post.image}`} alt="Post" />}
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    );
};

export default PostsList;
