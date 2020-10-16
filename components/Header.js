const Header = () => (
  <header>
    <a
      className="logo"
      href="/"
      style={{ color: "#111", textDecoration: "none" }}
    >
      <img src="logo.png" alt="logo" style={{ height: 20 }} />
      <span>Boomtown Development</span>
    </a>

    <style jsx>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        header {
          position: fixed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 30px 10%;
          vertical-align: middle;
          width: 100%;

        }
        a {
          display: flex;
          height: 20px;
        }
        span {
          display: flex;
          align-items: center
          font-family: "Roboto";
          font-weight: bold;
          margin-left: 2vw;
          vertical-align: top;
        }
        @media only screen and (max-width: 1024px) {
          a span {
            display: none
          }
          a {
            margin-left: auto;
            margin-right: auto
          }
        }

      `}
    </style>
  </header>
);

export default Header;
