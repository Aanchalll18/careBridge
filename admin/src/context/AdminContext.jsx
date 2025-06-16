import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [state, setState] = useState('Admin'); // example value
  const value = [state, setState];

  return (
    <AdminContext.Provider value={value}>
      {props.children} {/* ✅ fixed spelling */}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
