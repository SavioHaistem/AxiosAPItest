import configs from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';



const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await configs.get("/posts");
            
            const data = response.data;
            setPosts(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{getPosts()}, []);

    return(
        <>
            <h1 className="title"> Ultimos Posts </h1>
            <div className="posts"> 
                { posts.length === 0 ? (<p>Carregando</p>) : posts.map(
                    (post) => (
                        <div className="postarea" key={post.id}>
                            <h2 className="titlepost">{post.title}</h2>
                            <p className="textpost">{post.body}</p>
                            <Link className={'more'} to={`/${post.id}`}> Ler mais </Link>
                        </div>
                    )
                )}
            </div>

        </>
    )
}

export default Home