import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import '@splidejs/splide/css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import LineOrder from "./pages/LineOrder";
import Accessability from "./pages/Accessability";
import Pircing from "./pages/pircing";
import ManagerAuth from "./pages/AdminAuth";
import PhotosModal from "./components/PhotosModal";
import Footer from "./components/Footer";


function App() {
  const [modalOptions, setModalOptions] = useState({ isOpen: false, currentPhoto: null })
  const location = useLocation()
  return (
    <div className="App">
      <NavBar/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage modalOptions={modalOptions} setModalOptions={setModalOptions} />} />
          <Route path="/home" element={<HomePage modalOptions={modalOptions} setModalOptions={setModalOptions} />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/line-order" element={<LineOrder />} />
          <Route path="/accessability-statement" element={<Accessability />} />
          <Route path="/pircing" element={<Pircing />} />
          <Route path="/AdminAuth" element={<ManagerAuth />} />
        </Routes>
      </AnimatePresence>
      <PhotosModal modalOptions={modalOptions} setModalOptions={setModalOptions}/>
      <Footer />
    </div>
  );
}

export default App;
