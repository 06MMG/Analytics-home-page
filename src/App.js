import React from "react";
import Navbar from './components/navbar';
import Hero from "./components/hero";
import Anylytics from "./components/anylytics";
import Newletter from "./components/newletter";
import Card from "./components/card";
import Footer from "./components/footer";


function App() {
  return (
    <div >
 <Navbar />
 <Hero />
 <Anylytics />
 <Newletter />
 <Card />
 <Footer />
    </div>
  );
}

export default App;
