import { createContext, useReducer } from "react";
import { userReducer, userInitialState } from "../reducers/userReducer";

const initialState = {
    user: userInitialState,
}

export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state, action) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider = (props) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <>

        <Context.Provider value={{ state, dispatch }} >

            {props.children}

        </Context.Provider>

    </>
}