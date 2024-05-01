import './Home.css'
import RecipeList from '../../components/RecipeList';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {

  const { state } =  useCollection('Recipe')

  return (
    <div className='home'>
      {state.error && <div className='error'>{state.error}</div>}
      {state.isLoading && <div className='loading'>Loading...</div>}
      {state.data && <div> <RecipeList recipes={state.data} /> </div>}
         
    </div>
  )
}
