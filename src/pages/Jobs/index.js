import axios from "axios";
import JobTitle from "components/JobTitle/JobTitle";
import React, { useEffect, useState } from "react";
import "./index.scss";

// API GET Route
const serverURL = "http://localhost:3001/api/v1/users/jobs";

const sortByName = (jobs) => {
  jobs.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getUserJobs = async () => {
      const response = await axios.get(serverURL);
      if (response?.status === 200) {
        const jobsData = response?.data?.jobs;
        sortByName(jobsData);
        setJobs(jobsData);
      } else {
        console.log("there has been an error loading jobs.", response?.error);
      }
    };

    getUserJobs();
  }, []);

  return (
    <div className="jobs">
      {jobs?.map((job, index) => (
        <JobTitle job={job} key={`job-${index}-title-${job.name}`} />
      ))}
    </div>
  );
};

export default Jobs;
