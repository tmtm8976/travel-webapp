import About from "./component/About";
import Explore from "./component/Explore";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Explore/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
