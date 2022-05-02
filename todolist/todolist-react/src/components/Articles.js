// Construire un composant Articles
// 1 - Créer un composant qui renvoie juste une div avec un h1 "C'est le composant Articles" 
// 2 - Déclencher une requête vers le back pour voir si on arrive à communiquer
    // axios, .get, l'url de la route, et voilà
    // 'http://localhost:5050/articles'
import React, {useState} from "react";
import axios from "axios";
import AddArticle from './addArticle.components.js';

export default function Articles () {
    // Les articles sont stockés dans notre state
    // "articles" permet d'afficher les articles en temps réel
    // "setState" permet de modifier les articles
    // const [unNomDeState, UneFonctionDeModification] = useState([]);
    const [articles, setState] = useState([]);

    return (
        <div>
            <AddArticle/>
            <button onClick={fetchArticles}>Afficher les articles</button>
            {/* Comme un composant React ne peut pas accepter de contenus jumeaux
            On enveloppe la fonction .map dans des crochets */}
            {articles.map((article) => {
                return (
                    <p>{article.name} - {article.quantity} - {article.price} € <button id={article._id} onClick={deleteArticle}>Delete Article</button></p>
                )
            })}
        </div>
    );

    /**
     * Cette fonction devrait ... ?
     * Atteindre la route http://localhost:5050/articles 
     * grâce à axios avec la méthode get.
     * 
     * Récupérer les informations et les stocker dans notre state articles
     */
    async function fetchArticles() {
        const result = await axios.get('http://localhost:5050/articles');
        // Data est une propriété de l'objet renvoyé par Axios et contient un tableau d'objets
        // Avec les résultats de notre requête construite dans le serveur (routes/article.js)
        console.log(result.data); // articles:[{}, {}]
        setState(result.data);
    }


    function deleteArticle(event) {
        
        console.log(event.target)
    }
}
