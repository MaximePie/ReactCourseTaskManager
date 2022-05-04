import React, {useContext, useState} from "react";
import axios from "axios";

/**
 * Créer un utilisateur
 * Ou bien modifier un utilisateur existant
 */

/**
 * User : {
 *   username: "",
 *   job: "",
 *   age: "",
 * }
 */

export default function UserForm(props) {
  const [user, setUser] = useState({
    username: "",
    age: "",
    job: "",
  })

  return ( // <> est un Fragment React. Il évite d'avoir à envelopper dans une div.
    <>
      <label htmlFor="">
        Username
      </label>
      <input
        type="text"
        onChange={updateField}
        value={user.username}
        name="username"
      />
      <label htmlFor="">
        Age
      </label>
      <input
        type="text"
        onChange={updateField}
        value={user.age}
        name="age"
      />

      <label htmlFor="">
        Job
      </label>
      <input
        type="text"
        onChange={updateField}
        value={user.job}
        name="job"
      />
      <button onClick={createUser}>Sauvegarder</button>
    </>
  )

  function updateField(event) {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }


  async function createUser() {
    // const demande un emplacement de stockage fixe.
    // const maVariable = "Une valeur qui ne changera pas."
    // maVariable = "Autre chose " => Interdit, parce que c'est une const.

    // let demande un emplacement modifiable, c'est plus de ressources à mobiliser pour le navigateur
    // let maVariableVariable = "Une valeur qui pourrait changer";
    // maVariableVariable = "Autre chose" => OKaido pas de problème

    // newUser = {job, username, age};
    await axios.post('http://localhost:5050/users', user)
    props.onSave();
  }
}