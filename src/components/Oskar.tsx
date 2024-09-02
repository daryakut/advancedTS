import React from "react";

type Props = {
  children: React.ReactNode;
};

const Oskar = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Oskar;
