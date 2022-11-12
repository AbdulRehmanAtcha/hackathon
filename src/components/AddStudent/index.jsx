import './index.css';
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAiOz22PJz_wdMSZ7KIO1fS5W6JX9zArjs",
    authDomain: "saylani-hackathon-d4b5e.firebaseapp.com",
    projectId: "saylani-hackathon-d4b5e",
    storageBucket: "saylani-hackathon-d4b5e.appspot.com",
    messagingSenderId: "652933691764",
    appId: "1:652933691764:web:f9235615e4a738d4d5d421"
};

const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



function AddStudent() {
    const [stdName, setStdName] = useState("");
    const [fathName, setFathName] = useState("");
    const [stdRoll, setStdRoll] = useState();
    const [stdContact, setContact] = useState();
    const [stdCNIC, setStdCNIC] = useState();
    const [stdCourse, setStdCourse] = useState("");
    const [stdClass, setStdClass] = useState("");







    const studentHandler = async(e)=>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Students"), {
              createdOn: serverTimestamp(),
              name:stdName,
              fatherName:fathName,
              roll:stdRoll,
              contact:stdContact,
              cnic:stdCNIC,
              course:stdCourse,
              class:stdClass
            });
            console.log("Document written with ID: ", docRef.id);
            // e.reset();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // console.log("hello");
    }



    return (
        <body>
            <div className="student">
                <form onSubmit={studentHandler}>
                    <div className="hori-box">
                        <input type="text" placeholder='Name' onChange={(e)=>{
                            setStdName(e.target.value);
                        }} required/>
                        <input type="text" placeholder="Father's Name" onChange={(e)=>{
                            setFathName(e.target.value);
                        }} required/>
                    </div>
                    <div className="hori-box">
                        <input type="tel" placeholder='Roll Number' onChange={(e)=>{
                            setStdRoll(e.target.value);
                        }} required/>
                        <input type="tel" placeholder="Contact Number" onChange={(e)=>{
                            setContact(e.target.value);
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder='CNIC Without Haphens' onChange={(e)=>{
                            setStdCNIC(e.target.value);
                        }} required/>
                    </div>
                    <div className="hori-box">
                        <input type="text" placeholder='Course Name' onChange={(e)=>{
                            setStdCourse(e.target.value);
                        }} required/>
                        <input type="text" placeholder="Class" onChange={(e)=>{
                            setStdClass(e.target.value);
                        }} required/>
                    </div>
                    <button type='submit'>ADD STUDENT</button>
                </form>
            </div>
        </body>
    )
}
export default AddStudent;