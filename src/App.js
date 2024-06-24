
import './App.css';
import { Homepage } from './Components/Homepage';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Project';
import { Contacts } from './Components/Contact';
import { Footer } from './Components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
