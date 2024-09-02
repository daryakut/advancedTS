import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

interface Props {}

const Box = (props: Props) => {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.primary.main, color: theme.secondary.text }}>Box component</div>;
};

export default Box;
