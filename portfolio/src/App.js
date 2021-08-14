import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Products from "./components/pages/product/Products";
import ProductDetail from "./components/pages/product/ProductDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productid" component={ProductDetail} />
      </Router>
    </div>
  );
}

export default App;
