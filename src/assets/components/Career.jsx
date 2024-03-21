/* eslint-disable no-unused-vars */
{
  /* the jobId beneath indicates a dynamic route to preview each job 
          shown on career page, it can be destructured in the preview folder using the useParams hook */
}

import React from "react";
import { useNavigate } from "react-router";
import PreviewJob from "./PreviewJob";

export const openings = [
  {
    name: "HR",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
  {
    name: "Sales executive",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
  {
    name: "Manager",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
  {
    name: "Receptionist",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
  {
    name: "Developer",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
  {
    name: "EA",
    jobDescription:
      " Career Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptatum?",
  },
];

const Career = () => {
  const navigate = useNavigate();
  return (
    <div
    className="p-24 flex flex-wrap gap-[58px]"
      // style={{
      //   padding: "24px",
      //   display: "flex",
      //   flexWrap: "wrap",
      //   gap: "48px",
      // }}
    >
      {openings.map((o, i) => (
        <div
          key={i}
          onClick={() => navigate(`/career/preview-job/${o.name}`)}
          style={{
            borderRadius: "10px",
            border: "solid #eaeaea",
            height: "100px",
            padding: "48px 24px",
            cursor: "pointer",
            width: "300px",
          }}
        >
          <p>{o.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Career;
