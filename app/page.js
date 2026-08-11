import AboutPage from "./components/About";
import ContactPage from "./components/ContactUS/ContactPage";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/Services/ServicePage";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutPage />
        <ServicesPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </>
  );
}
