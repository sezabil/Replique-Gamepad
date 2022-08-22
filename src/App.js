import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState(1);

  return (
    <section>
      <div className="App">
        <Router>
          <Header />
          <Home page={page} />
          <Routes>
            <Route path="/page" element={<Home />} />

            {/* <Route path=“/Plateform” element={<Plateform />} /> */}
          </Routes>
          <Footer setPage={setPage} />
        </Router>
      </div>
    </section>
  );
}

export default App;
