import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <style jsx>{`
        .card {
          border: 1px solid var(--gray5);
          padding: 1.4rem;
          border-radius: 10px;
          text-align: left;
          flex: 1 1;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease, border 0.2s ease;
        }
        h3 {
          font-weight: 600;
          font-size: 1.125em;
          line-height: 1.4;
          padding-bottom: 0.4rem
        }
        p {
          font-size: 14px;
          flex: 1 1
        }
      `}</style>
    </div>
  );
};

export default Card