import React from "react";
import { PersonProps } from "./types/Person.type";

// type Props = {
//   name: {
//     firstname: string;
//     lastname: string;
//   };
// };

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstname} {props.name.lastname}
    </div>
  );
};

export default Person;
