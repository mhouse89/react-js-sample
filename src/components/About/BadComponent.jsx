import React from "react";

const MyComponent = (data) => {
  const untrustedAjaxRes = document.write(
    window.location.replace("https://www.w3schools.com")
  );

  const badRegex = RegExp('^((ab)*)+$')
  const userInput = <b>Hi React</b>
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
      
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
      <script>window.__STATE__ = ${JSON.stringify({ data) })}</script>
      {badRegex.test(data)}
    </div>
  );
};
export default MyComponent;
