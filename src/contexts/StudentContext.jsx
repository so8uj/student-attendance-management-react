import { createContext, useReducer } from "react";

export const StudentContext = createContext();

const initialStates = {

    students : [
        {
            id: 1,
            name: "Sobuj",
            isPresent: undefined
        }
    ],
    studetnName: "",
    editMode: false,
    studentEditId: ""
    
}

const StudentReducer = (state,action) => {
    switch(action.type){
        case "setInput": {
            return {
                ...state,
                studetnName: action.payload
            }
        }
        case "addStudent": {
            const newStudent = {
                id: Date.now() + "",
                name: state.studetnName,
                isPresent: undefined
            }
            return {
                ...state,
                students: [newStudent, ...state.students],
                studetnName: "",
            }
        }
        case "enableEditMode": {
            return {
                ...state,
                editMode:true,
                studetnName: action.payload.student.name,
                studentEditId: action.payload.student.id
            }
        }
        case "updateStudent": {
            const updatedStudent = state.students.map(student => {
                return student.id === state.studentEditId ? { ...student, name: state.studetnName } : student;
            });
            return {
                ...state,
                students: updatedStudent,
                editMode:false,
                studetnName: "",
            }
        }
        case "deleteStudent": {
            
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload.id),
            }
        }
        case "changeStudentStatus": {
            const updatedStudent = state.students.map(student => {
                return student.id === action.payload.id ? { ...student, isPresent: action.payload.isPresent } : student;
            });
            return {
                ...state,
                students: updatedStudent,
            }
        }
        default : {
            state
        }
    }
}

const StudentProvider = (props) => {
    const { children } = props

    const [studentStates,dispatch] = useReducer(StudentReducer,initialStates)

    const presentStudents = studentStates.students.filter(student => student.isPresent === true);
    const absentStudents = studentStates.students.filter(student => student.isPresent === false);

    const handleInput = (e) => {
        dispatch({type:"setInput",payload:e.target.value})
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (studentStates.studetnName.trim() === "") {
            return alert("Please provide a valid Student Name!");
        }
        studentStates.editMode ? dispatch({type:"updateStudent"}) : dispatch({type:"addStudent"})

    }

    const CtxValue = {
        studentStates,
        dispatch,
        handleInput,
        handleForm,
        presentStudents,
        absentStudents
    }

    return (
        <StudentContext.Provider value={CtxValue}>{children}</StudentContext.Provider>
    )
}

export default StudentProvider;