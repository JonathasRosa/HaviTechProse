import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();
    //cleanup - evita vazamento de memoria
    function checkIfIsCancelled() {
        if(cancelled){
            return;
        }
    }
    //User records in the system.
    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(null);
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth, data.email, data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            });
            setLoading(false);
            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            //Password error handling
            let systemErrorMessage
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Erro ao cadastrar usuário, tente mais tarde!"
            }

            setLoading(false);
            setError(systemErrorMessage);
        };
    };
    //Set canceled to true as soon as you leave the page.
    useEffect (() => {
        return () => setCancelled(true);
    }, []);
    return{ auth, createUser, error, loading };

};