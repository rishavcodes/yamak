import React from "react";
import Button from "react-bootstrap/Button";

function topbuttons() {
  return (
    <div
      className="container"
      style={{ paddingLeft: "400px", paddingTop: "50px" }}
    >
      <Button variant="primary" style={{ marginRight: "20px"}}>
        All
      </Button>
      <Button style={{ marginRight: "20px" , background:"#B2E1FF"}}>
        Marketing
      </Button>
      <Button style={{ marginRight: "20px" , background:"#B2E1FF"}}>
        Social Media
      </Button>
      <Button  style={{ marginRight: "20px" , background:"#B2E1FF"}}>
        Blogs
      </Button>
      <Button variant="light">Others</Button>
    </div>
  );
}

export default topbuttons;
