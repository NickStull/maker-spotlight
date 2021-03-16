import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase"
import API from "../API"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function updateUserInfo() {
    API.getUser(currentUser.uid)
      .then((response) => {
        setUserInfo(response.data)
      }) 
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      setCurrentUser(user)
      if(user){
        await API.getUser(user.uid)
          .then((response) => {
            setUserInfo(response.data)
          }) 
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userInfo,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}








// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from '../../firebase'
// import API from "../API";

// const AuthContext = createContext()

// const useAuth = () => useContext(AuthContext)


// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);
//   const [accountInfo, setAccountInfo] = useState();

//   const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)


//   const login = (email, password) => {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   const logout = () => {
//     return auth.signOut();
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       setCurrentUser(user);
//       if(currentUser){
//         let userInfo = await API.getUser(user.uid);
//         setAccountInfo(userInfo.data)
//       }
//       setLoading(false);
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     accountInfo,
//     login,
//     signup,
//     logout
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       { !loading && children }
//     </AuthContext.Provider>
//   )
// }

// export { AuthProvider, useAuth }
