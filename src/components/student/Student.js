import { NavLink } from 'react-router-dom';
import styles from './Student.module.scss';
import { Card } from 'react-bootstrap';

const Student = ({ singleStudent }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center row">
      <div className="col-12 col-md-4">
        <p className="fs-3">Student Info</p>
        <Card className={`${styles['student-card']} `}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <span>
                {singleStudent?.firstName} {singleStudent?.lastName}
              </span>
              <span>{singleStudent?.id}</span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {singleStudent?.email}
            </Card.Subtitle>
            <Card.Text className="d-flex justify-content-start mt-4">
              <span>Departments: </span>
              <span className="ms-2 fw-bolder">
                {singleStudent?.departments}
              </span>
            </Card.Text>
            <NavLink className={styles['card-link']} to="/students">
              See all students
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Student;
