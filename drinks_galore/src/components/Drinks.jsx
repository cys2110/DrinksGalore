import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Drinks (props) {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('Ordinary_Drink')
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const getCategories = async() => {
            const response = await axios.get(`${props.apiCall}list.php?c=list`)
            setCategories(response.data.drinks)
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getDrinks = async() => {
            const response = await axios.get(`${props.apiCall}filter.php?c=${category}`)
            setDrinks(response.data.drinks)
        }
        getDrinks()
    }, [category])

    const normaliseCategory = (category) => {
        return encodeURIComponent(category)
    }

    const handleChange = (event) => {
        setCategory(event.target.value)
    }

    let navigate = useNavigate()

    const showDrink = (id) => {
        navigate(id)
    }

    return (
        <div>
            <select id='category' onChange={handleChange}>
                
            {categories.map((category, index) =>
                <option key={index} value={normaliseCategory(category.strCategory)}>{category.strCategory}</option>)}
            </select>
            <div className='drinks-wrapper'>
            {drinks.map((drink) => (
                <div key={drink.idDrink}>
                    <img src={drink.strDrinkThumb} onClick={() => showDrink(drink.idDrink)}/>
                    <p>{drink.strDrink}</p>
                </div>
            ))}
            </div>
        </div>
    )
}