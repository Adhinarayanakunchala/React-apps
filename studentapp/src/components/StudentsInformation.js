import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentsInformation = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get('http://localhost:1999/students')
      .then((response) => {
        const { data } = response;
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:1999/students/${id}`)
      .then((response) => {
        console.log(response);
        fetchStudents();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStudent = (id) => {
    navigate(`/update/${id}`);
  };

  const addStudent = () => {
    navigate("/save");
  };

  const Studentdetails = (id) => {
    navigate("/student/"+id);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text text-center">
          <span style={{ color: 'violet' }}>S</span>
          <span style={{ color: 'blueviolet' }}>t</span>
          <span style={{ color: 'red' }}>u</span>
          <span style={{ color: 'yellow' }}>d</span>
          <span style={{ color: 'gray' }}>e</span>
          <span style={{ color: 'blue' }}>n</span>
          <span style={{ color: 'red' }}>t</span>
          <span style={{ color: 'gold' }}>M</span>
          <span style={{ color: 'gray' }}>a</span>
          <span style={{ color: 'blue' }}>n</span>
          <span style={{ color: 'red' }}>a</span>
          <span style={{ color: 'yellow' }}>g</span>
          <span style={{ color: 'gray' }}>e</span>
          <span style={{ color: 'blue' }}>m</span>
          <span style={{ color: 'red' }}>e</span>
          <span style={{ color: 'yellow' }}>n</span>
          <span style={{ color: 'gray' }}>t</span>
          <span style={{ color: 'blue' }}>S</span>
          <span style={{ color: 'red' }}>y</span>
          <span style={{ color: 'yellow' }}>s</span>
          <span style={{ color: 'gray' }}>t</span>
          <span style={{ color: 'blue' }}>e</span>
          <span style={{ color: 'red' }}>M</span>
        </h1>

        <button className="btn btn-primary ml-2" onClick={addStudent}>
          Add Student
        </button>
        <br></br>
        <table className="table table-striped table-hover table-responsive-mb" border={1}>
          <thead className="text text-warning" style={{ backgroundColor: 'gray' }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Subject1</th>
              <th>Subject2</th>
              <th>Subject3</th>
              <th>Average</th>
              <th>Grade</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.stdId}>
                <td>{student.stdId}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.sub1}</td>
                <td>{student.sub2}</td>
                <td>{student.sub3}</td>
                <td>{student.average}</td>
                <td>{student.grade}</td>
                <td>{student.total}</td>
                <td>
                  <a onClick={() => {Studentdetails(student.stdId)}} className="btn btn-info btn-sm">
                    Show
                  </a>
                </td>
                <td>
                  <a onClick={() => {updateStudent(student.stdId)}} className="btn btn-success btn-sm">
                    Update
                  </a>
                </td>
                <td>
                  <a onClick={() => {deleteStudent(student.stdId)}} className="btn btn-danger btn-sm" >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsInformation;
