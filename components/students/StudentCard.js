import { useState } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/router';

import Card from '../ui/Card';

export default function StudentCard({ student }) {
    
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Delete post
    const deleteStudent = async (studentId) => {
        //change deleting state
        setDeleting(true);
        //deletingRef = true;

        try {
            // Delete post
            await fetch('/api/students', {
                method: 'DELETE',
                body: studentId,
            });

            // reset the deleting state
            setDeleting(false);
            //deletingRef = false;

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            //return deletingRef = false;
            return setDeleting(false);
        }
    };
    return (
            <Card>
                <h3>{student.name}</h3>
                <p>{student.age}</p>
                <p>{student.grade}</p>
                <small>{new Date(student.createdAt).toLocaleDateString()}</small>
                <br />
                <button type="button" onClick={() => deleteStudent(student['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </Card>
    );
}