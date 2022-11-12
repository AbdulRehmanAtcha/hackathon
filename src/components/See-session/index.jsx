import './see.css';
import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection,
    addDoc, getDocs, doc,
    onSnapshot, query, serverTimestamp,
    orderBy, deleteDoc, updateDoc
  
  } from "firebase/firestore";
import { useState, useEffect } from "react";



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


function SeeClass() {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        const getClasses = async () => {
            const querySnapshot = await getDocs(collection(db, "Classes"));

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => `, doc.data());

                setClasses((prev) => {
                    let newArray = [...prev, doc.data()];
                    return newArray
                });

            });
        }
        getClasses();
    }, [])

















    return (
        <body>
            <div className="classes">
            {classes.map(
                (eachClass, i)=>(
                    <div className='class' key="i">
                        <div className="timing">
                            <h2>From: {eachClass?.from} To {eachClass?.to}</h2>
                        </div>
                        <div className="days">
                            <h2>Days: {eachClass?.days}</h2>
                        </div>
                        <div className="teacher-name">
                            <h2>Teacher Name: {eachClass?.teacher}</h2>
                        </div>
                        <div className="section">
                            <h2>Section: {eachClass?.section}</h2>
                        </div>
                        <div className="course">
                            <h2>Course Name: {eachClass?.course}</h2>
                        </div>
                        <div className="batch">
                            <h2>Batch# {eachClass?.batch}</h2>
                        </div>
                        <button>Attendence</button>
                    </div>
                )
            )}
            </div>
        </body>
    )
}
export default SeeClass;