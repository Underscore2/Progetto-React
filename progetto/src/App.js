import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/helper-class.css";
import Homepage from "./Components/Body/Homepage.js";
import Navbar from "./Components/Header/Navbar.js";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App bgblack">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
