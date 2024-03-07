import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Ingredients (props) {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        const getIngredients = async() => {
            const response = await axios.get(`${props.apiCall}list.php?i=list`)
            setIngredients(response.data.drinks)
        }
        getIngredients()
    })

    let navigate = useNavigate()

    const showIngredient = (name) => {
        navigate(name)
    }

    if (ingredients.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='ingredients-wrapper'>
                {ingredients.map((ingredient, index) =>
                    <p key={index} onClick={() => showIngredient(ingredient.strIngredient1)}>{ingredient.strIngredient1}</p>)}
            </div>
        )
    }
}
