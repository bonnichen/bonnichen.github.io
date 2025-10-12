import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import Computer from "./pages/Components/Computer";
import Projects from "./pages/Projects";
import "./index.css";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <Computer/>
    <MainPage/>
    <AboutMe/>
    <Projects/>
    </div>
  );
}

export default App;
