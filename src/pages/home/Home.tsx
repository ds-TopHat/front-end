import { textStyle } from '@pages/home/home.css';
import { themeVars } from '@styles/theme.css';

import { IcMypage } from '@/shared/icons';

const Home = () => {
  return (
    <>
      <div className={textStyle}>Home 페이지</div>
      <div>
        2025 덕성여자대학교 컴퓨터공학과 졸업프로젝트 TopHat 팀 프론트엔드
        <IcMypage width={30} height={30} color={`${themeVars.color.point}`} />
      </div>
    </>
  );
};

export default Home;
