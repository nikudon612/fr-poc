import './App.css';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Components/Companies';
import Team from './Components/Team';
import PerspectivesPage from './Components/PerspectivesPage';
import Platforms from './Components/Platforms';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <LoadingScreen /> */}
          <Route path="/" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route path="companies" element={<Companies />} />
          <Route path="team" element={<Team />} />
          <Route path="perspectives" element={<PerspectivesPage />} />
          <Route path="platforms" element={<Platforms />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
