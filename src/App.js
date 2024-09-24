import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MatchWidget from "./Matches";
import Front from "./components/Home/Front";
import TeamRegistrationPage from "./TeamRegistrationPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <MatchWidget />
      <div id="Team registration">
      <TeamRegistrationPage />
      </div>
      <Footer />

    </div>
  );
}

export default App;
