import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
