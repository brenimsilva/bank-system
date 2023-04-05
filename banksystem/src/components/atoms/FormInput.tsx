import React, { KeyboardEventHandler, LegacyRef, useRef } from "react";

interface props {
  inputType: React.HTMLInputTypeAttribute;
  placeholder?: string;
  text?: string;
  onKeyUp: (text: string) => void;
}

export default function FormInput({
  inputType,
  placeholder,
  text,
  onKeyUp,
}: props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <React.Fragment>
      <input
        type={inputType}
        placeholder={placeholder}
        ref={ref}
        onKeyUp={() => onKeyUp(ref.current!.value)}
      >
        {text}
      </input>
    </React.Fragment>
  );
}
