import React from "react";

const Dashboard = ({ jobs }) => {
  const counts = {
    Applied: jobs.filter((job) => job.status === "Applied").length,
    Interviewing: jobs.filter((job) => job.status === "Interviewing").length,
    Offered: jobs.filter((job) => job.status === "Offered").length,
    Rejected: jobs.filter((job) => job.status === "Rejected").length,
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {Object.entries(counts).map(([status, count]) => (
          <li key={status}>
            {status}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
