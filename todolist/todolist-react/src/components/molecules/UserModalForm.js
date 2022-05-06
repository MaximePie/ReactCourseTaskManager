import React, {useState} from "react";
import Modal from "react-modal";
import axios from "axios";

// On a un formulaire
// Je voudrais qu'il soit automatiquement rempli avec
// Les valeurs de mon utilisateur courant
// Quand je clique sur "Enregistrer", le formulaire se ferme
// Et on envoie la requête de modification.

export default function UserModalForm(props) {

  const [user, setUser] = useState({
    username: props.username,
    job: props.job,
    age: props.age,
    _id: props._id,
  });

  return (
    <Modal isOpen={props.isOpen}>
      <h4>User modal Form</h4>
      <div>
        <h5>Bonjour {user.username}</h5>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            onChange={updateField}
            value={user.username}
            name="username"
          />
        </div>
        <div>
          <label htmlFor="">Job</label>
          <input
            type="text"
            onChange={updateField}
            value={user.job}
            name="job"
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            type="text"
            onChange={updateField}
            value={user.age}
            name="age"
          />
        </div>
      </div>
      <button onClick={save}>Enregistrer</button>
      <button onClick={close}>Fermer</button>
    </Modal>
  )

  async function save() {
    await axios.put('http://localhost:5050/users', user)
    close();
  }

  function close() {
    props.onClose();
  }

  function updateField(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
}