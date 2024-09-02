import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string; // Здесь вы явно говорите, что children должен быть строкой
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

//& React.ComponentProps<'button'>; — это объединение (&) вашего типа ButtonProps с типами, которые принимает обычный HTML-элемент <button>. Это означает, что ваш CustomButton может принимать все те же пропсы, что и обычная кнопка, такие как onClick, disabled, type, и т.д.

//variant используется для создания динамического класса с помощью шаблонного литерала: className={class-with-${variant}}.
// Остальные пропсы (...rest) передаются непосредственно в HTML-элемент <button> с помощью {...rest}. Это позволяет вам, например, передать такие пропсы, как onClick, disabled, или type, и они будут корректно применены к кнопке.

// Если бы вы написали тип ButtonProps без использования Omit, То получилось бы, что children определён дважды:
// Как строка (children: string).
// Как любой допустимый тип для button, включающий другие возможные типы (ReactNode) из React.ComponentProps<'button'>.

//Omit<React.ComponentProps<'button'>, 'children'> берёт все пропсы, которые доступны для HTML-кнопки, кроме children.
//Затем вы объединяете это с собственными пропсами ButtonProps, где вы явно указываете, что children должен быть только строкой.