import axios from "axios"; 
import React,{useState} from "react";

// En JS

// ID sur le bouton
// Récupère avec getElementById en JS
// addEventListener('click', maFunction)

// <button onclick="mafunction"></button> Super interdit en JS

// En React
// <button onClick={maFunction}>Cliquez-moi</button>


export default function Todos() {

    // Déclarer le State ici
    //const [unNomDeState, uneFonctionDeMutation] = useState()
    const [myTodo,changementTodo] = useState([]);
    const [myTask, setTask] = useState('');

    return (
        <div className="Todos">

            <label>Task</label>
            <input type="text" onChange={updateTodos} value={myTask}></input>
            <button onClick={fetchToDos}>AFFICHE MOI</button>
            <button onClick={createTodos}>Créer Todo</button>
            {myTodo.map(todo => <p>{todo.task} - {todo._id}</p>)}


        </div>

    );

    function updateTodos(event) {
        setTask(event.target.value);
    }

    /**
     * Préparer les informations à envoyer
     * 
     */
    async function createTodos() {
        

        await axios.post('http://localhost:5050/todo', {task: myTask})
        fetchToDos()
        setTask('')

    }
    
    /**
     * Interroge le serveur avec axios.get
     * Une fois que la requête est finie, on récupère une response
     * Response contient un objet data, avec les todo à l'intérieur
     *  C'est ce qu'on a renvoyé dans le back avec res.json(todo)
     * 
     * Appeler changementTodo en passant en paramètre les données reçues.
     */
    async function fetchToDos() { 
        // response = {..., data.todos}
        const response = await axios.get('http://localhost:5050/todo');
        // ChangementTodo va mettre response.data dans myTodo
        changementTodo(response.data.todos);
    }

    
}



/**
 * Que venons-nous de faire ?
Ajouter des composants :

	Todos : OK
		Récupérer les todos
			Interroger le serveur
			Afficher les résultats
Problèmes rencontrés : 
	Async et await 
		response = await la fin du axios.get
		Une fois que axios est fini, on fait le setState avec la réponse.data.todos
 */