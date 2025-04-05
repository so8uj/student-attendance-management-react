
import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"

const AbsentStudents = () => {
    const {
        absentStudents,
        handleStudentStatus,
    } = useContext(StudentContext)
    return (
        <>
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
                            {absentStudents.map(absentStudent => (
                                <tr key={absentStudent.id}>
                                    <td>{absentStudent.name}</td>
                                    <td className="flex gap-1">
                                        <button onClick={() => handleStudentStatus(absentStudent.id, true)} className="btn btn-success btn-xs">Make Present</button>
                                        <button onClick={() => handleStudentStatus(absentStudent.id, undefined)} className="btn btn-error btn-xs">Accedentally Cliked</button>
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

export default AbsentStudents