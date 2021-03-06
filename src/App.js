import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import About from "./Components/About/About";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
