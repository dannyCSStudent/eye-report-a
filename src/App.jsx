import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, SidebarLeft, SidebarRight, Footer } from "./components";
import { Home, Pages } from "./pages";




const App = () => {
 

  return (

    <div>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div>
            <Navbar />
          </div>

          <div className="flex flex-auto justify-between">
            <SidebarLeft />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/pages" element={<Pages />} />
              </Routes>
            </div>
            <SidebarRight />

            
          </div>
          

          <div className="flex flex-col inset-x-0 bottom-0">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
     
  
  )
}

export default App;
