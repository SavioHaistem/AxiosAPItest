import configs from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newpost.css';


function NewPost() {

    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e)=> {
        e.preventDefault()

        const post = {title, body, userId: 1};
        await configs.post("/posts", {
            body: post,
        })

        navigate("/")
    }


    return <div className="newpost">
        <h2>inserir novo post:</h2>
        <form onSubmit={(e)=> createPost(e)}>
            <div className="formcontroll">
                <label htmlFor="title"> Título: </label>
                <input
                 onChange={(e)=>setTitle(e.target.value)}
                 type="text" 
                 name="title" 
                 placeholder='digite o título' 
                 id="title"
                 className='transparent downbar'/>
            </div>
            <div className="formcontroll">
                <label htmlFor="body"> Conteúdo: </label>
                <textarea 
                    onChange={(e)=>setBody(e.target.value)}
                    name="body" 
                    id="body" 
                    placeholder='Digite o conteúdo'
                    className='transparent downbar'>
                </textarea>
                <input type="submit" value="Cria post" className='button'/>
            </div>
        </form>
    </div>
}

export default NewPost;