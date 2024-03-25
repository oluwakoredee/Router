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
    job_name: "Software Engineer",
    description:
      "We are seeking a skilled software engineer to join our development team. The ideal candidate will have experience with full-stack development, strong problem-solving skills, and the ability to work in a fast-paced environment.",
    salary: "$80,000 - $110,000 per year",
  },
  {
    job_name: "Marketing Manager",
    description:
      "We are looking for an experienced marketing manager to develop and implement marketing strategies to promote our products and services. The candidate should have a proven track record of successful marketing campaigns and excellent communication skills.",
    salary: "$70,000 - $90,000 per year",
  },
  {
    job_name: "Graphic Designer",
    description:
      "We are seeking a talented graphic designer to create engaging and on-brand graphics for a variety of media. The ideal candidate should be proficient in Adobe Creative Suite and have a strong portfolio showcasing their work.",
    salary: "$50,000 - $65,000 per year",
  },
  {
    job_name: "Data Analyst",
    description:
      "We are looking for a detail-oriented data analyst to interpret complex data sets and turn them into actionable insights. The candidate should have strong analytical skills and proficiency in data analysis tools such as SQL and Excel.",
    salary: "$60,000 - $80,000 per year",
  },
  {
    job_name: "Customer Service Representative",
    description:
      "We are hiring customer service representatives to provide excellent service to our customers. The ideal candidate should have strong communication skills, be customer-focused, and able to handle inquiries and complaints effectively.",
    salary: "$30,000 - $40,000 per year",
  },
];

const Career = () => {
  const navigate = useNavigate();
  return (
    <div
      className="p-[24px] flex flex-wrap gap-[48px]"
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
          onClick={() => navigate(`/career/preview-job/${o.job_name}`)}
          // style={{
          //   borderRadius: "10px",
          //   border: "solid #eaeaea",
          //   height: "100px",
          //   padding: "48px 24px",
          //   cursor: "pointer",
          //   width: "300px",

          // }}
          className=" rounded border-solid bg-[#eaeaea] h-[100px] px-[48px] py-[24px] cursor-pointer w-[300px]"
        >
          <p>{o.job_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Career;
