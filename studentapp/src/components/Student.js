import React, { useEffect, useState} from 'react';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Student = () => {
 
  const { id } = useParams();
  const [student, setStudent] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1999/students/"+id)
      .then(
        (res) => {
          const { data } = res;
          setStudent(data);
        },
        (err) => {
          console.log(err);
          alert("Id Not Found")
        }
      );
  },[]);
  

  return (
    <>
      <div>
      <h2  className='text text-center'><span style={{ color: 'yellow' }}>S</span>
          <span style={{ color: 'gray' }}>t</span>
          <span style={{ color: 'blue' }}>u</span>
          <span style={{ color: 'red' }}>d</span>
          <span style={{ color: 'gold' }}>e</span>
          <span style={{ color: 'gray' }}>n</span>
          <span style={{ color: 'blue' }}>t</span>
          <span style={{ color: 'red' }}>D</span>
          <span style={{ color: 'yellow' }}>e</span>
          <span style={{ color: 'blue' }}>t</span>
          <span style={{ color: 'red' }}>a</span>
          <span style={{ color: 'gold' }}>i</span>
          <span style={{ color: 'gray' }}>l</span>
          <span style={{ color: 'blue' }}>s</span></h2>
       
              <table border={1} align='center' >
                <tr>
                    <p>ID:{student.stdId}</p>
                    <p>NAME:{student.name}</p>
                    <p>SUBJECT1:{student.sub1}</p>
                    <p>SUBJECT2:{student.sub2}</p>
                    <p>SUBJECT3:{student.sub3}</p>
                    <p>AVERAGE:{student.average}</p>
                    <p>GRADE:{student.grade}</p>
                    <p>TOTAL:{student.total}</p>
                    </tr>
                    <button className='btn btn-secondary'><Link to="/" >Home</Link></button>
              </table>
             
              </div>
        
    </>
  );
};

export default Student;
