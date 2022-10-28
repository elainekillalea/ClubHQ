import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewStudentForm.module.css';

function NewStudentForm(props) {
  const nameInputRef = useRef();
  const gradeInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredGrade = gradeInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const studentData = {
      name: enteredName,
      grade: enteredGrade,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddStudent(studentData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Student Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='grade'>Student Grade</label>
          <input type='text' required id='grade' ref={gradeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Student Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Student</button>
        </div>
      </form>
    </Card>
  );
}

export default NewStudentForm;
