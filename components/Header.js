const Header = () => (
  <header>
    <a className="logo" href="/" style={{ textDecoration: "none" }}>
      <img src="logo.svg" alt="logo" style={{ height: 80 }} />
    </a>

    <style jsx>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        img {
          filter: drop-shadow(0px 0px 1px #333333);

        }
        header {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: var(--blue1) url("binding-dark.png");
          padding: 30px 10%;
          vertical-align: middle;
          width: 100%;
        }
        a {
          display: flex;
          height: 20px;
        }
        @media only screen and (max-width: 1024px) {
          a span {
            display: none;
          }
          a {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}
    </style>
  </header>
);

export default Header;
