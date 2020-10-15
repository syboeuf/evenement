import React from "react";

const Error = () => (
  <div className="mainbox">
    <div className="err">4</div>
    <div className="err3">0</div>
    <div className="err2">4</div>
    <div className="msg">
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
      existed in the first place?
      <p>
        Let's go{" "}
        <a className="link_error" href="/">
          home
        </a>{" "}
        and try from there.
      </p>
    </div>
  </div>
);

export default Error;
