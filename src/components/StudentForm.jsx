import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"

const StudentForm = () => {

    const {
        studentStates,
        handleInput,
        handleForm,
    } = useContext(StudentContext)

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-center lg:text-4xl text-white mb-7">Student Attendance Management System </h2>
                <form onSubmit={handleForm}>
                    <div className="join">
                        <input className="input join-item rounded-l-full" placeholder="Student Name"
                            value={studentStates.studetnName}
                            onChange={handleInput}
                        />
                        <button className="btn btn-primary join-item rounded-r-full">{studentStates.editMode ? "Update" : "Add"} Student</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StudentForm