import StudentCard from './StudentCard';
import classes from '../../styles/Home.module.css';
import Card from '../ui/Card';

function StudentList({students}) {
    return(
        <div className={classes.content}>
            <Card>
                <div className={classes.container}>
                    {students.length === 0 ? (
                        <h2>No added students</h2>
                    ) : (
                        <ul>
                            {students.map((student, i) => (
                                <StudentCard 
                                    student={student} 
                                    key={i} 
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </Card>
        </div>
    );
}

export default StudentList;