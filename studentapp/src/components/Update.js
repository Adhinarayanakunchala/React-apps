import React, { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
  const { id } = useParams();
  const stdId = useRef(0);
  const name = useRef("");
  const course = useRef("");
  const sub1 = useRef("");
  const sub2 = useRef("");
  const sub3 = useRef("");
  const total = useRef(0);
  const average = useRef(0);
  const grade = useRef("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1999/students/${id}`)
      .then((posRes) => {
        const { data } = posRes;
        stdId.current = data.stdId;
        name.current.value = data.name;
        course.current.value = data.course;
        sub1.current.value = data.sub1;
        sub2.current.value = data.sub2;
        sub3.current.value = data.sub3;
        total.current = calculateTotal(data.sub1, data.sub2, data.sub3);
        average.current = calculateAverage(total.current);
        grade.current = calculateGrade(average.current);
      })
      .catch((errRes) => {
        console.log(errRes);
      });
  }, [id]);

  const calculateTotal = (sub1, sub2, sub3) => {
    return parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
  };

  const calculateAverage = (total) => {
    return total / 3;
  };

  const calculateGrade = (average) => {
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
  };

  const Home = () => {
    navigate("/");
  };

  const update = () => {
    axios
      .put(`http://localhost:1999/students/${id}`, {
        stdId: stdId.current,
        name: name.current.value,
        course: course.current.value,
        sub1: sub1.current.value,
        sub2: sub2.current.value,
        sub3: sub3.current.value
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-5  offset-md-3">
      <h2><span style={{ color: "royalblue" }}>U</span>
          <span style={{ color: 'red' }}>p</span>
          <span style={{ color: 'gold' }}>d</span>
          <span style={{ color: 'gray' }}>a</span>
          <span style={{ color: 'blue' }}>t</span>
          <span style={{ color: 'red' }}>e</span>
          <span style={{color:'pink'}}>S</span>
          <span style={{ color: 'gold' }}>t</span>
          <span style={{ color: 'gray' }}>u</span>
          <span style={{ color: 'blue' }}>d</span>
          <span style={{ color: 'red' }}>e</span>
          <span style={{ color: 'yellow' }}>n</span>
          <span style={{color:'pink'}}>t</span></h2>
        <form id="registrationForm">
          <div className="row">
            <div className="col-md-4 offset-md-0">
              <div className="form-group">
                <label htmlFor="stdId"   className="form-label ">Student ID</label>
                <input
                  type="text"
                  ref={stdId}
                  className="form-control"
                  id="stdId"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  ref={name}
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  ref={course}
                  className="form-control"
                  id="course"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sub1">Subject 1</label>
                <input
                  type="text"
                  ref={sub1}
                  className="form-control"
                  id="sub1"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sub2">Subject 2</label>
                <input
                  type="text"
                  ref={sub2}
                  className="form-control"
                  id="sub2"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sub3">Subject 3</label>
                <input
                  type="text"
                  ref={sub3}
                  className="form-control"
                  id="sub3"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="total">Total</label>
                <input
                  type="text"
                  value={total.current}
                  className="form-control bg-light"
                  id="total"
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="average">Average</label>
                <input
                  type="text"
                  value={average.current}
                  className="form-control bg-light"
                  id="average"
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="grade">Grade</label>
                <input
                  type="text"
                  value={grade.current}
                  className="form-control bg-light"
                  id="grade"
                  disabled
                />
              </div>
              <div className="alert alert-success" role="alert" style={{ display: 'none' }}>
                Student updated successfully!
              </div>
              <div className="alert alert-danger" role="alert" style={{ display: 'none' }}>
                Error updating student!
              </div>
              <br></br>
              <button type="button" className="btn btn-primary" onClick={update}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <button type="button" className="btn btn-secondary mt-3" onClick={Home}>
        Home
      </button>
    </>
  );
};

export default UpdateStudent;
