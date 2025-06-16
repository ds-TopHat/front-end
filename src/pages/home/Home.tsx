import Footer from '@components/footer/Footer';
import SectionBottom from '@pages/home/components/sectionBottom/SectionBottom';
import SectionTop from '@pages/home/components/sectionTop/SectionTop';
import ScrollText from '@pages/home/components/scrollText/ScrollText';
import { IcFloatingSolve } from '@components/icons';
import routePath from '@routes/routePath';
import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/home/home.css';
const Home = () => {
  const navigate = useNavigate();

  const handleClickFloating = () => {
    navigate(routePath.SOLVE);
  };

  return (
    <>
      <ScrollText />
      <SectionTop />
      <SectionBottom />
      <Footer />
      <div className={styles.floatingSolveBtn} onClick={handleClickFloating}>
        <IcFloatingSolve width={60} />
      </div>
    </>
  );
};

export default Home;
