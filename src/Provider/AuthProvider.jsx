import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.init';
import axios from 'axios';


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

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('state cuptured', currentUser)

            if (currentUser?.email) {
                const user = { email: currentUser?.email }

                axios.post('https://kindbites.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setloading(false)
                    })
            }
            else {
                axios.post('https://kindbites.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('logout', res.data )
                        setloading(false)
                    })
            }

            setloading(false)
        })

        return () => unSubscribe()
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;