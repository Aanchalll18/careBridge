import { createContext, useState } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const [doctorInfo, setDoctorInfo] = useState(null);
  const value = { doctorInfo, setDoctorInfo };

  return (
    <DoctorContext.Provider value={value}>
      {props.children} {/* ✅ fixed spelling */}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
