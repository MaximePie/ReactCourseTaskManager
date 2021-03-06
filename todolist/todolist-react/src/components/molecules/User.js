
// Les props sont au composant
// Ce que les paramètres sont à la fonction
import React, {useContext, useState} from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import {UserContext} from "../../App";
import UserModalForm from "./UserModalForm";

export default function User(props) {
  const age = props.user.age;
  const username = props.user.username;
  const job = props.user.job;
  const _id = props.user._id;

  // 1 - Récupère la valeur isConnected dans le contexte.
  const context = useContext(UserContext);

  // props.user.username = "haha"; // interdit /!\
  const [newUsername, setNewUsername] = useState(username); // On les récupère depuis les props.
  const [newAge, setNewAge] = useState(age); // C'est la valeur initiale
  const [newJob, setNewJob] = useState(job);

  const [mode, setMode] = useState('read');

  // Soit l'utilisateur est en mode lecture (on affiche les valeurs)
  // Soit l'utilisateur est en mode "edition" (On affiche des champs de formulaire)

  // On peut destructurer n'importe quel objet.
  // const {age, username, _id} = props.user;

  let actionText = "";
  if (mode === 'read') {
    actionText = "Modifier";
  }
  else if (mode === 'edit') {
    actionText = "Enregistrer";
  }

  // actionText = mode === 'read' ? 'Modifier' : 'Enregistrer';

  // mode === 'read' ? formulaire : les infos
  const isModalOpen = mode === 'edit';
  return (
    <div
      className={"User"}
    >
      <UserModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        username={username}
        age={age}
        job={job}
        _id={_id}
      />
      {mode === 'read' ? (
        <UserInfo
          username={username}
          job={job}
          age={age}
          _id={_id}
        />
      ) : null}
      {/*{mode === 'read' && "haha"}*/}
      {/*{mode === 'read' ? "haha" : null}*/}
      {/**
        Si props.isConnected est égale à true, on veut afficher les boutons.
       Sinon, on n'affichage rien.
       */}
      {context.isConnected === true ? (
        <div>
          <button onClick={changeMode}>
            {actionText}
          </button>
          <button onClick={() => {
            deleteUser(_id);
          }}>
            {
              /*
              <button onClick={function() {
                  deleteUser(element._id);
              }
              }}>

               */
            }
            Supprimer
          </button>
        </div>
      )
      : null}
    </div>
  )

  function closeModal() {
    setMode("read");
  }

  function updateUsername(event) {
    setNewUsername(event.target.value);
  }

  function updateJob(event) {
    setNewJob(event.target.value);
  }

  function updateAge(event) {
    setNewAge(event.target.value);
  }

  /**
   * Si le mode est égal à "read", passer sur "edit"
   * Sinon passer sur "read"
   */
  async function changeMode() {
    setMode(mode === 'read' ? 'edit' : 'read') // Condition, si oui, si non.

    // if (mode === 'read') {
    //   setMode('edit');
    // }
    // else {
    //   setMode('read');
    // }
    // if (mode === 'edit') {
    //   // Déclencher une requête de mise à jour vers le serveur
    //   const user = {
    //     newUsername,
    //     newJob,
    //     newAge,
    //     _id,
    //   }
    //   await axios.put('http://localhost:5050/users', user)
    //   props.afterUpdate();
    // }
  }

  async function deleteUser() {
    await axios.delete('http://localhost:5050/users/' + _id)
    props.afterDelete()
  }
}