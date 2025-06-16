import Footer from '@components/footer/Footer';
import SectionBottom from '@pages/home/components/sectionBottom/SectionBottom';
import SectionTop from '@pages/home/components/sectionTop/SectionTop';
import ScrollText from '@pages/home/components/scrollText/ScrollText';

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
