import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import PortofolioList from "./components/portofolioList/PortofolioList";

const App = () => {
  return <div>
    <Intro />
    <About />
    <PortofolioList />
    <Contact />
    </div>;
};

export default App;