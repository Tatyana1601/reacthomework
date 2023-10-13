import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            const result = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await result.json();
            setPosts(data)
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => {
                return (<div className="post">
                    <Link to={`${post.id}`}>{post.title}</Link>
                    <p>{post.body}</p>
                </div>)
            }
            )}
        </div>

    )
}
export default Home