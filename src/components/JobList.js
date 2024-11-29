import React from "react";

const JobList = ({ jobs, updateJob, deleteJob }) => {
  return (
    <div>
      <h2>Job Applications</h2>
      {jobs.length ? (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>Status: {job.status}</p>
                <p>Date: {job.date}</p>
            </div>
            <div>
              <button onClick={() => updateJob(job.id, { ...job, status: "Rejected" })}>
                Reject
              </button>
              <button onClick={() => deleteJob(job.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No jobs to display.</p>
      )}
    </div>
  );
};

export default JobList;
