import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isLogin,setLogin] =useState(false);
  return (
    <div className="App">
      <Header />
      {isLogin?<Home/>:<Login setLogin={()=>{setLogin(!isLogin);}} />}
    </div>
  );
}

export default App;
