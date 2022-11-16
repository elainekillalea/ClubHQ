import { useRef } from 'react';

import Card from '../ui/Card';
import styles from './AddNewStudent.module.css';

function AddNewStudent(students) {
    const nameRef = useRef();
    const ageRef = useRef();
    const gradeRef = useRef();

    function submitHandler (e) {
        e.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        const enteredGrade = gradeRef.current.value;

        const studentData = {
            name: enteredName,
            age: enteredAge,
            grade: enteredGrade,
            createdAt: new Date().toISOString(),
        }

        students.onAddStudent(studentData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        ref={nameRef}
                    />
                </div>
                <div className={styles.control}>
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        ref={ageRef}
                    />
                </div>
                <div className={styles.control}>
                    <label>Grade</label>
                    <input
                        type="text"
                        name="grade"
                        ref={gradeRef}
                    />
                </div>
                <div className={styles.control}>
                    <button type="submit">Add student</button>
                </div>
            </form>
        </Card>
    );
}

export default AddNewStudent;