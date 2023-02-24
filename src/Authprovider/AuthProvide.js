import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase";

 export const authcontext = createContext()
const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   

    // ==Create User
    const registerUser =( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ==Login User
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ==Google
    const provider = new GoogleAuthProvider()
    const googleUser = () =>{
        return signInWithPopup(auth, provider)
    }

     // ==LogoutUser
     const logoutUser = () =>{
        return signOut(auth)
    }

    // updetUser
    const userUpdet =(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }

   // ==user control
   useEffect(() =>{      
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
          setLoading(false)
          console.log(currentUser);
      })
      return () =>{
          unsubscribe()
      }
  },[])

  const allInfo = { user, loading, registerUser, loginUser, googleUser, logoutUser, userUpdet }


  return(

        <div>
            <authcontext.Provider value={allInfo}>
                {children}
            </authcontext.Provider>
        </div>
    );
};

export default AuthProvide;