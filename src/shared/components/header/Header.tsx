import { IcMainRect, IcMypage } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { themeVars } from '@styles/theme.css';

import { headerWrapper } from './header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={headerWrapper}>
      <button onClick={() => navigate(routePath.HOME)}>
        <IcMainRect width={100} height={36} color={themeVars.color.white000} />
      </button>
      <button onClick={() => navigate(routePath.MY)}>
        <IcMypage width={36} height={36} color={themeVars.color.white000} />
      </button>
    </div>
  );
};

export default Header;
