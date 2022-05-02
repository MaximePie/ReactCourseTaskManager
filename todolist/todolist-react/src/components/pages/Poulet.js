import React, {Component, useState} from "react";
// Class, ou fonction ?

// PouletClass
export class PouletClass extends Component {
  constructor() {
    super();

    this.state = {
      jours: 1,
      race: "",
      stade: "",
    }
  }

  render() {

    const messageFinal = this.props.message === 'male' ? "Cocorico" : "Rien du tout"

    // let messageFinal = "";
    // if (this.props.message === 'male') {
    //   messageFinal = "Cocorico";
    // }
    // else {
    //   messageFinal = "Rien du tout";
    // }

    console.log(this);

    return (
      <div className="Poulet">
        <p>Ceci est le composant pouleto <strong>class</strong></p>
        <p>Le poulet a {this.state.jours} jours.</p>
        <p>Oh, let poulet a un message : {messageFinal}</p>
        <button onClick={this.increaseDays}>+1 jour</button>
      </div>
    )
  }

  // Pour déclarer une méthode qui utilise this.X, déclarer de cette manière. Sinon ça marche pas.
  increaseDays = () => {
    console.log(this);
    this.setState({
      jours: this.state.jours + 1
    })
  }
}
// PouletFunction
export function PouletFunction(props) {

  const [jour, setJour] = useState(0);

  const messageFinal = props.message === 'male' ? "Cocorico" : "Rien du tout"

  return (
    <div className="Poulet">
      <p>Ceci est le composant pouleto <strong>Function</strong></p>
      <p>Oh, le poulet a un message : {messageFinal}</p>
      <p>Age en jours : {jour}</p>
      <button onClick={increaseDays}>+1 jour</button>
      <button onClick={() => setJour(jour + 1)}>+1 jour</button>
    </div>
  )

  function increaseDays() {
    setJour(jour + 1)
  }
}


// Cycles de vie, componentDidMount, ... useEffect.