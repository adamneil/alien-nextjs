import React, { createRef, useState } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";
const url =
  "https://dev.us17.list-manage.com/subscribe/post?u=3a5e645ed565a3ec7777b01b0&amp;id=eb9ca24795";

const CustomForm = () => {
  const emailRef = createRef(undefined);

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          switch (status) {
            case "sending":
              return <div>Sending....</div>;
            case "success":
              return <div>Subscribed.</div>;
            case "error":
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: message }}
                  style={{ fontSize: "1.3rem", paddingTop: "20px" }}
                />
              );
            default:
              return (
                <form
                  onSubmit={() => {
                    event.preventDefault();

                    subscribe({
                      EMAIL: emailRef.current.value,
                    });
                  }}
                >
                  <input
                    id="email"
                    type="email"
                    ref={emailRef}
                    placeholder="Your Email"
                  />
                  <input id="submit" type="submit" value="Subscribe" />
                </form>
              );
          }
        }}
      />
      <style jsx>
        {`
          div {
            font-size: 1.3rem;
            margin-bottom: auto;
          }

          form {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 20px;
            margin-right: auto;
            margin-left: auto;
          }

          input {
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid var(--gray2);
            border-radius: 4px;
            margin-right: 2rem;
            margin-left: auto;
            background-color: var(--green1);
          }

          input:focus {
            outline: none;
          }

          input,
          text {
            color: var(--gray3);
            font-size: 1rem;
          }
          #submit {
            background-color: var(--gray4);
            color: var(--green1);
            padding: 14px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: auto;
            margin-left: auto;
          }
          #submit:hover {
            background-color: var(--green2);
            color: var(--gray2);
          }

          #email {
            background-color: var(--gray2);
            color: var(--gray3);
          }
          @media and (max-width: 1024px) {
            form {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};
export default CustomForm;
