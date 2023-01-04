import React, { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  useEffect(() => {
    document.title = "Memory Game"
  })
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

export default App;
