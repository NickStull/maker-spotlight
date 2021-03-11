import React from 'react';
import './App.css';
import SignupButton from './components/SignupButton';
import Test from "./components/Test"
import { AuthProvider } from "./utils/contexts/AuthContext"

function App() {
  return (
    <>
      <AuthProvider>
        <Test />
        <SignupButton />
      </AuthProvider>
    </>
  );
}

export default App;
