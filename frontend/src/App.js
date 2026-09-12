import './App.css';
import Layouts from './pages/Layouts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ai from './pages/Ai';
import Etudiants from './pages/Etudiants';
import Formateurs from './pages/Formateurs';
import Formations from './pages/Formations';
import Sessions from './pages/Sessions';
import Inscription from './pages/Inscription';
import Paiements from './pages/Paiements';
import Présence from './pages/Présence';
import Certificats from './pages/Certificats';
import Notifications from './pages/Notifications';
import Tache from './pages/Tache';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/layout" element={<Layouts />} >
          <Route path="ai" element={<Ai />} />
          
          <Route path="etudiants" element={<Etudiants />} />
          <Route path="formateurs" element={<Formateurs />} />
          <Route path="formations" element={<Formations />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="inscriptions" element={<Inscription />} />
          <Route path="paiements" element={<Paiements />} />
          <Route path="presences" element={<Présence />} />
          <Route path="certificats" element={<Certificats />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="taches" element={<Tache />} />
          <Route path="*" element={<Layouts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
