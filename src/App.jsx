import { HashRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </HashRouter>
  );
}

