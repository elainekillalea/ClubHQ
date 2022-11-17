import { useRef } from 'react';
import { useState } from 'react';

import Card from '../ui/Card';
import styles from './AddNewStudent.module.css';

function AddNewStudent() {
    // const nameRef = useRef();
    // const ageRef = useRef();
    // const gradeRef = useRef();

    // function submitHandler (e) {
    //     e.preventDefault();

    //     const enteredName = nameRef.current.value;
    //     const enteredAge = ageRef.current.value;
    //     const enteredGrade = gradeRef.current.value;

    //     const studentData = {
    //         name: enteredName,
    //         age: enteredAge,
    //         grade: enteredGrade,
    //         createdAt: new Date().toISOString(),
    //     }

    //     students.onAddStudent(studentData);

    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!name || !age || !grade) return setError('All fields are required');
    
                // post structure
                let student = {
                    name,
                    age,
                    grade,
                    published: false,
                    createdAt: new Date().toISOString(),
                };
                // save the post
                let response = await fetch('/api/students', {
                    method: 'POST',
                    body: JSON.stringify(student),
                });
        
                // get the data
                let data = await response.json();
        
                if (data.success) {
                    // reset the fields
                    setName('');
                    setAge('');
                    setGrade('');
                    // set the message
                    return setMessage(data.message);
                } else {
                    // set the error
                    return setError(data.message);
                }
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
            {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
            <div className={styles.control}>
                <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                    />
                </div>
                <div className={styles.control}>
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        placeholder="age"
                    />
                </div>
                <div className={styles.control}>
                    <label>Grade</label>
                    <input
                        type="text"
                        name="grade"
                        onChange={(e) => setGrade(e.target.value)}
                        value={grade}
                        placeholder="grade"
                    />
                </div>
                <div className={styles.actions}>
                    <button type="submit">Add student</button>
                </div>
            </form>
        </Card>
    );
}

export default AddNewStudent;