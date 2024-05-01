import './Create.css'
import { useReducer, useRef } from 'react'
import { INITIAL_STATE, formReducer } from '../../reducers/formReducer'
import  {useNavigate}  from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'



export default function Create() {

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const navigate = useNavigate()

  const handleChange = e => {
    dispatch({type: "CHANGE_INPUT", 
    payload: {name: e.target.name, value: e.target.value}
    })
  }
  const ingRef = useRef()

  const handleRef = e => {
    const ingredient = ingRef.current.value
    if (ingredient !== "" && !state.ingredients.includes(ingredient)) {
      dispatch({type: 'ADD_INGREDIENTS', payload: ingredient})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const ref = collection(db, 'Recipe')
      await addDoc(ref, state)
      navigate('/')

    } catch (err) {
      console.log('Error creating recipe! ', err.message)
    }
  }

  
  return (
    <div className='create'>
      <h1 className="page-title">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input type="text" name='title' onChange={handleChange} value={state.title} required/>
        </label>
        <label className='ingredients'>
          <span>Ingredients: </span>
          <input type="text" ref={ingRef} name='ingredients' required/>
          <button className="btn" value={state.ingredients} onClick={handleRef}>Add Ingredient</button>
        </label>
        <label>
          <p>Current Ingredients = {state.ingredients.map( i => (<em key={i}>{i}, </em>))} </p>
        </label>
        <label>
          <span>Recipe Method: </span>
          <textarea name='method' onChange={handleChange} value={state.method} required></textarea>
        </label>
        <label>
          <span>Cooking Time (m): </span>
          <input type="number" name='cookingTime' value={state.cookingTime} onChange={handleChange} />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
