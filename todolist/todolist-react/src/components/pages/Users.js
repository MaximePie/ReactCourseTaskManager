import axios from "axios"
import React, {useEffect, useState} from "react";
import User from "../molecules/User";
import UserForm from "../molecules/UserForm";
import {useNavigate} from "react-router-dom";

export default function Users(props) {

  // - La liste des utilisateurs
  // - Mettre à jour avec une fonction de setState

  const [users, setUsers] = useState([])

  // isConnected est passé depuis App.js
  // On doit maintenant la passer à notre composant <User>

  // Function, et des dépendances
  // Function : Qu'est-ce qu'on veut faire ? fetchUsers
  // Les dépendances, c'est "quand est-ce qu'on veut le faire ?" Au chargement du composant
  // useEffect(fetchUsers) // Déclenche fetchUsers à chaque setState
  // useEffect(fetchUsers, [username]) // Déclenche fetchUsers à chaque setState de username seulement
  useEffect(fetchUsers, []) // Déclenche fetchUsers une seule fois à l'apparition du composant

  return (
    <div>
      <h1>Utilisateurs</h1>
      <UserForm onSave={fetchUsers}/>
      {users.map(element => (
        <User
          user={element}
          afterDelete={fetchUsers}
          afterUpdate={fetchUsers}
        />
      ))}
    </div>
  )

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