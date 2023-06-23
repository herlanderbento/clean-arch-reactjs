import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Details } from "./details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
