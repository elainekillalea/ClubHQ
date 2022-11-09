import { useRef } from 'react';

import Card from '../ui/Card';
import MainNav from '../layout/MainNav';
import styles from '../../styles/Home.module.css';
//import styles from './AddNewStudent.module.css';

function AddNewStudent(props) {
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

        props.onAddStudent(studentData);
    };

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.formItem}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            ref={nameRef}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Age</label>
                        <input
                            type="text"
                            name="age"
                            ref={ageRef}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Grade</label>
                        <input
                            type="text"
                            name="grade"
                            ref={gradeRef}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Add student</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewStudent;