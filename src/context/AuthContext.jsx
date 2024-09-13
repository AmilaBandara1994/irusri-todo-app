import React, {  useState ,  useContext} from 'react';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [users, setUsers]  = useState(JSON.parse(localStorage.getItem('users')|| "[]"));
    const [authUser, setAuthUser]  = useState();
    const [isLoggedIn, setIsLoggedIn]  = useState(false)

    const value = {
        users,
        setUsers,
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}> {props.children} </AuthContext.Provider>
    )
}