
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useTheme } from './../hooks/useTheme'


export default function Navbar() {

  const { color } = useTheme()


  return (
    <div className='navbar' style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className='brand'><h1>Cooking Recipes</h1></Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
