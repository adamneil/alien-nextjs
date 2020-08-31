import Newsletter from "../components/MailchimpSubscribe";

function Content() {
  return (
    <div className="container">
      <h1>Subscribe to </h1>
      <h1>our newsletter.</h1>
      <p>
        Get the latest information on how to turn your small business into a
        digital success.
      </p>
     

      <Newsletter />

      <div className="footer">
        <h4>Boomtown Development</h4>
        <img src="whitelogo.svg" alt="logo" style={{ height: 20 }} />
        <a href="mailto: adam@boomtown.dev">adam@boomtown.dev</a>
        <a href="tel:701-404-9151">‪(701) 404-9151</a>
      </div> 
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: white;
          margin-left: 0;
          background-color: var(--gray1);
          padding-top: 30vh;
          padding-bottom: 100px

        }
        a {
          text-decoration: none;
          color: white;
          text-align: center;
          padding-top: 10px
        }
        
        .footer {
          display: flex;
          flex-direction: column;
        }

        .footer h4 {
          padding-bottom: 20px
        }

        h1 {
          font-size: 5rem;
          display: flex;
          flex-wrap: wrap;
        }


        p {
          display: flex;
          text-align: center;
          padding: 1.5em;
        }

        @media screen and (max-width: 1024px) {
          container {
            padding-top: 10px;
          }
          h1 {
            font-size: 3rem;
          }
        }
        @media screen and (max-width: 600px) {
          .container {
            padding-top: 10vh; 
          }
          h1 {
            font-size: 2rem;
          }
          

          p#title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
export default Content;
