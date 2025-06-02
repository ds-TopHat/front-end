import { themeVars } from '@styles/theme.css';
import { IcMainRect, IcMypage } from '@components/icons';
import * as styles from '@components/header/header.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <IcMainRect width={100} height={36} />
      <IcMypage width={36} height={36} color={themeVars.color.point} />
    </div>
  );
};

export default Header;
