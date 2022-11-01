import StudentDetail from '../../components/students/StudentDetail'

function StudentDetails() {
    return (
        <StudentDetail
            image='https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1-705x705.png'
            id='s1'
            name='Jane '
            grade='Green '
            address='Loughrea, Galway, Ireland '
            description='This is the description of the first meetup as arranged at the address below!' >
        </StudentDetail>
    )
}

export default StudentDetails;