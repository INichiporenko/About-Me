import AboutMe from "../AboutMe";
import Contacts from "../Contacts";
import Home from "../Home";
import Nav from "../Nav";
import Skills from "../Skills";
import './style.css';


function App(){
  return (
    <div>
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
      <Contacts />
    </div>
  )
}

export default App;
