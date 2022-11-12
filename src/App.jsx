
import './App.css';
import { useState, useEffect } from 'react';
import Choice from './components/choice/index';
import Form from './components/form/index';
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AddSession from './components/Addsession/index';
import SeeClass from './components/SeeClasses/index';
import AddStudent from './components/AddStudent/index';
import Attendence from "./components/attendence/index";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
        console.log("Login Hai", user);
        // ...
      } else {
        // ...
        console.log("Login nahi Hai");
        setIsLogin(false);
      }
    });
    return () => {
      Unsubscribe();
    }
  }, [])


  return (
    <div>
      {isLogin
        ?
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="/form" element={<Form />} />
          <Route path="addsession" element={<AddSession />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="seeclass" element={<SeeClass />} />
          <Route path="attendence" element={<Attendence />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    }
    <Attendence/>
    
    </div>
  );
}

export default App;
