import { useState } from 'react';
import { useRouter } from 'next/router';

export default function StudentCard({ student }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish post
    const publishPost = async (studentId) => {
        // change publishing state
        setPublishing(true);

        try {
            // Update post
            await fetch('/api/students', {
                method: 'PUT',
                body: studentId,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };
    // Delete post
    const deletePost = async (studentId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/students', {
                method: 'DELETE',
                body: studentId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{student.title}</h3>
                <p>{student.content}</p>
                <small>{new Date(student.createdAt).toLocaleDateString()}</small>
                <br />
                {!student.published ? (
                    <button type="button" onClick={() => publishPost(student._id)}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null}
                <button type="button" onClick={() => deletePost(student['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </li>
        </>
    );
}