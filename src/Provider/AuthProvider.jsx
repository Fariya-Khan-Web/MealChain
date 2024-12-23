import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.init';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setloading] = useState(true)

    // const auth = getAuth(app)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const loginGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        loginGoogle,
        signOutUser,
        createUser,
        updateUserProfile,
        loginUser,
        loading, 
        setloading,
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setloading(false)
        })

        return () => unSubscribe()
    },[])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;