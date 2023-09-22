import {
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Newsletter,
  Powered_By,
  Services,
  Team,
  Testimonial,
  Work,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Powered_By />
      <Services />
      <Experience />
      <Team />
      <Work />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}
