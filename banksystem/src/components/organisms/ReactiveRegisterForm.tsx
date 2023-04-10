import React, { useState } from "react";
import RegisterForm from "../molecules/RegisterForm";
import ReactiveGreeting from "../molecules/ReactiveGreeting";
interface greetingData {
  name: string;
  username: string;
}
export default function ReactiveRegisterForm() {
  const [greetingData, setGreetingData] = useState<greetingData>({
    name: "",
    username: "",
  });

  function onGetNameAndUsername(greeting: greetingData) {
    setGreetingData({ ...greeting });
  }

  return (
    <div>
      <RegisterForm onGetNameAndUsername={onGetNameAndUsername} />
      <ReactiveGreeting
        name={greetingData.name}
        username={greetingData.username}
      />
    </div>
  );
}
