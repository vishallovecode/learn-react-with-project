import { useEffect, useRef } from "react";
import Input from "./child";

const ParentForwardRef = () => {
  const inputRef = useRef(null);
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  return (
    <div>
      <Input focus={focus} ref={inputRef} />
      <button onClick={focus}>fOCUSED</button>
    </div>
  );
};

export default ParentForwardRef;
