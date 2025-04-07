import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"

const PresentedStudents = () => {
    const {
        presentStudents,
        dispatch,
    } = useContext(StudentContext)
    return (
        <>
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
                            {presentStudents.map(presentStudent => (
                                <tr key={presentStudent.id}>
                                    <td>{presentStudent.name}</td>
                                    <td className="flex gap-1">
                                        <button onClick={() => dispatch({type:"changeStudentStatus", payload:{id:presentStudent.id,isPresent:false}})} className="btn btn-secondary btn-xs">Make Absent</button>
                                        <button onClick={() => dispatch({type:"changeStudentStatus", payload:{id:presentStudent.id,isPresent:undefined}})} className="btn btn-error btn-xs">Accedentally Cliked</button>
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

export default PresentedStudents