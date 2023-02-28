import React from 'react';
import './newpost.css'
function NewPost() {
    return <div className="newpost">
        <h2>inserir novo post:</h2>
        <form>
            <div className="formcontroll">
                <label htmlFor="title"> Título: </label>
                <input
                 type="text" 
                 name="title" 
                 placeholder='digite o título' 
                 id="title"
                 className='transparent downbar'/>
            </div>
            <div className="formcontroll">
                <label htmlFor="body"> Conteúdo: </label>
                <textarea 
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