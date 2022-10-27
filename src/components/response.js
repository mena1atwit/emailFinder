import React from "react";
import "./response.css";

const Response = ({ info, cName }) => {
  const body = [
    `Hi ${info.name}, \n I recently applied for a software engineering intern position at ${cName}. I understand you must be busy with other applicants, but I wanted to do a quick follow-up on my application. 
    If you have the time, I’d love the chance to discuss how my experience as a software engineering intern at Centric Software would help the team through 
`,
  ];
  return (
    <div className="container">
      <div className="main">{info.email}</div>
      <div className="email">
        <button
          onClick={() =>
            window.open(`mailto:${info.email}?subject=wewe&body=${body}`)
          }
        >
          MAIL
        </button>
      </div>
    </div>
  );
};

export default Response;
