import React from "react";
import { Name } from "./types/Person.type";

type Props = {
  names: Name[];
};

const PersonList = (props: Props) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <h2 key={index}>
          {name.firstname} {name.lastname}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
