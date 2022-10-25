import { Routes, Route } from "react-router-dom";
import NavBarGeneral from "./components/NavBarGeneral";
import NotFound from "./pages/NotFound";
import LayaoutRequireAuth from "./components/LayoutRequireAuth";
import HomePacientes from "./pages/Pacientes/HomePacientes";
import HomeMedicos from "./pages/medicos/HomeMedicos";
import HomeGeneral from "./pages/HomeGeneral";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <NavBarGeneral />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<LayaoutRequireAuth />}>
          <Route path="/pacientes/home" element={<HomePacientes />} />
          <Route path="/medicos/home" element={<HomeMedicos />} />
        </Route>

        <Route index element={<HomeGeneral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
