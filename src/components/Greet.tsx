import React from "react";

interface Props {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

const Greet = ({ name, messageCount = 0, isLoggedIn }: Props) => {
  return (
    <div>
      {isLoggedIn
        ? `Hello ${name}, you have ${messageCount} messages`
        : "Hello, you"}
    </div>
  );
};

export default Greet;
