import React, {createContext ,useState} from 'react'
import { useNavigate,useEffect } from 'react-router-dom';
const UserContext = createContext()

function UserProvider  ({children})  {

    const [auth, setAuth]= useState(false)
    const [user, setUser]= useState({})
    const navigate = useNavigate()
    
    function logIn(callback){
        let result = callback()     
        if(result.error) console.log(result.error)
        else{
            if(result.auth){
                setAuth(true)
                setUser(user)
                navigate('/')
            }else{
                console.log("sem usuario")
            }
        }
    }
    
    useEffect(() => {
        //VERIFICAR SE EXISTE UM COOKIE COM NOME DE "RFRESH COOKIE"
        //QUE FOI SETADO NO LOGIN
        //SE EXISTE O COOKIE TU VAI TENTAR AUTENTICAR COM ELE
        //SE AUTENTICAR FAZ LOIGN

        //SE NÃO NAVEGA PRA MAIN
        
    },/* compoenent callback */);
    
    return (
            <UserContext.Provider value = {{auth,user,logIn}}>
                {children}
            </UserContext.Provider>
    );
}

export {UserProvider, UserContext} ;
