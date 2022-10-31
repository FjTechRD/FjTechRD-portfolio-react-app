import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import MyServices from "./pages/MyServices";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainNavMenu from "./shared/MainNavMenu";
import SideInformationDesktop from "./shared/SideInformationDesktop";

function App() {
  return (
    <main className="App">
      <SideInformationDesktop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <MainNavMenu />
    </main>
  );
}

export default App;
