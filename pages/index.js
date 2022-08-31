import Drawer from "../components/Drawer";
import Flex from "../components/Flex";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Hero from "../components/Hero";
import img3 from "../assets/3.webp";
import img1 from "../assets/1.jpg";
import uiDesign from "../assets/uiDesign.jpg";
import graphicDesign from "../assets/graphicDesign.webp";
import MetaHead from "../components/Meta";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <Hero />
      <div id="what-we-do" />
      <Flex
        title="Website &amp; Web App Development"
        content="We create SEO-friendly websites and web apps to increase traffic and exposure for your brand. So, we've got you covered whether you need a website for a school, a business, or an event. We are only a few clicks away."
        subtitle="WEB TOOLS"
        imgAlt="image of graphic design"
        img={img3}
      />
      <Flex
        title="Mobile App Development"
        content="Our skilled development team develops cross-platform mobile apps for iOS and Android devices with customized features to fit your needs. All you need to do is come up with a concept, and we'll handle the rest!"
        subtitle="CUSTOM SOFTWARE"
        imgAlt="image of graphic design"
        img={img1}
        reverse
      />
      <Flex
        title="Graphic Design"
        content="We design and print stunning high-quality flyers, business cards, promotional banners, and other graphic materials to help you build an outstading and professional brand identity."
        subtitle="DESIGN &amp; CONTENT"
        imgAlt="image of graphic design"
        img={graphicDesign}
      />
      <Flex
        title="UI &amp; UX Design"
        content="At Vapourware Studios, we have highly skilled UI &amp; UX designers who collaborate to create modern, well-structured, and perfect user interfaces, resulting in immersive experiences."
        subtitle="DESIGN"
        imgAlt="image of UI and UX design"
        img={uiDesign}
        reverse
      />
      <GetStarted />
      <Footer />
      <Drawer />
      <div className="pointer" />
    </>
  );
}
