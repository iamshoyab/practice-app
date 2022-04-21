import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Page2 from "./Components/Page2";
// import { Table } from "./Components/Tables/Table";
// import { A } from "./Components/ContextEx/A";
// import { Reducer } from "./Components/Reducer";
// import { UserProvider } from "./Components/ContextEx/userContext";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      Hii
      {/* <Reducer /> */}
      {/* <UserProvider firstName="Antonio"> */}
      {/* <A /> */}
      {/* </UserProvider> */}
      <Button onClick={() => setShow(!show)}>Modal</Button>
      {show && <Page2 show={show} />}
      {/* <Table /> */}
    </div>
  );
}

export default App;
