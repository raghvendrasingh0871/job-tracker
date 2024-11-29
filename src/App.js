import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    console.log("Parsed jobs:", savedJobs);
    setJobs(savedJobs);
  },[]);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, job]);
  const updateJob = (id, updatedJob) => setJobs(jobs.map((job) => (job.id === id ? updatedJob : job)));
  const deleteJob = (id) => setJobs(jobs.filter((job) => job.id !== id));

  const filteredJobs = filter === "All" ? jobs : jobs.filter((job) => job.status === filter);

  return (
    <div className="container">
      <h1>Job Tracker</h1>
      <JobForm addJob={addJob} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Dashboard jobs={jobs} />
      <JobList
        jobs={filteredJobs}
        updateJob={updateJob}
        deleteJob={deleteJob}
      />
    </div>
  );
}

export default App;
