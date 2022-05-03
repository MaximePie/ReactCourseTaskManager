import axios from "axios"
import React, {useEffect, useState} from "react";
import User from "../molecules/User";

export default function Users() {

  // - La liste des utilisateurs
  // - Mettre à jour avec une fonction de setState

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');

  // Function, et des dépendances
  // Function : Qu'est-ce qu'on veut faire ? fetchUsers
  // Les dépendances, c'est "quand est-ce qu'on veut le faire ?" Au chargement du composant
  // useEffect(fetchUsers) // Déclenche fetchUsers à chaque setState
  // useEffect(fetchUsers, [username]) // Déclenche fetchUsers à chaque setState de username seulement
  useEffect(fetchUsers, []) // Déclenche fetchUsers une seule fois à l'apparition du composant

  return (
    <div>
      <h1>Utilisateurs</h1>
      {users.map(element => (
        <User
          user={element}
          afterDelete={fetchUsers}
          afterUpdate={fetchUsers}
        />
      ))}

      <div>
        <h4>Créer un utilisateur</h4>
        <input type="text" onChange={updateUsername} value={username}/>
        <input type="text" onChange={updateAge} value={age}/>
        <input type="text" onChange={updateJob} value={job}/>
        <button onClick={createUser}>Sauvegarder</button>
      </div>
    </div>
  )

  async function createUser() {
    const newUser = {
      job: job, // Si la valeur a le même nom que la propriété, on peut les fusionner
      username: username,
      age: age
    }
    // const demande un emplacement de stockage fixe.
    // const maVariable = "Une valeur qui ne changera pas."
    // maVariable = "Autre chose " => Interdit, parce que c'est une const.

    // let demande un emplacement modifiable, c'est plus de ressources à mobiliser pour le navigateur
    // let maVariableVariable = "Une valeur qui pourrait changer";
    // maVariableVariable = "Autre chose" => OKaido pas de problème

    // newUser = {job, username, age};
    await axios.post('http://localhost:5050/users', newUser)
    fetchUsers();
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  function updateAge(event) {
    setAge(event.target.value);
  }

  function updateJob(event) {
    setJob(event.target.value);
  }

  /**
   * Récupérer les utilisateurs depuis le serveur grâce à axios

   * Une fois que c'est fait, on met à jour la liste des utilisateurs.
   */
  function fetchUsers() {
    axios.get('http://localhost:5050/users').then((response) => {
      setUsers(response.data.users)
    })
  }
}