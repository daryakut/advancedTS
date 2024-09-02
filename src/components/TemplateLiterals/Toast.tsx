/**
 * Position prop can be one of
 * 'left-center' | 'left-top' | 'left-bottom' | 'center' | 'center-top' | 'center-bottom' | 'right-center' | 'right-top' | 'right-bottom'
 */

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
//position:
// Это строковый литерал типа, который комбинирует значения из HorizontalPosition и VerticalPosition с использованием шаблонных литералов.
// В этом типе используется условие с Exclude. Это утилита TypeScript, которая позволяет исключить определённое значение из объединённого типа.
// В данном случае, из типа ${HorizontalPosition}-${VerticalPosition} исключается комбинация 'center-center', так как она считается ненужной или некорректной.
// Таким образом, position может быть одной из комбинаций HorizontalPosition и VerticalPosition, за исключением 'center-center'. Однако 'center' (без привязки к позиции по горизонтали и вертикали) остаётся допустимым значением.