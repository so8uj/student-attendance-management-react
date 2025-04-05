import AllStudents from "./AllStudents"
import PresentedStudents from "./PresentedStudents"
import AbsentStudents from "./AbsentStudents"
const StudentsWrapper = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row mt-9 gap-4">

                <AllStudents />
                <PresentedStudents />
                <AbsentStudents />

            </div>
        </>
    )
}

export default StudentsWrapper