import React, { useState } from "react";
interface props {
  text: string;
  onSubmit: (param?: any) => void;
}
export default function SubmitButton({ text, onSubmit }: props) {
  return (
    <React.Fragment>
      <button onClick={() => onSubmit()}>{text}</button>
    </React.Fragment>
  );
}
