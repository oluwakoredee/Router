/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
{
  /* the jobId beneath indicates a dynamic route to preview each job 
          shown on career page, it can be destructured in the preview folder using the useParams hook */
}

import React from "react";
import { useNavigate } from "react-router";
import PreviewJob from "./PreviewJob";
import { useSelector } from "react-redux";

export const openings = [];

const Career = () => {
  const navigate = useNavigate();
  const openings = useSelector((state) => state.career.openings);
  console.log(openings)
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
