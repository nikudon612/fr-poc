import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Panel1 from './Components/Panel1';
import Panel2 from './Components/Panel2';
import Panel3 from './Components/Panel3';
import Panel4 from './Components/Panel4';
import Loading from './Components/Loading'
import NewLoading from './Components/NewLoading';



function App() {
  return (
    <div className="App">
      {/* <NewLoading /> */}
      <Header />
      <Hero />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
    </div>
  );
}

export default App;
