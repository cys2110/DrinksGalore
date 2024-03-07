import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function IngredientDetails (props) {
    const [ingredient, setIngredient] = useState()
    const [drinks, setDrinks] = useState([])
    let { name } = useParams()

    useEffect(() => {
        const getIngredient = async() => {
            const response = await axios.get(`${props.apiCall}search.php?i=${name}`)
            setIngredient(response.data.ingredients[0])
        }
        getIngredient()
    }, [])

    useEffect(() => {
        const getDrinks = async() => {
            const response =await axios.get(`${props.apiCall}filter.php?i=${encodeURIComponent(ingredient.strIngredient)}`)
            setDrinks(response.data.drinks)
        }
        if (ingredient) {
            getDrinks()
        }
    }, [ingredient])

    if (!ingredient) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='ingredient-details'>
                <h1>{ingredient.strIngredient}</h1>
                {drinks.map(drink =>
                    <Link key={drink.idDrink} to={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>)}
            </div>
        )
    }
}