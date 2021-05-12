import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Intro} />
        <Route path='/contact' component={ContactMe} />
        <Route path='/projects' component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
