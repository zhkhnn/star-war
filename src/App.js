import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer"

export default function App() {
  const [fan, setFan] = useState("");
  const [mode, setMode]= useState("dark")

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleModeChange = () =>{
      setMode((mode==='dark') ? "light":"dark");
  }

  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleModeChange }}>
      <Header fan={fan} mode={mode} />
      <hr />
      <Content mode={mode}/>
      <Footer/>
    </DefaultContext.Provider>
  );
}