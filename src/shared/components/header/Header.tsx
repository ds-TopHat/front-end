import { IcMainRect, IcMypage } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { themeVars } from '@styles/theme.css';
import * as styles from '@components/header/header.css';

const Header = () => {
  const goHome = () => navigate(routePath.HOME);
  const goMyPage = () => navigate(routePath.MY);

  const navigate = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <button type="button" aria-label="홈페이지로 이동" onClick={goHome}>
        <IcMainRect width={100} height={36} color={themeVars.color.white000} />
      </button>
      <button type="button" aria-label="마이페이지로 이동" onClick={goMyPage}>
        <IcMypage width={36} height={36} color={themeVars.color.white000} />
      </button>
    </div>
  );
};

export default Header;
