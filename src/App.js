import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Todos, Form, ReactForm } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/form" element={<Form />} />
        <Route path="/react-form" element={<ReactForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
