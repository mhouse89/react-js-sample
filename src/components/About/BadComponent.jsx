import React from "react";

const MyComponent = (data) => {
  const untrustedAjaxRes = document.write(
    window.location.replace("https://www.w3schools.com")
  );

  const badRegex = /^((ab)*)+$/;
  document.getElementById("my-test-id").innerHTML = untrustedAjaxRes;

  let obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

  return (
    <div>
      <p>
        Today&apos;s weather information reads: <br />
        <div id="my-test-id"></div>
      </p>

      <script>window.__STATE__ = ${JSON.stringify({ data })}</script>
      {badRegex}
    </div>
  );
};
export default MyComponent;
