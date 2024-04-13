import Aside from "./components/aside";
import NavBar from "./components/navBar";
import Inicio from "./components/inicio";
import Integrantes from "./components/integrantes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listado from "./components/listado";
import Formulario from "./components/formulario";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Aside />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/listado" element={<div><Formulario /> <Listado /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
