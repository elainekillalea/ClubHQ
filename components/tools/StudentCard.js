import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./StudentCard.module.css";
import { Collapse, Grid, Container, Row, Col } from "@nextui-org/react";

export default function StudentCard({ student }) {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Delete post
  const deleteStudent = async (studentId) => {
    setDeleting(true);

    try {
      await fetch("/api/students", {
        method: "DELETE",
        body: studentId,
      });
      setDeleting(false);
      return router.push(router.asPath);
    } catch (error) {
      return setDeleting(false);
    }
  };
  return (
    <Container fluid wrap>
      <Collapse.Group splitted>
        <Collapse title={student.name}>
          <div className={styles.flexContain}>
            <div className={styles.flexRow}>
              <div className={styles.flexHead}>
                <p>Age:</p>
              </div>
              <div className={styles.flexInfo}>
                <p>{student.age}</p>
              </div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.flexHead}>
                <p>Grade:</p>
              </div>
              <div className={styles.flexInfo}>
                <p>{student.grade}</p>
              </div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.flexHead}>
                <small>Date Created:</small>
              </div>
              <div className={styles.flexInfo}>
                <small>
                  {new Date(student.createdAt).toLocaleDateString()}
                </small>
              </div>
            </div>
            <button type="button" onClick={() => deleteStudent(student["_id"])}>
              {deleting ? "Deleting" : "Delete"}
            </button>
          </div>
        </Collapse>
      </Collapse.Group>
    </Container>
  );
}
