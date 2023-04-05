import React from "react";
interface props {
  color: string;
  text: string;
}
export default function HighlightText({ color, text }: props) {
  return (
    <React.Fragment>
      <span style={{ color: color }}>{text}</span>
    </React.Fragment>
  );
}
