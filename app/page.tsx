import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import VideoFeature from "./components/VideoFeature";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <VideoFeature />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
