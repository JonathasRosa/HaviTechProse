import React from 'react';
import styles from './CreatePost.module.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from '../../context/AuthContext';


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div>
        <h2>Criar Post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Título:</span>
                <input
                type="text" 
                name="title" 
                required
                placeholder='Pense em um bom título...'
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                />
            </label>
            <label>
                <span>URL da imagem:</span>
                <input
                type="text" 
                name="image" 
                required
                placeholder='Insira uma imagem que representa o seu post...'
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                />
            </label>
        </form>
    </div>
  )
}

export default CreatePost;