// StudentForm.js
import React, { useState } from 'react';
const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [branch, setBranch] = useState('');
  const [languages, setLanguages] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      rollNumber,
      cgpa: parseFloat(cgpa),
      backlogs: parseInt(backlogs),
      branch,
      languages: languages.split(',').map((lang) => lang.trim()),
  })};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Roll Number:</label>
        <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
      </div>
      <div>
        <label>CGPA:</label>
        <input type="number" step="0.01" value={cgpa} onChange={(e) => setCGPA(e.target.value)} required />
      </div>
      <div>
        <label>Backlogs:</label>
        <input type="number" value={backlogs} onChange={(e) => setBacklogs(e.target.value)} required />
      </div>
      <div>
        <label>Branch:</label>
        <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} required />
      </div>
      <div>
        <label>Languages Known (comma-separated):</label>
        <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} required />
      </div>
      <div>
        <button type="submit">Save and next</button>
      </div>
    </form>
  );
};
export default StudentForm;