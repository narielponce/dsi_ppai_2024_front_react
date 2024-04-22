import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { NavBar, Aside, Inicio, Integrantes, Listado } from './components';
import Aside from "./components/aside";
import NavBar from "./components/navBar";
import Inicio from "./components/inicio";
import Integrantes from "./components/integrantes";
import Listado from "./components/listado";

const integrantes = [
  {
      nombre: 'Norberto Ariel Ponce',
      imagen: './assets/img/ariel.jpg',
      legajo: '16467',
      email: 'narielponce@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ariel-ponce-a8b80711'
  },
  {
      nombre: 'Franco Diaz Luna',
      imagen: './assets/img/franco.jpg',
      legajo: '77029',
      email: 'diazlunafrancoe@gmail.com',
      linkedin: 'https://www.linkedin.com/in/francodiazluna'
  },
  {
      nombre: 'Matias Marchetti',
      imagen: './assets/userHombre.png',
      legajo: '70363',
      email: 'mhmarchetti96@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Cecilia Zin',
      imagen: './assets/userMujer.png',
      legajo: '97924',
      email: 'ceciliazin93@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Ezequiel Pereyra',
      imagen: './assets/userHombre.png',
      legajo: '67205',
      email: 'ezeutnfrc@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Mayra Morellato',
      imagen: './assets/userMujer.png',
      legajo: '97325',
      email: 'mayra.m2230@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Zoy Lypnik',
      imagen: './assets/userMujer.png',
      legajo: '86495',
      email: 'lypnik.zoi@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Lucia Duarte',
      imagen: './assets/userMujer.png',
      legajo: '87408',
      email: 'luciaduarte198@gmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Lanfranco Pucheta',
      imagen: './assets/userHombre.png',
      legajo: '86363',
      email: 'lanfranco99@hotmail.com',
      linkedin: 'https://www.linkedin.com'
  },
  {
      nombre: 'Constanza Adami',
      imagen: './assets/userMujer.png',
      legajo: '68699',
      email: 'cotyadami@hotmail.com',
      linkedin: 'https://www.linkedin.com'
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Aside />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/integrantes" element={<Integrantes integrantes={integrantes} />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;