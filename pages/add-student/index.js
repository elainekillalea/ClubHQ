import AddNewStudent from '../../components/students/AddNewStudent'

function NewStudentPage() {
    function addStudentHandler(enteredStudentData) {

    }

    return <AddNewStudent onAddStudent={addStudentHandler}/>
}

export default NewStudentPage