import React, { createContext, use, useEffect, useState} from 'react';
import { auth } from '../Firebase/FireBase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true)
  const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  }
const loginUser = (email, password) => {
  setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
}
const signInGoogle = () => {
  setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

    const logOut = () => {
      setLoading(true)
    return signOut(auth);
  };
  const updateProfileUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      // console.log(currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
registerUser,
loginUser,
logOut,
updateProfileUser,
signInGoogle, 
user,
loading
  }
  return  <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
};

export default AuthProvider;