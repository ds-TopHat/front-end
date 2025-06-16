import { motion, useScroll, useTransform } from 'framer-motion';
import {
  IcMainGroup,
  IcMainChat1,
  IcMainChat2,
  IcMainChat3,
} from '@components/icons';
import * as styles from '@pages/home/components/sectionTop/sectionTop.css';

const START_SCROLL = 640;
const GAP = 150;
const EXIT_OFFSET = 400;
const END_SCROLL = START_SCROLL + GAP * 3 + EXIT_OFFSET;

const SectionTop = () => {
  const { scrollY } = useScroll();

  // Group 초기 등장 ~ 사라짐
  const groupOpacity = useTransform(
    scrollY,
    [START_SCROLL, START_SCROLL + 100],
    [1, 0],
  );

  const groupTranslateY = useTransform(
    scrollY,
    [START_SCROLL, START_SCROLL + 100],
    [0, -100], 
  );

  // Chat 1
  const opacity1 = useTransform(
    scrollY,
    [START_SCROLL + 50, START_SCROLL + GAP + 50],
    [0, 1],
  );
  const translateY1 = useTransform(
    scrollY,
    [START_SCROLL + 50, START_SCROLL + GAP + 50],
    [40, 0],
  );

  // Chat 2
  const opacity2 = useTransform(
    scrollY,
    [START_SCROLL + GAP + 50, START_SCROLL + GAP * 2 + 50],
    [0, 1],
  );
  const translateY2 = useTransform(
    scrollY,
    [START_SCROLL + GAP + 50, START_SCROLL + GAP * 2 + 50],
    [40, 0],
  );

  // Chat 3
  const opacity3 = useTransform(
    scrollY,
    [START_SCROLL + GAP * 2 + 50, START_SCROLL + GAP * 3 + 50],
    [0, 1],
  );
  const translateY3 = useTransform(
    scrollY,
    [START_SCROLL + GAP * 2 + 50, START_SCROLL + GAP * 3 + 50],
    [40, 0],
  );

  // 공통 Fade-out
  const finalOpacity = useTransform(
    scrollY,
    [END_SCROLL, END_SCROLL + 300],
    [1, 0],
  );

  const finalTranslateY = useTransform(
    scrollY,
    [END_SCROLL, END_SCROLL + 300],
    [0, -50],
  );

  // Group
  const combinedGroupOpacity = useTransform(
    [groupOpacity, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedGroupTranslateY = useTransform(
    [groupTranslateY, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  // Chat 1
  const combinedOpacity1 = useTransform(
    [opacity1, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedTranslateY1 = useTransform(
    [translateY1, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  // Chat 2
  const combinedOpacity2 = useTransform(
    [opacity2, finalOpacity],
    ([a, b]) => (a as number) * (b as number),
  );
  const combinedTranslateY2 = useTransform(
    [translateY2, finalTranslateY],
    ([a, b]) => (a as number) + (b as number),
  );

  // Chat 3
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
          opacity: combinedGroupOpacity,
          y: combinedGroupTranslateY,
          position: 'fixed',
          top: '24rem',
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

      {/* Chat 1 */}
      <motion.div
        style={{
          opacity: combinedOpacity1,
          y: combinedTranslateY1,
          position: 'fixed',
          top: '35rem',
          paddingLeft: '3rem',
          width: '100%',
        }}
      >
        <IcMainChat1 width={168} height={68} />
      </motion.div>

      {/* Chat 2 */}
      <motion.div
        style={{
          opacity: combinedOpacity2,
          y: combinedTranslateY2,
          position: 'fixed',
          top: `calc(35rem + 1.8rem + 6rem)`,
          paddingLeft: '3rem',
          width: '100%',
        }}
      >
        <IcMainChat2 width={168} height={164} />
      </motion.div>

      {/* Chat 3 */}
      <motion.div
        style={{
          opacity: combinedOpacity3,
          y: combinedTranslateY3,
          position: 'fixed',
          top: `calc(35rem + 3.6rem + 21.8rem)`,
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
