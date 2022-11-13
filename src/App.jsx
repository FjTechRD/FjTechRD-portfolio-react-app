import "./styles/App.css";
import "./styles/var.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import MyServices from "./pages/MyServices";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainNavMenu from "./shared/MainNavMenu";
import SideInformationDesktop from "./shared/SideInformationDesktop";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <main className="App">
      <SideInformationDesktop t={t} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/services" element={<MyServices t={t} />} />
          <Route path="/education" element={<Education t={t} />} />
          <Route path="/projects" element={<Projects t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
        </Route>
      </Routes>
      <MainNavMenu i18n={i18n} />
    </main>
  );
}

export default App;
