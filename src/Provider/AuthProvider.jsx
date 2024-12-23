import React, { createContext } from 'react';

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const authInfo = {

    }


    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;