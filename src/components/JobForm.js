import React, { useState } from "react";

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({
    id: Date.now(),
    title: "",
    company: "",
    status: "Applied",
    date: "",
  });

  const handleChange = (e) => setJob({ ...job, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.title || !job.company) return alert("All fields are required!");
    addJob(job);
    setJob({ id: Date.now(), title: "", company: "", status: "Applied", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={job.title} onChange={handleChange}  placeholder="Job Title"/>
      <input type="text" name="company" value={job.company} onChange={handleChange} placeholder="Company Name"/>
      <select name="status" value={job.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input type="date" name="date" value={job.date} onChange={handleChange}/>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
