import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      <TicketControl />
      </Routes>
    </Router>
  );
}

export default App;