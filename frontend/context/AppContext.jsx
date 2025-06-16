import { createContext } from "react";
import { doctors } from "../src/assets/assets";

export const AppContext = createContext()

const AppContextProvider = () =>{

    const currencySymbol = '$'

    const value = {
        doctors,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {this.props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider