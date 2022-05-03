import React, {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../../App";

/**
 * Créer un utilisateur
 * Ou bien modifier un utilisateur existant
 */

export default function UserForm(props) {

  const context = useContext(UserContext);
  console.log(context);

  const [username, setUsername] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');

  return ( // <> est un Fragment React. Il évite d'avoir à envelopper dans une div.
    <>

      <p>{context.text}</p>
      <input type="text" onChange={updateUsername} value={username}/>
      <input type="text" onChange={updateAge} value={age}/>
      <input type="text" onChange={updateJob} value={job}/>
      <button onClick={createUser}>Sauvegarder</button>
    </>
  )


  async function createUser() {
    const newUser = {
      job: job, // Si la valeur a le même nom que la propriété, on peut les fusionner
      username: username,
      age: age
    }

    context.setText("Haha a changé");
    // const demande un emplacement de stockage fixe.
    // const maVariable = "Une valeur qui ne changera pas."
    // maVariable = "Autre chose " => Interdit, parce que c'est une const.

    // let demande un emplacement modifiable, c'est plus de ressources à mobiliser pour le navigateur
    // let maVariableVariable = "Une valeur qui pourrait changer";
    // maVariableVariable = "Autre chose" => OKaido pas de problème

    // newUser = {job, username, age};
    // await axios.post('http://localhost:5050/users', newUser)
    props.onSave();
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
}