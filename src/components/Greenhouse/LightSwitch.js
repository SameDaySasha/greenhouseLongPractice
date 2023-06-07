import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
const {themeName, setThemeName} = useTheme();

const onClick = (e) => {
    setThemeName(e.target.innerText.toLowerCase())
  }
  
  return (
    <div className={`light-switch ${themeName}`}>
      <div  className="on" onClick = {onClick}>DAY</div>
      <div className="off" onClick = {onClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;