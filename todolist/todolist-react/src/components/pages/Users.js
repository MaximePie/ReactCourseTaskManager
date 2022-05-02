import axios from "axios"
import React, {useState} from "react";
import User from "../molecules/User";

export default function Users() {


  function gererLeClick() {
    return supprimerUtilisateur;
  }

  function supprimerUtilisateur() {
    console.log("Je supprime l'utilisateur");
  }

  const supprimer = gererLeClick();
  supprimer();


  // - La liste des utilisateurs
  // - Mettre à jour avec une fonction de setState

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <h1>Utilisateurs</h1>
      <button onClick={fetchUsers}>Récupérer users</button>
      {users.map(element => (
        <User
          user={element}
          afterDelete={fetchUsers}
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
  async function fetchUsers() {
    const response = await axios.get('http://localhost:5050/users')
    setUsers(response.data.users)
  }
}