import { useState, createContext, useEffect } from "react";
import { Home } from "../pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Accounts from "../pages/auth/Accounts";
import { Layout } from "../component/layout/Layout";


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
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Accounts/>}/> 
    </Routes>
    </Layout>
  );
}

export default App;
