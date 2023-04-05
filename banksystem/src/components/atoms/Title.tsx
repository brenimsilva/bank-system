import React from "react";
interface props {
  size: "h1" | "h2" | "h3";
  children: React.ReactNode | string;
  color?: string;
}
export default function Title({ size, color, children }: props) {
  function createHtmlElement() {
    switch (size) {
      case "h1":
        return <h1 color={color}>{children}</h1>;
      case "h2":
        return <h2 color={color}>{children}</h2>;
      case "h3":
        return <h3 color={color}>{children}</h3>;
      default:
        return <h1 color={color}>{children}</h1>;
    }
  }
  return <React.Fragment>{createHtmlElement()}</React.Fragment>;
}
