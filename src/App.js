import './app.css'
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import About from "./sections/about/About";
import Showcase from "./sections/showcase/Showcase";
import Start from "./sections/start/Start";
import Testimonies from "./sections/testimonies/Testimonies";


function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <About />
      <Testimonies />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
