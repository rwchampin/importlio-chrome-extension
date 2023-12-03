// react context store

import React from 'react';

export const StoreContext = React.createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    errors: [],
    access: null,
    refresh: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                user: action.payload.user,
                access: action.payload.access,
                refresh: action.payload.refresh,
                isAuthenticated: true,
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                user: null,
                access: null,
                refresh: null,
                isAuthenticated: false,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload,
            }
        case 'SET_ACCESS':
            return {
                ...state,
                access: action.payload,
            }
        case 'SET_REFRESH':
            return {
                ...state,
                refresh: action.payload,
            }
        default:
            return state;
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    return (
        <StoreContext.Provider value={[state, dispatch]}>
        {children}
        </StoreContext.Provider>
    );
    }

export const useStore = () => {
    const [state, dispatch] = React.useContext(StoreContext);

    // login
    const setAuth = (auth) => {
        dispatch({
            type: 'SET_AUTH',
            payload: {
                user: auth.user,
                access: auth.access,
                refresh: auth.refresh,
            }
        })
    }

    // logout
    const setLogout = () => {
        dispatch({
            type: 'SET_LOGOUT',
        })
    }

    // set user
    const setUser = (user) => {
        dispatch({
            type: 'SET_USER',
            payload: user,
        })
    }

    // set loading
    const setLoading = (isLoading) => {
        dispatch({
            type: 'SET_LOADING',
            payload: isLoading,
        })
    }

    // set errors
    const setErrors = (errors) => {
        dispatch({
            type: 'SET_ERRORS',
            payload: errors,
        })
    }

    // set access
    const setAccess = (access) => {
        dispatch({
            type: 'SET_ACCESS',
            payload: access,
        })
    }

    // set refresh
    const setRefresh = (refresh) => {
        dispatch({
            type: 'SET_REFRESH',
            payload: refresh,
        })
    }

    return {
        ...state,
        setAuth,
        setLogout,
        setUser,
        setLoading,
        setErrors,
        setAccess,
        setRefresh,
    }
}


