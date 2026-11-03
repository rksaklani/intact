import BookingProvider from "@/components/BookingProvider";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <BookingProvider>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Doctors />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </BookingProvider>
  );
}
