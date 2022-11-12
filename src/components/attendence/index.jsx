import './index.css';
import moment from 'moment';
import {
    getFirestore, collection,
    addDoc, getDocs, doc,
    onSnapshot, query, serverTimestamp,
    orderBy

} from "firebase/firestore";
import { initializeApp } from "firebase/app";
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











function Attendence() {
    const [stdName, setStdName] = useState("");
    const [fathName, setFathName] = useState("");
    const [stdRoll, setStdRoll] = useState("");
    const [stdTeacher, setStdTeacher] = useState("");
    const [stdAttend, setStdAttend] = useState("");
    const [attends, setAttends] = useState([]);







    const attendHandler = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Attendence"), {
                name: stdName,
                FatherName: fathName,
                roll: stdRoll,
                teacher: stdTeacher,
                attendence: stdAttend,
                createdOn: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
            // e.reset();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        const getAttend = async () => {
            const querySnapshot = await getDocs(collection(db, "Attendence"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => `, doc.data());
                setAttends((prev) => {
                    let newArray = [...prev, doc.data()];
                    return newArray
                });
            });
        }
        let unsubscribe = null;
        // getAttend();
        const RealTimeData = async () => {

            const q = query(collection(db, "Attendence"), orderBy("createdOn", "desc"));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const attends = [];
                querySnapshot.forEach((doc) => {
                    // attend.push(doc.data());
                    attends.push({ id: doc.id, ...doc.data() });
                });

                setAttends(attends);
                console.log("Attendence: ", attends);
            });
        }
        RealTimeData();
    }, [])





    return (
        <body>
            <div className="main-box">
                <h2>Attendence Form</h2>
                <h3>Saylani Mass IT Training Program</h3>
                <div className="inputs">
                    <form onSubmit={attendHandler}>
                        <div className="hori-box">
                            <input type="text" placeholder='Name' onChange={(e) => {
                                setStdName(e.target.value);
                            }} required/>
                            <input type="text" placeholder="Father's Name" onChange={(e) => {
                                setFathName(e.target.value);
                            }} required/>
                        </div>
                        <div className="single-box">
                            <input type="tel" placeholder='Roll No' onChange={(e) => {
                                setStdRoll(e.target.value);
                            }} required/>
                        </div>
                        <div className="single-box">
                            <input type="txt" placeholder="Teacher's Name" onChange={(e) => {
                                setStdTeacher(e.target.value);
                            }} required/>
                        </div>
                        <select onChange={(e) => {
                            e.preventDefault();
                            // console.log("Attend: "+e.target.value);
                            setStdAttend(e.target.value);
                        }}>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            <option value="Late">Late</option>
                            <option value="leave">Leave</option>
                        </select>
                        <button type='submit'>Submit</button>

                    </form>
                </div>
            </div>
            <br />
            <div className="data">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Father's Name</th>
                            <th>Roll No</th>
                            <th>Teacher</th>
                            <th>Date</th>
                            <th>Attendece</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attends.map((eachAttend, i) => (
                            <tr key={i}>
                                <td>{eachAttend?.name}</td>
                                <td>{eachAttend?.FatherName}</td>
                                <td>{eachAttend?.roll}</td>
                                <td>{eachAttend?.teacher}</td>
                                <td>{
                                    moment(
                                        (
                                            eachAttend?.createdOn?.seconds) ? eachAttend?.createdOn?.seconds * 1000
                                            :
                                            undefined)
                                        .format('Do MMMM YY , h:mm a')}</td>
                                <td>{eachAttend?.attendence}</td>
                            </tr>
                        )
                        )}
                    </tbody>

                </table>
            </div>
        </body>
    )
}
export default Attendence;
