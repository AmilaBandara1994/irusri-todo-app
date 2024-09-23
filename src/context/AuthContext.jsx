import React, {  useState ,  useContext, useEffect} from 'react';

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
    useEffect(()=>{
        localStorage.setItem('users', JSON.stringify(users));
    },[users])
    return (
        <AuthContext.Provider value={value}> {props.children} </AuthContext.Provider>
    )
}