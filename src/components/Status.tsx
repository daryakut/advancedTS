import React from "react";

type Props = {
  status: "loading" | "success" | "error";
};

const Status = (props: Props) => {
  let message;
  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "error";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
