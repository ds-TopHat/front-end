import { motion, useScroll, useTransform } from 'framer-motion';
import {
  IcMainGroup,
  IcMainChat1,
  IcMainChat2,
  IcMainChat3,
} from '@components/icons';
import * as styles from '@pages/home/components/sectionTop/sectionTop.css';

const START_SCROLL = 640;
const GAP = 200;
const EXIT_OFFSET = 400;

const SectionTop = () => {
  const { scrollY } = useScroll();
  const END_SCROLL = START_SCROLL + GAP + EXIT_OFFSET + 50;
  const groupExitStart = START_SCROLL;
  const groupExitEnd = groupExitStart + 30;

  const groupOpacity = useTransform(
    scrollY,
    [groupExitStart, groupExitEnd],
    [1, 0],
  );
  const groupTranslateY = useTransform(
    scrollY,
    [groupExitStart, groupExitEnd],
    [0, -30],
  );

  // 각 아이콘의 진입 효과
  const opacity1 = useTransform(
    scrollY,
    [START_SCROLL, START_SCROLL + GAP],
    [0, 1],
  );
  const translateY1 = useTransform(
    scrollY,
    [START_SCROLL, START_SCROLL + GAP],
    [20, 0],
  );

  const opacity2 = useTransform(
    scrollY,
    [START_SCROLL + GAP, START_SCROLL + GAP * 2],
    [0, 1],
  );
  const translateY2 = useTransform(
    scrollY,
    [START_SCROLL + GAP, START_SCROLL + GAP * 2],
    [20, 0],
  );

  const opacity3 = useTransform(
    scrollY,
    [START_SCROLL + GAP * 2, START_SCROLL + GAP * 3],
    [0, 1],
  );
  const translateY3 = useTransform(
    scrollY,
    [START_SCROLL + GAP * 2, START_SCROLL + GAP * 3],
    [20, 0],
  );

  // 사라지는 효과
  const finalOpacity = useTransform(
    scrollY,
    [END_SCROLL, END_SCROLL + 200],
    [1, 0],
  );
  const finalTranslateY = useTransform(
    scrollY,
    [END_SCROLL, END_SCROLL + 200],
    [0, -30],
  );

  // ✅ 각 효과 조합 (Hook 직접 호출로)
  const combinedOpacity1 = useTransform(
    [opacity1, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedTranslateY1 = useTransform(
    [translateY1, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  const combinedOpacity2 = useTransform(
    [opacity2, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedTranslateY2 = useTransform(
    [translateY2, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  const combinedOpacity3 = useTransform(
    [opacity3, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedTranslateY3 = useTransform(
    [translateY3, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  return (
    <div className={styles.sectionTopWrapper}>
      <motion.div
        style={{
          opacity: groupOpacity,
          y: groupTranslateY,
          position: 'fixed',
          top: '40rem',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            maxWidth: '768px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '3rem',
          }}
        >
          <IcMainGroup width={425.5} height={426} />
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: combinedOpacity1,
          translateY: combinedTranslateY1,
          position: 'fixed',
          top: '330px',
          paddingLeft: '3rem',
          width: '100%',
        }}
      >
        <IcMainChat1 width={168} height={68} />
      </motion.div>

      <motion.div
        style={{
          opacity: combinedOpacity2,
          translateY: combinedTranslateY2,
          position: 'fixed',
          top: `calc(330px + 1.8rem + 68px)`,
          paddingLeft: '3rem',
          width: '100%',
        }}
      >
        <IcMainChat2 width={168} height={164} />
      </motion.div>

      <motion.div
        style={{
          opacity: combinedOpacity3,
          translateY: combinedTranslateY3,
          position: 'fixed',
          top: `calc(330px + 3.6rem + 232px)`,
          paddingLeft: '3rem',
          width: '100%',
        }}
      >
        <IcMainChat3 width={223} height={144} />
      </motion.div>
    </div>
  );
};

export default SectionTop;
