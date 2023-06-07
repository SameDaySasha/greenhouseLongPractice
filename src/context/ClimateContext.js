import { createContext, useContext, useState } from 'react';
// import Thermometer from '../components/Thermometer';

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);

const ClimateProvider = ({children}) => {
    const [temp, setTemp] = useState(50);
    return <ClimateContext.Provider
    value={{ temp, setTemp}}>
        {children}
    </ClimateContext.Provider>
}

export default ClimateProvider;

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
