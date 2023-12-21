import { createContext, useContext } from "react";
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // const navigate = useNavigate();

  const getUserData = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    return data || {};
  };

  return (
    <UserContext.Provider value={{ getUserData }}>
      {children}
    </UserContext.Provider>
  );
};
