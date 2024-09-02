import React from "react";
import Login from "./Login";
import { ProfileProps } from './Profile';
interface Props {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; // посольку компонент Profile который мы сююда передаем принимает пропс name нам нужно указать какого типа будут пропсы, испортировать их из профиля
}

const Private = ({ isLoggedIn, component:Component }: Props) => {
  // component с маленькой буквы потому что этот пропс, а :Component это переименование, так как JSX воспринимает тлько с большой буквы
  return isLoggedIn ? <Component name="Daria" /> : <Login />;
};

export default Private;
