import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  
  const value = {

  }

  return (
    <AdminContext.Provider value={value}>
      {props.children} {/* ✅ fixed spelling */}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
