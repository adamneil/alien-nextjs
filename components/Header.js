const Header = () => (
  <header>
    <a className="logo" href="/" style={{ textDecoration: "none" }}>
      <img src="logo.svg" alt="logo" style={{ height: 50 }} />
    </a>

    <style jsx>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        header {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: var(--gray0) url("binding-dark.png");
          padding: 30px 20%;
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
