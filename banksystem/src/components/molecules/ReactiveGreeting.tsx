import React from "react";
import HighlightText from "../atoms/HighlightText";
import Title from "../atoms/Title";
interface props {
  name: string;
  username: string;
}
export default function ReactiveGreeting({ name, username }: props) {
  return (
    <div>
      <Title color="#210062" size="h3">
        Olá <HighlightText color="#009FBD" text={name} />! seu usuário será:{" "}
        <HighlightText color="#009FBD" text={username} />
      </Title>
    </div>
  );
}
