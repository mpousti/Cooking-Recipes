import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'
import { Link } from 'react-router-dom'
import deleteIcon from './../assets/deleteicon.svg'
import { db } from '../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

export default function RecipeList({ recipes }) {

  const handleDelete = async (id) => {
    try {
      const ref = doc(db, 'Recipe', id)
      await deleteDoc(ref)


    } catch (err){
      console.log(err)
    }
    
  }


  const { mode } = useTheme()

  return (
    <div className='recipe-list'>{recipes.map(recipe => (
        <div key={recipe.id} className={`card ${ mode }`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} minutes to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`/recipes/${recipe.id}`}> Cook this </Link>
            <img src={deleteIcon}
            alt="delete icon" 
            className='delete' 
            onClick={() => {handleDelete(recipe.id)}} 
            style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
            />
        </div>
    ))}</div>
  )
}
