import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';
import { useDoc } from '../../hooks/useDoc';


export default function Recipe() {

    const { id } = useParams()
    const {state} = useDoc('Recipe', id)
    const { mode } = useTheme()
   
    return (
    <div className={`recipe ${mode}`}>
        {state.error && <div className='error'>{state.error}</div>}
        {state.isLoading && <div className='loading'>Loading...</div>}
        {state.data && (
          <>
            <h2>{state.data.title}</h2>
            <p>Cooking time: {state.data.cookingTime}</p>
            <h3>Ingredients: </h3>
            <ul>
              {state.data.ingredients.map((item , index)=>(
                <li key = {index}>{item}</li>
              ))}
            </ul>
            <p>Instructions: {state.data.method}</p>

          </>
        )     
        }
    </div>
  )
}
