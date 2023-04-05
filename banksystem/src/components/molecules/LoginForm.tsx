import React from "react";
import Title from "../atoms/Title";
import FormInput from "../atoms/FormInput";
import SubmitButton from "../atoms/SubmitButton";
export default function LoginForm() {
  return (
    <div>
      <Title size="h2" text="Formulario de Login" />
      <form>
        <FormInput inputType="email" placeholder="Email" />
        <FormInput inputType="password" placeholder="senha" />
        <SubmitButton text="Confirmar" onSubmit={() => {}} />
      </form>
    </div>
  );
}
