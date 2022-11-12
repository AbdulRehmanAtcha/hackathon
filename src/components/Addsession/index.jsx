import './index.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, doc, onSnapshot, query, serverTimestamp, orderBy } from "firebase/firestore";



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

function AddSession() {
    const [classFrom, setClassFrom] = useState();
    const [classTo, setClassTo] = useState();
    const [classDays, setClassDays] = useState("");
    const [classTeacher, setClasssTeacher] = useState("");
    const [classSection, setClassSection] = useState("");
    const [courseName, setCourseName] = useState("");
    const [batchName, setBatchName] = useState("");
    const [classes, setClasses] = useState([]);












    const classHandler = async(e)=>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Classes"), {
              from: classFrom,
              to: classTo,
              days: classDays,
              teacher:classTeacher,
              section:classSection,
              course:courseName,
              batch:batchName,
              createdOn: serverTimestamp(),
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
            <div className='class-box'>
                <form onSubmit={classHandler}>
                    <div className="hori-box">
                        <input type="number" min="1" max="12" maxLength="2" placeholder='Class From' onChange={(e)=>{
                            setClassFrom(e.target.value)
                        }} required/>
                        <input type="number" min="1" max="12" maxLength="2" placeholder='Class To' onChange={(e)=>{
                            setClassTo(e.target.value)
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder='Days Of Class With Spaces' onChange={(e)=>{
                            setClassDays(e.target.value)
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder="Teacher's Name" onChange={(e)=>{
                            setClasssTeacher(e.target.value)
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder="Section Name" onChange={(e)=>{
                            setClassSection(e.target.value)
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder="Course Name" onChange={(e)=>{
                            setCourseName(e.target.value)
                        }} required/>
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder="Batch Number" onChange={(e)=>{
                            setBatchName(e.target.value)
                        }} required/>
                    </div>
                    <button type='submit'>ADD CLASS</button>
                </form>
            </div>
        </body>
    )
}
export default AddSession;