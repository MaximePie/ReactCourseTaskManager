import React, {useState} from 'react';
import axios from 'axios';

// Essayez d'afficher "haha" pour voir
export default function AddArticle (){
    const[nameState, setNameState] = useState('')
    const[quantityState, setQuantityState] = useState('')
    const[priceState, setPriceState] = useState('')
    
    return (
        <div>
            {/* nom(name),quantité(quantity), prix(price) */}
            <form>
                <label>Nom</label>
                <input type='text' name='name' onChange={nameChange} value={nameState}></input>
                <label>Quantité</label>
                <input type='number' name='quantity' onChange={quantityChange} value={quantityState}></input>
                <label>Prix</label>
                <input type='number' name='price' onChange={priceChange} value={priceState}></input>
                <button type="button" onClick={createArticle}>Créer un article</button>
            </form>
        </div>
    )

    function nameChange(event){
        setNameState(event.target.value);
        console.log(nameState)
    }

    function quantityChange(event){
        setQuantityState(event.target.value)
        console.log(quantityState) // Décalé d'une mise à jour, c'est embêtant mais on verra comment corriger.

    }

    function priceChange(event) {
        setPriceState(event.target.value)
        console.log(priceState)
    }

    // 1 - Récupérer et afficher dans la console les valeurs saisies dans le formulaire.
    // http://localhost:5050/articles
    async function createArticle () {
        
        const newArticle = await axios.post('http://localhost:5050/articles', 
        {
            name: nameState,
            price: priceState,
            quantity: quantityState
        });
    }
}

