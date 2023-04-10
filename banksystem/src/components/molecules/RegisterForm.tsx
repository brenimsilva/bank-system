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

interface formInputs {
  name: string;
  username: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
  cpf: string;
}

export default function RegisterForm({ onGetNameAndUsername }: props) {
  const [formInputs, setFormInputs] = useState<formInputs>({
    cpf: "",
    email: "",
    emailConfirm: "",
    name: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });
  function onNameKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, name: text };
    });
  }

  function onUsernameKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, username: text };
    });
  }

  function onEmailKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, email: text };
    });
  }

  function onEmailConfirmKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, emailConfirm: text };
    });
  }

  function onPasswordKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, password: text };
    });
  }

  function onPasswordConfirmKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, passwordConfirm: text };
    });
  }

  function onCPFKeyUp(text: string) {
    setFormInputs((prev) => {
      return { ...prev, cpf: text };
    });
  }

  useEffect(() => {
    onGetNameAndUsername({
      name: formInputs.name,
      username: formInputs.username,
    });
  }, [formInputs]);

  return (
    <div>
      <form>
        <Title size="h2">Formulario de Registro</Title>
        <FormInput placeholder="Nome" inputType="text" onKeyUp={onNameKeyUp} />
        <FormInput
          placeholder="Usuario"
          inputType="text"
          onKeyUp={onUsernameKeyUp}
        />
        <FormInput
          placeholder="Email"
          inputType="email"
          onKeyUp={onEmailKeyUp}
        />
        <FormInput
          placeholder="Confirmar Email"
          inputType="email"
          onKeyUp={onEmailConfirmKeyUp}
        />
        <FormInput
          placeholder="Senha"
          inputType="password"
          onKeyUp={onPasswordKeyUp}
        />
        <FormInput
          placeholder="Confirmar Senha"
          inputType="password"
          onKeyUp={onPasswordConfirmKeyUp}
        />
        <FormInput inputType="text" placeholder="CPF" onKeyUp={onCPFKeyUp} />
        <SubmitButton text="Cadastrar" onSubmit={() => {}} />
      </form>
    </div>
  );
}
