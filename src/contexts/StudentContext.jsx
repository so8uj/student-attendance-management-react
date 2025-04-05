import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = (props) => {
    const { children } = props

    // States
    const [students, SetStudents] = useState([
        {
            id: 1,
            name: "Sobuj",
            isPresent: undefined
        }
    ]);

    const [studetnName, setStudetnName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [studentEditId, setStudentEditId] = useState("");

    // Derived States
    const presentStudents = students.filter(student => student.isPresent === true);
    const absentStudents = students.filter(student => student.isPresent === false);

    // Methods
    const handleInput = (e) => {
        setStudetnName(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (studetnName.trim() === "") {
            return alert("Please provide a valid Student Name!");
        }
        editMode ? handleUpdateStudent() : handleAddStudent()
        setStudetnName("")
    }

    const handleAddStudent = () => {
        const newStudent = {
            id: Date.now() + "",
            name: studetnName,
            isPresent: undefined
        }
        SetStudents([...students, newStudent]);
    };


    const handleEditMode = (student) => {
        setStudetnName(student.name)
        setStudentEditId(student.id)
        setEditMode(true);
    };

    const handleUpdateStudent = () => {
        const editedStudent = students.map(student => {
            return student.id === studentEditId ? { ...student, name: studetnName } : student;
        })
        SetStudents([...editedStudent]);
        setEditMode(false);
    };

    const deleteStudent = (studentId) => {
        if (confirm("Are you sure to Delete Student!")) {
            const updatedStudent = students.filter(student => student.id !== studentId)
            SetStudents([...updatedStudent]);
        };
    };

    const handleStudentStatus = (studentId, status) => {
        const getStudent = students.filter(student => student.id === studentId)

        const updateStatus = students.map(student => {
            return student.id === studentId ? { ...student, isPresent: status } : student;
        })
        SetStudents([...updateStatus]);
    }

    const CtxValue = {
        students,
        SetStudents,
        studetnName,
        setStudetnName,
        editMode,
        setEditMode,
        studentEditId,
        setStudentEditId,
        presentStudents,
        absentStudents,
        handleInput,
        handleForm,
        handleAddStudent,
        handleEditMode,
        handleUpdateStudent,
        deleteStudent,
        handleStudentStatus
    }

    return (
        <StudentContext.Provider value={CtxValue}>{children}</StudentContext.Provider>
    )
}

export default StudentProvider;