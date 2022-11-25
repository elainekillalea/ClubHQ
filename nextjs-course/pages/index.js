import StudentList from '../components/students/StudentList'

const DUMMY_STUDENTS = [
    {
        id: 's1',
        name: 'Jane',
        grade: 'Green',
        address: 'Loughrea, Galway, Ireland'
    },
    {
        id: 's2',
        name: 'Sally',
        grade: 'Blue',
        address: 'Scariff, Clare, Ireland'
    }
];

function HomePage() {
    return <StudentList students={DUMMY_STUDENTS} />
}

export default HomePage;