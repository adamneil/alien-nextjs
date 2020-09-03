import Card from './Card';

function Main(props) {
  return (
    <div className="container">
      <h1>Production-ready</h1>
      <h1>websites</h1>
      <p id="title">
        Progressive web applications with bleeding edge features for a
        comprehensive digital marketing solution.
      </p>
      <div className="cards">
        {props.features.map((feature) => {
          return <Card {...feature} key={feature.title}/>;
        })}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          color: var(--gray1);
          padding-top: 10vh;
          margin-left: 0;
          background-color: #fff;
          align-items: center
          

        }
        .cards {
          padding-top: 6rem;
          padding-bottom: 6rem;
          max-width: 1200px;
          margin: auto 0;
          display: grid;
          grid-gap: 4rem;
          gap: 2rem;
          grid-template-columns: repeat(3, 1fr);
        }
        

        h1 {
          font-size: 100px;
          flex: 1 1
        }

        p#title {
          font-size: 20px;
          font-weight: 400;
          width: 45vw;
          line-height: 1.6em;
          padding-top: 1em;
          color: #666666;
          flex: 1 1;
          text-align: center
        }
        @media only screen and (max-width: 1024px) {
          h1 {
            font-size: 3rem;
          }
          p#title {
            width: 60vw;
          }
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }

          p#title {
            font-size: 1.5rem;
            width: 80vw;
          }

          .flex-grid {
            display: block;
          }
          .cards {
            grid-template-columns: repeat(1, 1fr);
          }

        @media only screen and (max-width: 400px) {
          .cards {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
export default Main;
