/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openings } from "./Career";
import { useSelector } from "react-redux";


const PreviewJob = () => {
  // const params = useParams()
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  const openings = useSelector((state) => state.career.openings);
  const jobOpening = openings.find((opening) => opening.job_name === jobId);

  if (!jobOpening) {
  
    return (
      <div>
        <h4 className="px-3"> No job found</h4> 
        <button className="p-1 ml-2 border-solid bg-slate-500 rounded-md" onClick={() => navigate(-1)}>Go back to store</button>
      </div>
    );
  }

  return (
    <div className="p-2">
      <h3>{jobOpening.job_name}</h3>
      <p>Salary: {jobOpening.salary}</p>
      <p>Job description: {jobOpening.description}</p>
      <button className="p-1 ml-2 border-solid bg-slate-500 rounded-md"  onClick={() => navigate(-1)}>Go back to store</button>
    </div>
  );
};

export default PreviewJob;
