import StudentForm from "./StudentForm"
import StudentsWrapper from "./StudentsWrapper"

const AppWrapper = () => {
    return (
        <>
            <div className="mt-10 container px-3 lg:px-0 mx-auto">
                <StudentForm />
                <StudentsWrapper />
            </div>
        </>
    )
}

export default AppWrapper