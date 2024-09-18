import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WorkExperience } from "./components/WorkExperience";  // Import WorkExperience

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <WorkExperience />  {/* Add the WorkExperience component here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
