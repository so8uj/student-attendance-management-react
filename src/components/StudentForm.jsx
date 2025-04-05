import { useContext } from "react"
import { StudentContext } from "../contexts/StudentContext"

const StudentForm = () => {

    const {
        handleForm,
        studetnName,
        handleInput,
        editMode
    } = useContext(StudentContext)

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-center lg:text-4xl text-white mb-7">Student Attendance Management System </h2>
                <form onSubmit={handleForm}>
                    <div className="join">
                        <input className="input join-item rounded-l-full" placeholder="Student Name"
                            value={studetnName}
                            onChange={handleInput}
                        />
                        <button className="btn btn-primary join-item rounded-r-full">{editMode ? "Update" : "Add"} Student</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StudentForm