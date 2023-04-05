import React, { useEffect, useRef, useState } from "react";
import Title from "../atoms/Title";
import SubmitButton from "../atoms/SubmitButton";
import FormInput from "../atoms/FormInput";

interface getName {
  name: string;
  username: string;
}
interface props {
  onGetNameAndUsername: (greeting: getName) => void;
}

export default function RegisterForm({ onGetNameAndUsername }: props) {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  function onNameKeyUp(text: string) {
    setName(text);
  }

  function onUsernameKeyUp(text: string) {
    setUsername(text);
  }

  useEffect(() => {
    onGetNameAndUsername({ name: name, username: username });
  }, [name, username]);

  return (
    <div>
      <form>
        <Title text="Formulario de Registro" size="h2" />
        <FormInput placeholder="Nome" inputType="text" onKeyUp={onNameKeyUp} />
        <FormInput
          placeholder="Usuario"
          inputType="text"
          onKeyUp={onUsernameKeyUp}
        />
        <FormInput placeholder="Email" inputType="email" onKeyUp={() => {}} />
        <FormInput
          placeholder="Confirmar Email"
          inputType="email"
          onKeyUp={() => {}}
        />
        <FormInput
          placeholder="Senha"
          inputType="password"
          onKeyUp={() => {}}
        />
        <FormInput
          placeholder="Confirmar Senha"
          inputType="password"
          onKeyUp={() => {}}
        />
        <SubmitButton text="Cadastrar" onSubmit={() => {}} />
      </form>
    </div>
  );
}
