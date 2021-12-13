import Newsletter from "../components/MailchimpSubscribe";

function Content() {
  return (
    <div id="subscribe" className="container">
      <h1 id="yela">Subscribe to </h1>
      <h1 id="white">our newsletter.</h1>
      <p>
        Get the latest information on how to turn your small business into a
        digital success.
      </p>

      <Newsletter />

      <div className="footer">
        
        <div class="my-64">
          <img
            class="fill-current"
            src="logo_inverse.svg"
            alt="logo"
            style={{
              height: 80,
              marginTop: "2rem",
              marginBottom: "0.01rem",
            }}
          />
        </div>
        <div>
          
        </div>
        <a href="mailto: adam@boomtown.dev">adam@alien.dev</a>
        <a id="white" href="tel:701-404-9151">‪(701) 404-9151</a>
      </div>
      <style jsx>{`
      #yela {
        color: var(--yellow0)
      }
        #white {
          color: white !important;
        }
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: var(--purp2);
          margin-left: 0;
          background: var(--gray0) url("binding-dark.png");
          padding-top: 30vh;
          padding-bottom: 100px;
          box-shadow: 0 20rem 0px 20rem var(--gray1);
        }

        a {
          text-decoration: none;
          color: var(--yellow);
          text-align: right;
          padding-top: 8px;
          font-size: 1.1rem  !important;
          font-family: "Special Elite";
          font-weight: bold;
        }
        a#white {
          color: var(--gray6) !important
        }

        .footer {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .footer h4 {
          padding-bottom: 20px;
        }

        h1 {
          font-size: 5rem;
          display: flex;
          flex-wrap: wrap;
          color: var(--blue2);
        }

        p {
          display: flex;
          text-align: center;
          padding: 1.5em;
          color: var(--lime3);
          font-family: "Special Elite";
          font-weight: bold;
          font-size: 1.2rem;
        }

        #subscribe {
          background-color: var(--gray1);
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
