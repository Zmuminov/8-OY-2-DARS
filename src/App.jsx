// MY FILE
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
function App() {
  return (
    <>
      {/* WRAPPER START */}
      <div className="Wrapper">
        {/* HEADER START */}
        <Header></Header>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
