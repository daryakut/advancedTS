import React from "react";

type Props = {
  styles: React.CSSProperties;
};

const Container = (props: Props) => {
  return (
    <div style={props.styles}>
      Container component
    </div>
  );
};

export default Container;
