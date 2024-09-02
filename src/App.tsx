import { log } from "console";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oskar from "./components/Oskar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Container from "./components/Container";
import { Counter } from "./components/state/Counter";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import { Text } from './components/polymorphic/Text';

function App() {
  const personName = {
    firstname: "Daria",
    lastname: "Kutluieva",
  };
  const people = [
    {
      firstname: "Igor",
      lastname: "Kuznetsov",
    },
    {
      firstname: "Tatiana",
      lastname: "Lebedeva",
    },
    {
      firstname: "Alexey",
      lastname: "Vorobyov",
    },
    {
      firstname: "Elena",
      lastname: "Karpova",
    },
  ];

  return (
    <div className="App">
      <UserContextProvider>
        <ThemeContextProvider>
          {/* <Greet name={"Vasya"} messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={people} />
      <Status status="loading" />
      <Heading>my text</Heading>
      <Oskar>
        <Heading>Hello Oskar</Heading>
      </Oskar>

      <Button handleClick={(event, id) => console.log("Click", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />

      <Container styles={{border: "1px solid black", padding: "1rem" }} /> */}

          {/* <Counter /> */}
          {/* <Box /> */}
          {/* <User/> */}
          {/* <Private isLoggedIn={true} component={Profile} /> */}
          {/*          
          <List
            items={[
              { first: "Daria", second: "Kutluieva" },
              { first: "Daria", second: "Kutluieva" },
            ]}
            onClick={(item) => console.log(item)}
          /> */}
          {/* <RandomNumber value={10} isPositive={true} /> */}
          {/* <CustomButton
            variant="primary"
            onClick={() => console.log("Clicked")}
          >
            {"hello"}
          </CustomButton>
          <CustomInput
            type="text"
            placeholder="Enter your name"
            value={""}
            onChange={() => console.log("vasya")}
          /> */}

          <Text as="h1" size="lg">
            Heading
          </Text>
          <Text as="p" size="md">
            Paragraph
          </Text>
          <Text as="label" size="sm" color="secondary">
            Label
          </Text>
        </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
