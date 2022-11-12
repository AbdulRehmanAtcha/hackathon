import './index.css';
import AddClass from '../Addsession/index';
import { Link } from "react-router-dom";
function Choice() {

    
    return (
        <body>
            <div className="choice">
                <button><Link to="/Addsession">ADD CLASS</Link></button>
                <button>Add A Student</button>
                <button>See All Classes</button>
            </div>
        </body>

    )
}
export default Choice