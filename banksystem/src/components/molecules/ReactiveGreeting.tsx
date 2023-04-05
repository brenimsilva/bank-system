import React from "react";
import HighlightText from "../atoms/HighlightText";
interface props {
  name: string;
  username: string;
}
export default function ReactiveGreeting({ name, username }: props) {
  return (
    <div>
      <h3 style={{ color: "#210062" }}>
        Olá <HighlightText color="#009FBD" text={name} />! seu usuário será:{" "}
        <HighlightText color="#009FBD" text={username} />
      </h3>
    </div>
  );
}
