import { useNavigate } from 'react-router-dom';
import { themeVars } from '@styles/theme.css';
import { IcMainRect, IcMypage } from '@components/icons';
import * as styles from '@components/header/header.css';

import routePath from '@/routes/routePath';

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(routePath.HOME);
  const goMyPage = () => navigate(routePath.MY);

  return (
    <div className={styles.headerWrapper}>
      <button onClick={goHome}>
        <IcMainRect width={100} height={36} color={themeVars.color.white000} />
      </button>

      <button onClick={goMyPage}>
        <IcMypage width={36} height={36} color={themeVars.color.white000} />
      </button>
    </div>
  );
};

export default Header;
