import './index.css';
function AddStudent() {
    return (
        <body>
            <div className="student">
                <form>
                    <div className="hori-box">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder="Father's Name" />
                    </div>
                    <div className="hori-box">
                        <input type="tel" placeholder='Roll Number' />
                        <input type="tel" placeholder="Contact Number" />
                    </div>
                    <div className="single-box">
                        <input type="text" placeholder='CNIC Without Haphens'/>
                    </div>
                    <div className="single-box">
                        <input type="file" required/>
                    </div>
                    <div className="hori-box">
                        <input type="text" placeholder='Course Name' />
                        <input type="text" placeholder="Class" />
                    </div>
                    <button>ADD</button>
                </form>
            </div>
        </body>
    )
}
export default AddStudent;