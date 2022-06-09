import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/helper-class.css'
import Homepage from "./Components/Homepage";
import Navbar from './Components/Navbar.js';

function App() {



  return (
    <div className="App bg-black">
        <Navbar />
       <Homepage/>
    </div>
  )
}

export default App;
