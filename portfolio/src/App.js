import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
