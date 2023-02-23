import React from "react";
import Location from "assets/location.svg";
import Department from "assets/department.svg";
import ArrowDown from "assets/arrowDown.svg";
import "./JobTitle.scss";

const JobTitle = ({ job, isOpen, toggleOpen }) => {
  return (
    <div className="job">
      <div className="job-title">
        <div className="job-details">
          <div>
            <span className="job-name">{job.name}</span>
            <button className="job-open-content" onClick={toggleOpen}>
              <img
                className="job-location--icon"
                alt="arrow-down-icon"
                src={ArrowDown}
              />
            </button>
          </div>
          <div className="job-details-location-department">
            <div className="job-location">
              <img
                className="job-location--icon"
                alt="location-icon"
                src={Location}
              />
              <span className="job-location--title">{job.location}</span>
            </div>
            <div className="job-department">
              <img
                className="job-department--icon"
                alt="department-icon"
                src={Department}
              />
              <span className="job-department--title">{job.department}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="job-apply">Apply</button>
      {isOpen && <div className="job-content"></div>}
    </div>
  );
};

export default JobTitle;
