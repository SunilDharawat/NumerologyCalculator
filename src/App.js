import React, {useState} from "react";
import Container from "./Container";
import Content from "./Content";
import "./App.css";


function App() {
  const [submit, Setsubmit] = useState({});
  return (
    <div className="App">
      <Container
        data1={(obj) => {
          Setsubmit(obj);
        }}
      />
      <Content data2={submit} />
    </div>
  );
}

export default App;
