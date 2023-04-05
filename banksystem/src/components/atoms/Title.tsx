import React from "react";
interface props {
  text: string;
  size: "h1" | "h2" | "h3";
  color?: string;
}
export default function Title({ text, size, color }: props) {
  function createHtmlElement() {
    switch (size) {
      case "h1":
        return <h1 color={color}>{text}</h1>;
      case "h2":
        return <h2 color={color}>{text}</h2>;
      case "h3":
        return <h3 color={color}>{text}</h3>;
      default:
        return <h1 color={color}>{text}</h1>;
    }
  }
  return <React.Fragment>{createHtmlElement()}</React.Fragment>;
}
