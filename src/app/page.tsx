import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import './globals.css'
export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-black">
      <Wrapper>
        <Navbar />
        <Hero />
        <Footer />
      </Wrapper>
    </div>
  );
}
