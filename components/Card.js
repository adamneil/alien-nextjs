import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <style jsx>{`
        .card {
          border: 1px solid var(--green1);
          background-color: var(--gray0);
          padding: 1.4rem;
          border-radius: 10px;
          text-align: left;
          flex: 1 1;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease, border 0.2s ease;
        }
        h3 {
          font-weight: bold;
          font-size: 1.125em;
          line-height: 1.4;
          letter-spacing: 0.1rem;
          padding-bottom: 0.4rem;
          font-family: "Finger Paint";
          color: var(--lime3);
        }
        p {
          font-size: 1.1rem;
          flex: 1 1;
          color: var(--gray5)
          ;
          font-family: 'Special Elite';
        }
      `}</style>
    </div>
  );
};

export default Card;
