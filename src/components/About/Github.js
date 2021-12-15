import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#f50057",
    grade3: "#fd5270",
    grade2: "#ff7a8b",
    grade1: "#ff9ea7",
    grade0: "#ffdfe1",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="killerkc12"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={25}
      />
    </Row>
  );
}

export default Github;
