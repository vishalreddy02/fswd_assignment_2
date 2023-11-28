// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css';
const App = () => {
  const [students, setStudents] = useState([]);
  const [minCGPA, setMinCGPA] = useState(0);
  const [eligibleStudents, setEligibleStudents] = useState([]);
  const addStudent = (student) => {
    setStudents([...students, student]);
  };
  const handleFilter = () => {
    const filtered = students.filter(
      (student) => student.cgpa >= minCGPA && student.backlogs === 0
    );
    setEligibleStudents(filtered);
  };
  const showAllDetails = eligibleStudents.length === 0;
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Student Details</h1>
                <StudentForm onSubmit={addStudent} />
                <div className="button-container">
                  <Link to="/view" className="button-link">View Students</Link>
                </div>
              </>
            }
          />
          <Route
            path="/view"
            element={
              <>
                <StudentList students={students} showAllDetails={showAllDetails} />
                <div>
                  <br></br><label>Enter Minimum CGPA:</label>
                  <input
                    type="number"
                    step="0.01"
                    value={minCGPA}
                    onChange={(e) => setMinCGPA(parseFloat(e.target.value))}
                  />
                  <button onClick={handleFilter}>Submit</button>
                </div>
                {eligibleStudents.length > 0 && (
                  <div className="students">
                    <h2>Eligible Students</h2>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th style={{ whiteSpace: 'nowrap' }}>Roll Number</th>
                          <th>CGPA</th>
                          <th style={{ whiteSpace: 'nowrap' }}>Languages Known</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eligibleStudents.map((student, index) => (
                          <tr key={index}>
                            <td style={{ whiteSpace: 'nowrap' }}>{student.name}</td>
                            <td>{student.rollNumber}</td>
                            <td>{student.cgpa}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>{student.languages.join(', ')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;