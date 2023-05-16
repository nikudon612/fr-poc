import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Panel1 from './Components/Panel1';
import Panel2 from './Components/Panel2';
import Panel3 from './Components/Panel3';
import Panel4 from './Components/Panel4';
import Loading from './Components/Loading'
import NewLoading from './Components/NewLoading';
import Advantage from './Components/Advantage';
import Points from './Components/Points';
import Persepctives from './Components/Persepctives';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';



function App() {
  return (
    <div className="App">
      {/* <NewLoading /> */}
      <LoadingScreen />
      <Header />
      <Hero />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Advantage />
      <Points />  
      <Persepctives />
      <Footer />
    </div>
  );
}

export default App;
