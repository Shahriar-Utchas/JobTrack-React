import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);

    const createUser = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                return updateProfile(user, {
                    displayName: name
                }).then(() => {
                    SetUser({ ...user, displayName: name });
                    return true;
                });
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                throw error;
            });
    };
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    };
    const handleGoogleSignout = () => {
        auth.signOut()
            .then(() => {
                SetUser(null);
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                SetUser(user);
            } else {
                SetUser(null);
            }
        });
        return () => unsubscribe();
    }, []);
    const authData = {
        user,
        SetUser,
        handleGoogleLogin,
        handleGoogleSignout,
        createUser,
        loginWithEmail,
    };
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;