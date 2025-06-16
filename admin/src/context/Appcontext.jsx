import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [appData, setAppData] = useState(null); // add whatever state you need
  const value = { appData, setAppData };

  return (
    <AppContext.Provider value={value}>
      {props.children} {/* ✅ fixed spelling */}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
