import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import API from "../API";

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [accountInfo, setAccountInfo] = useState();

  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)


  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if(currentUser){
        let userInfo = await API.getUser(user.uid);
        setAccountInfo(userInfo.data)
      }
      setLoading(false);
    })

    return unsubscribe
  }, [])

  const value = {
    accountInfo,
    currentUser,
    accountInfo,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
