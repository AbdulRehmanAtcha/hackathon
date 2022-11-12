import './index.css';
import AddClass from '../Addsession/index';
import SeeClass from '../SeeClasses';
import { Link } from "react-router-dom";
function Choice() {

    
    return (
        <body>
            <div className="choice">
                <button><Link to="/Addsession">ADD CLASS</Link></button>
                <button><Link to="/AddStudent">ADD Student</Link></button>
                <button><Link to="/SeeClass">See All Classes</Link></button>
                <button><Link to="/Attendence">Attendence</Link></button>
            </div>
        </body>

    )
}
export default Choice