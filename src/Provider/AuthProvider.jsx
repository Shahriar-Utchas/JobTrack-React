import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);

    const GoogleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                SetUser(result.user);
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
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
        handleGoogleSignout
    };
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;