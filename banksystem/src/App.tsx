import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormInput from "./components/atoms/FormInput";
import CustomForm from "./components/molecules/LoginForm";
import LoginForm from "./components/molecules/LoginForm";
import RegisterForm from "./components/molecules/RegisterForm";
import Template1 from "./components/templates/Template1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Template1 />
    </div>
  );
}

export default App;
