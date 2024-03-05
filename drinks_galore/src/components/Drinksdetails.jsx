import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DrinksDetails (props) {
    const [drink, setDrink] = useState()
    let { id } = useParams()

    useEffect(() => {
        const getDrink = async() => {
            const response = await axios.get(`${props.apiCall}lookup.php?i=${id}`)
            setDrink(response.data.drinks[0])
        }
        getDrink()
    }, [])

    if (!drink) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='drinks-details'>
                <h1>{drink.strDrink}</h1>
            </div>
        )
    }
}