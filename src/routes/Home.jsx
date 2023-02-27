import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';



const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            
            const data = response.data;
            setPosts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{getPosts()}, []);

    return(
        <>
            <h1>Ultimos Posts</h1>
            <div className="posts"> 
                {   
                    posts.length === 0 ? <h1>Nenhum Post disponivel</h1> : 
                    posts.map(post =>
                        <div className="postarea">
                            <div className="titlepost">
                                {post.title}
                            </div>
                            <div className="textpost">
                                {post.body}
                            </div>
                        </div>
                )} 
            </div>

        </>
    )
}

export default Home