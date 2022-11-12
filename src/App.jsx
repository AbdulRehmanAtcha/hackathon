
import './App.css';
// import { useState, useEffect } from 'react';
// import Choice from './components/choice/index';
// import Form from './components/form/index';
// import { Routes, Route, Navigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import AddSession from './components/Addsession/index';
// import SeeClass from './components/See-session/index';
import AddStudent from './components/AddStudent/index';


function App() {
  // const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const Unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setIsLogin(true);
  //       console.log("Login Hai", user);
  //       // ...
  //     } else {
  //       // ...
  //       console.log("Login nahi Hai");
  //       setIsLogin(false);
  //     }
  //   });
  //   return () => {
  //     Unsubscribe();
  //   }
  // }, [])


  return (
    <div>
      {/* {isLogin
        ?
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="/form" element={<Form />} />
          <Route path="addsession" element={<AddSession />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    } */}
    <AddStudent/>
    
    </div>
  );
}

export default App;
