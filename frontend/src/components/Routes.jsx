import { HashRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Todo from "../pages/Todo";

export default function MyRoutes() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}