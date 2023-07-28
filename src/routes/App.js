import { useState, createContext, useEffect } from "react";
import About from "../component/About";
import Explore from "../component/Explore";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState(undefined);

  // useEffect(() => {
  //   setUser({
  //     logged:true,
  //     name: "Fatma",
  //     profile_pic:"images/pfp.jpg",
  //     username:"80yoFatma",
  //     age: 20,
  //     email: "fatemayasser963@gmail.com"
  //   });
  // }, []);

  

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <Navbar/>
        <Hero/>
        <Explore/>
        <About/>
        <Footer/>
      </userContext.Provider>
    </div>
  );
}

export default App;
