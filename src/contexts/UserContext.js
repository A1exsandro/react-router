import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
const { createContext, useContext, useState } = require("react")

const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
	const [infoUser, setInfoUser] = useState(null)

  const logout = () => {
    // Lógica de logout para deslogar o usuário
    setInfoUser(null);
  };

  const isAuthenticated = () => {
    // Verifique se o usuário está autenticado
    return infoUser !== null;
  };

	return(
		<UserContext.Provider value={{ 
      infoUser,
			setInfoUser,
      logout,
      isAuthenticated,
    }}>
      {children}
    </UserContext.Provider>
	)
}

export const useUserContex = () => {
  return useContext(UserContext)
}

// Componente de guarda de rota
// verificara a possibilidade de separar em um coponente
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext);

  return ( 
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Route path="/login" element={<Login />} />
        )
      }
    /> 
  );
};