// StudentList.js
import React from 'react';
const StudentList = ({ students, showAllDetails }) => {
  return (
    <div className="students">
      <h2>All Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ whiteSpace: 'nowrap' }}>Roll Number</th>
            <th>CGPA</th>
            <th>Backlogs</th>
            <th>Branch</th>
            <th style={{ whiteSpace: 'nowrap' }}>Languages Known</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={{ whiteSpace: 'nowrap' }}>{student.name}</td>
              <td >{student.rollNumber}</td>
              <td>{student.cgpa}</td>
              <td>{student.backlogs}</td>
              <td>{student.branch}</td>
              <td style={{ whiteSpace: 'nowrap' }}>{student.languages.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentList;