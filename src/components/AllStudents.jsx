import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"

const AllStudents = () => {
    const {
        students,
        handleEditMode,
        deleteStudent,
        handleStudentStatus,
    } = useContext(StudentContext)
    return (
        <>
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
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td className="flex gap-1">
                                        <button onClick={() => handleEditMode(student)} className="btn btn-info btn-xs">Edit</button>
                                        <button onClick={() => deleteStudent(student.id)} className="btn btn-error btn-xs">Delete</button>
                                        <button onClick={() => handleStudentStatus(student.id, true)} className="btn btn-success btn-xs">Make Present</button>
                                        <button onClick={() => handleStudentStatus(student.id, false)} className="btn btn-secondary btn-xs">Make Absent</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AllStudents