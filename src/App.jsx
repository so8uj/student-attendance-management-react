import { useState } from "react"

const App = () => {

    // States
    const [students,SetStudents] = useState([
        {
            id:1, 
            name:"Sobuj",
            isPresent: undefined
        }
    ]);

    const [studetnName , setStudetnName] = useState("");
    const [editMode , setEditMode] = useState(false);
    const [studentEditId , setStudentEditId] = useState("");

    // Derived States
    const presentStudents = students.filter(student => student.isPresent === true);
    const absentStudents = students.filter(student => student.isPresent === false);

    // Methods
    const handleInput = (e) => {
        setStudetnName(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();
        if(studetnName.trim() === ""){
            return alert("Please provide a valid Student Name!");
        }
        editMode ? handleUpdateStudent() : handleAddStudent()
        setStudetnName("")
    }

    const handleAddStudent = () => {
        const newStudent = {
            id: Date.now()+"",
            name:studetnName,
            isPresent:undefined
        }
        SetStudents([...students, newStudent]);
    };


    const handleEditMode = (student) => {
        setStudetnName(student.name)
        setStudentEditId(student.id)
        setEditMode(true);
    };

    const handleUpdateStudent = () => {
        const editedStudent = students.map(student=>{
            return student.id === studentEditId ? {...student,name:studetnName} : student;
        })
        SetStudents([...editedStudent]);
        setEditMode(false);
    };

    const deleteStudent = (studentId) => {
        if(confirm("Are you sure to Delete Student!")){
            const updatedStudent = students.filter(student => student.id !== studentId)
            SetStudents([...updatedStudent]);
        };
    };

    const handleStudentStatus = (studentId,status) => {
        const getStudent = students.filter(student => student.id === studentId)

        const updateStatus = students.map(student=>{
            return student.id === studentId ? {...student,isPresent:status} : student;
        })
        SetStudents([...updateStatus]);
    }

    return (
        <>
            <div className="mt-10 container px-3 lg:px-0 mx-auto">

                <div className="flex flex-col items-center">
                    <h2 className="text-3xl text-center lg:text-4xl text-white mb-7">Student Attendance Management System </h2>
                    <form onSubmit={handleForm}>
                        <div className="join">
                            <input className="input join-item rounded-l-full" placeholder="Student Name"
                                value={studetnName}
                                onChange={handleInput}
                            />
                            <button className="btn btn-primary join-item rounded-r-full">{editMode ? "Update":"Add"} Student</button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row mt-9 gap-4">
                    
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">All Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map(student=>(
                                        <tr key={student.id}>
                                            <td>{student.name}</td>
                                            <td className="flex gap-1">
                                                <button onClick={()=>handleEditMode(student)} className="btn btn-info btn-xs">Edit</button>
                                                <button onClick={()=>deleteStudent(student.id)} className="btn btn-error btn-xs">Delete</button>
                                                <button onClick={()=>handleStudentStatus(student.id,true)} className="btn btn-success btn-xs">Make Present</button>
                                                <button onClick={()=>handleStudentStatus(student.id,false)} className="btn btn-secondary btn-xs">Make Absent</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">Present Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                
                                
                                <tbody>
                                    {presentStudents.map(presentStudent=>(
                                        <tr key={presentStudent.id}>
                                            <td>{presentStudent.name}</td>
                                            <td className="flex gap-1">
                                                <button onClick={()=>handleStudentStatus(presentStudent.id,false)} className="btn btn-secondary btn-xs">Make Absent</button>
                                                <button  onClick={()=>handleStudentStatus(presentStudent.id,undefined)} className="btn btn-error btn-xs">Accedentally Cliked</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">Absent Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {absentStudents.map(absentStudent=>(
                                        <tr key={absentStudent.id}>
                                            <td>{absentStudent.name}</td>
                                            <td className="flex gap-1">
                                                <button onClick={()=>handleStudentStatus(absentStudent.id,true)} className="btn btn-success btn-xs">Make Present</button>
                                                <button  onClick={()=>handleStudentStatus(absentStudent.id,undefined)} className="btn btn-error btn-xs">Accedentally Cliked</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App