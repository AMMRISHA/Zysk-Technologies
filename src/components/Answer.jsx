import React from "react";
import { BsDashCircle } from "react-icons/bs"; // Import minus icon
import { GoPlusCircle } from "react-icons/go"; // Import plus icon

import './style.css';
function Answer({ question, answer, isOpen, toggleAnswer }) {
  return (
    <div
      style={{
        margin: "10px 0",
        padding: "10px",
        borderBottom: "1px solid #ddd"
      }}
    >
      {/* Question with clickable toggle */}
      <div
        onClick={toggleAnswer}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Conditional icon: + for closed, - for open */}
      
        <strong style={{fontSize:"clamp(10px , 2vw, 15px)"}}>{question}</strong>
        <span className="dropdownfreq">
          {isOpen ? <BsDashCircle size={20} /> : <GoPlusCircle size={20} />}
        </span>
      </div>

      {/* Answer is displayed only if isOpen is true */}
      {isOpen && <p style={{ margin: "10px auto", color: "#333" , fontSize:"clamp(12px , 2vw, 10px)"}}>{answer}</p>}
    </div>
  );
}

export default Answer;
