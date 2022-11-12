import './index.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyAiOz22PJz_wdMSZ7KIO1fS5W6JX9zArjs",
    authDomain: "saylani-hackathon-d4b5e.firebaseapp.com",
    projectId: "saylani-hackathon-d4b5e",
    storageBucket: "saylani-hackathon-d4b5e.appspot.com",
    messagingSenderId: "652933691764",
    appId: "1:652933691764:web:f9235615e4a738d4d5d421"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);


    const loginHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsError(false);
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                alert("Not Successful");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <>
            <body>
                <div className="signin-box">
                    <form onSubmit={loginHandler}>
                        <div className={isError ? "error show" : "error hide"}>Invalid Email Or Password!</div>
                        <input type="email" placeholder='Email' onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        <input type="password" placeholder='Password' onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </body>
        </>
    )
}
export default Form;



