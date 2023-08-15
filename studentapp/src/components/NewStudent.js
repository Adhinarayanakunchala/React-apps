import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const stdId = useRef(null);
  const name = useRef(null);
  const course = useRef(null);
  const sub1 = useRef(null);
  const sub2 = useRef(null);
  const sub3 = useRef(null);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const total =
      Number(sub1.current.value) +
      Number(sub2.current.value) +
      Number(sub3.current.value);

    const studentData = {
      stdId: stdId.current.value,
      name: name.current.value,
      course: course.current.value,
      sub1: Number(sub1.current.value),
      sub2: Number(sub2.current.value),
      sub3: Number(sub3.current.value),
      average: total / 3,
      grade: "",
      total: total,
    };

    if (studentData.average >= 90) {
      studentData.grade = "A";
    } else if (studentData.average >= 80) {
      studentData.grade = "B";
    } else if (studentData.average >= 70) {
      studentData.grade = "C";
    } else if (studentData.average >= 60) {
      studentData.grade = "D";
    } else {
      studentData.grade = "F";
    }

    axios
      .post(`http://localhost:1999/students`, studentData)
      .then((response) => {
        console.log(response);
        alert("Data sent successfully");
      })
      .catch((error) => {
        console.log(error);
        alert('No student Id ');
      });
    navigate('/');
  };
  const Home = () => {
    navigate('/');
  }

  return (
    <div className="col-6 bg-gray  container mt-5 text text-center">
      <h2 className="text text-center">
        <span style={{ color: "violet" }}>A</span>
        <span style={{ color: "blueviolet" }}>d</span>
        <span style={{ color: "red" }}>d</span>
        <span style={{ color: "yellow" }}>S</span>
        <span style={{ color: "gray" }}>t</span>
        <span style={{ color: "blue" }}>u</span>
        <span style={{ color: "red" }}>d</span>
        <span style={{ color: "gold" }}>e</span>
        <span style={{ color: "gray" }}>n</span>
        <span style={{ color: "blue" }}>t</span>
      </h2>
      <form className="fo row g-3" onSubmit={handleSubmit}>
        <table className="table table-bordered" align="center">
          <tbody>
            <tr>
              <th>
                <label htmlFor="stdId" className="col-form-label label">
                  ID
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="stdId" name="stdId" ref={stdId} required />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="name" className="col-form-label label">
                  Name
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="name" name="name" ref={name} required />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="course" className="col-form-label label">
                  Course
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="course" name="course" ref={course} require />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="sub1" className="form-label label">
                  Subject 1
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="sub1" name="sub1" ref={sub1} required />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="sub2" className="form-label label">
                  Subject 2
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="sub2" name="sub2" ref={sub2} required />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="sub3" className="form-label label">
                  Subject 3
                </label>
              </th>
              <td>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="sub3" name="sub3" ref={sub3} required />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary  btn-content-center" style={{ align: "center" }}>
            Submit
          </button>
        </div>
      </form>
      <br></br>
      <button className="btn btn-secondary btn" onClick={Home}> Home</button>
    </div>
  );
};

export default NewStudent;

