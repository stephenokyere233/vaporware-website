import Flex from "../components/Flex";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Flex />
      <Flex reverse />
      <Flex />
      <Flex reverse />
      <Footer />
    </>
  );
}
