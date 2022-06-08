import Hero from './Components/Hero.js';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/helper-class.css'
import Graphic from "./Components/Graphic";
import List from "./Components/List";
import Answer from "./Components/Answer";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="App bg-black">
       <Hero />
       <Graphic/>
       <List/>
       <Answer/>
        <Cards/>
    </div>
  )
}

export default App;
