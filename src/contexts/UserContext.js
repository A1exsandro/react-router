const { createContext, useContext, useState } = require("react")

const UserContext = createContext({})

export const UserContextProvider = (props) => {
	const [infoUser, setInfoUser] = useState({})

	return(
		<UserContext.Provider value={{ 
      infoUser,
			setInfoUser
    }}>
      {props.children}
    </UserContext.Provider>
	)
}

export const useUserContex = () => {
  return useContext(UserContext)
}