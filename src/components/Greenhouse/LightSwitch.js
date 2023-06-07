import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  const changeTheme = (e) => {
    setThemeName(e.target.innerText.toLowerCase());
    console.log(e.target.innerText.toLowerCase());
  }
  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick={changeTheme} className="on">DAY</div>
      <div onClick={changeTheme} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
