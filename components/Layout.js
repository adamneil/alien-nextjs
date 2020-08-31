import Head from "next/head";
import Header from "./Header";
const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>Boomtown Web Dev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <Header />
    <div className="Content">{props.children}</div>
    <style jsx global>{`
      :root {
        --gray1: #333333;
        --gray2: #4f4f4f;
        --gray3: #828282;
        --gray4: #bdbdbd;
        --gray5: #e0e0e0;
        --gray6: #f2f2f2;
        --red: #eb5757;
        --orange: #f2994a;
        --yellow: #f2c94c;
        --green1: #219653;
        --green2: #27ae60;
        --green3: #6fcf97;
        --blue1: #2f80ed;
        --blue2: #2d9cdb;
        --blue3: #56ccf2;
        --purp1: #72f;
        --purp2: #61b;
        --highlight-background: linear-gradient(145deg, #72f, #c1b);
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      // html,
      // body,
      // #__next {
      //   height: 100%;
      //   width: 100%;
      // }

      body {
        margin: 0px auto;
        letter-spacing: -0.02em;

        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Inter";
        font-weight: 800;
        letter-spacing: -0.07em;
      }
      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .progress-icon {
        position: fixed;
        top: 90px;
        right: 20px;
        width: 120px;
        height: 120px;
      }
    `}</style>
  </div>
);

export default Layout;
