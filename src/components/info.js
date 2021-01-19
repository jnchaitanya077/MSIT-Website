import React from "react";

function info(props) {
  return (
    <div class="alert alert-info w-100" role="alert" style={styles}>
      A simple info alert—check it out!
    </div>
  );
}

const styles = {
  position: "absolute",
  top: "0",
};

export default info;
