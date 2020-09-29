import React from "react";

const MyComponent = (data) => {
  const untrustedAjaxRes = document.write(
    window.location.replace("https://www.w3schools.com")
  );

  const userInput = <b>Hi React</b>;
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
      data:text/html,{" "}
      <a href="javascript: alert('hello from javascript!')">click me</a>
      <div dangerouslySetInnerHTML={{ __html: userInput }}> </div>
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify({ data })}</script>
    </div>
  );
};
export default MyComponent;
