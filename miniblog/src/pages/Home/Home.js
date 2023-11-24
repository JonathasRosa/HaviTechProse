import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
//CSS
import styles from './Home.module.css';

const Home = ()=> {
    const [ query, setQuery ] = useState("");
    const [ post ] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.home}>
            <h1>Veja os nossos posts mais recentes.</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input 
                    type="text" 
                    placeholder="Ou busque por tags"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className=" btn btn-dark">Pesquisar</button>
            </form>
            <div>
                <h1>Post</h1>
                {post && post.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts</p>
                        <Link to="/post/create" className="btn">Criar primeiro post.</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;