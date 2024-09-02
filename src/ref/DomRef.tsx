import { useRef, useEffect } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // м говорим что он никогда не будет null

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
