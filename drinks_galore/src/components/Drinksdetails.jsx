import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DrinksDetails (props) {
    const [drink, setDrink] = useState()
    let { id } = useParams()
    const [ingredients, setIngredients] = useState([])
    const [languages, setLanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState()

    useEffect(() => {
        const getDrink = async() => {
            const response = await axios.get(`${props.apiCall}lookup.php?i=${id}`)
            setDrink(response.data.drinks[0])
        }
        getDrink()
    }, [])

    useEffect(() => {
        if (drink) {
            let newIngredients = []
            for (let i=1; i<16; i++) {
                let ingredientKey = "strIngredient" + i
                let measureKey = "strMeasure" + i
                let ingredient
                if (drink[measureKey] !== null && drink[ingredientKey] !== null) {
                    ingredient = `${drink[measureKey]} ${drink[ingredientKey]}`
                } else if (drink[ingredientKey] !== null) {
                    ingredient = drink[ingredientKey]
                }
                if (ingredient !=null) {
                    newIngredients.push(ingredient)
                }
            }
            setIngredients(newIngredients)
        }
    }, [drink])

    useEffect(() => {
        let languageSelection = []
        if (drink) {
            if (drink.strInstructions !== null && drink.strInstructions !== "") {
                languageSelection.push('English')
            }
            if (drink.strInstructionsES !== null && drink.strInstructionsES !== "") {
                languageSelection.push('Spanish')
            }
            if (drink.strInstructionsDE !== null && drink.strInstructionsDE !== "") {
                languageSelection.push('German')
            }
            if (drink.strInstructionsFR !== null && drink.strInstructionsFR !== "") {
                languageSelection.push('French')
            }
            if (drink.strInstructionsIT !== null && drink.strInstructionsIT !== "") {
                languageSelection.push('Italian')
            }
            if (drink['strInstructionsZH-HANS'] !== null && drink['strInstructions-HANS'] !== "") {
                languageSelection.push('Mandarin (simplified)')
            }
            if (drink['strInstructionsZH-HANT'] !== null && drink['strInstructions-HANT'] !== "") {
                languageSelection.push('Mandarin (traditional)')
            }
        }
        setLanguages(languageSelection)
    }, [drink])

    const handleChange = (event) => {
        if (event.target.value === 'English') {
            setSelectedLanguage(drink.strInstructions)
        } else if (event.target.value === 'Spanish') {
            setSelectedLanguage(drink.strInstructionsES)
        } else if (event.target.value === 'German') {
            setSelectedLanguage(drink.strInstructionsDE)
        } else if (event.target.value === 'French') {
            setSelectedLanguage(drink.strInstructionsFR)
        } else if (event.target.value === 'Italian') {
            setSelectedLanguage(drink.strInstructionsIT)
        } else if (event.target.value === 'Mandarin (simplified') {
            setSelectedLanguage(drink['strInstructionsZH-HANS'])
        } else if (event.target.value === 'Mandarin (traditional') {
            setSelectedLanguage(drink['strInstructionsZH-HANT'])
        }
    }

    if (!drink) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='drinks-details'>
                <h1>{drink.strDrink}</h1>
                <img src={drink.strDrinkThumb} />
                <dl>
                    <dt>Tags</dt>
                    <dd>{drink.strTags !== null ? drink.strTags : 'None'}</dd>
                    
                    <dt>Category</dt>
                    <dd>{drink.strCategory}</dd>

                    <dt>Glass</dt>
                    <dd>{drink.strGlass}</dd>

                    <dt>Ingredients</dt>
                    {ingredients.map((ingredient, index) =>
                        <dd key={index}>{ingredient}</dd>)}
                </dl>
                <h3>Instructions</h3>
                <select id="language" onChange={handleChange}>
                <option value="" defaultValue>Select a language</option>
                    {languages.map((language, index) => (
                    <option key={index} value={language}>{language}</option>))}
                </select>
                <p>{selectedLanguage}</p>
            </div>
        )
    }
}