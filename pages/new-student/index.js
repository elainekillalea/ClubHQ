import NewStudentForm from '../../components/students/NewStudentForm'

function NewStudentPage() {
    function addStudentHandler(enteredStudentData) {

    }

    return <NewStudentForm onAddStudent={addStudentHandler}/>
}

export default NewStudentPage