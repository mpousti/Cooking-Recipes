import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from './../assets/darkmode.svg'

const themeColors = ['#58249c', '#babd20', '#249c6b', '#b70233'] 

export default function ThemeSelector() {

    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    
  return (
    <div className='theme-selector'>
        <div className="toggle-icon">
            <img src={modeIcon} style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} onClick={toggleMode} alt="dark-mode icon" />
        </div>
        <div className="theme-buttons">
            {themeColors.map((color, i) => (
                <button key={i} onClick={()=>changeColor(color)} style={{backgroundColor: color}}></button>
            ))}
        </div>
    </div>
  )
}
