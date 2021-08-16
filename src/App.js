import About from "./sections/about/About";
import Showcase from "./sections/showcase/Showcase";
import Start from "./sections/start/Start";
import Testimonies from "./sections/testimonies/Testimonies";


function App() {
  return (
    <div className="App">
      <Showcase />
      <About />
      <Testimonies />
      <Start />
    </div>
  );
}

export default App;
