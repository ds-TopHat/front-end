import Footer from '@components/footer/Footer';

import SectionBottom from './components/sectionBottom/SectionBottom';
import SectionTop from './components/sectionTop/SectionTop';
import ScrollText from "./components/scrollText/ScrollText";

const Home = () => {
  return (
    <>
      <ScrollText />
      <SectionTop />
      <SectionBottom />
      <Footer />
    </>
  );
};

export default Home;
