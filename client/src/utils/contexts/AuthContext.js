import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import API from "../../utils/API";

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userAccountInfo, setUserAccountInfo] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut();
  }

  //use firebase id to get user info from mongodb
  const getCurrentUserInfo = async (userInfo) => {
    console.log('CURRENT USER', userInfo);
    // let dbResults;
    // try {
    //   dbResults = await API.getUser(currentUser.uid);
    // } catch (err) {
    //   console.error(err);
    // } finally {
    //   console.log('USER INFO RETURNED', dbResults);
    // setUserAccountInfo(dbResults);
    // }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log('USER INSIDE UNSUBSCRIBE', user);
      setCurrentUser(user);
      getCurrentUserInfo(user);
      setLoading(false);


    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userAccountInfo,
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
