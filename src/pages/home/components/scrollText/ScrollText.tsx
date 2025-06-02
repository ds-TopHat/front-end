import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import * as styles from './scrollText.css';

const ScrollText = () => {
  const { scrollY } = useScroll();

const opacityLine2 = useTransform(scrollY, [0, 900], [0.3, 1]);

const opacityLine3 = useTransform(scrollY, [0, 0], [0.3, 0.3]);

const gradientOpacity = useTransform(scrollY, [1800, 2000], [0, 1]);
const inverseGradientOpacity = useTransform(gradientOpacity, (v) => 1 - v);

const combinedOpacityLine2 = useTransform(
  [opacityLine2, inverseGradientOpacity] as MotionValue<number>[],
  ([o1, o2]) => (o1 as number) * (o2 as number)
);

const combinedOpacityLine3 = useTransform(
  [opacityLine3, inverseGradientOpacity] as MotionValue<number>[],
  ([o1, o2]) => (o1 as number) * (o2 as number)
);

  const renderLine = (text: string, baseOpacity: MotionValue<number>) => (
    <div style={{ position: 'relative' }}>
      <motion.p
        className={styles.line}
        style={{ opacity: baseOpacity, position: 'relative' }}
      >
        {text}
      </motion.p>
      <motion.p
        className={`${styles.line} ${styles.gradient}`}
        style={{
          opacity: gradientOpacity,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        {text}
      </motion.p>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {renderLine('수학문제풀이를', inverseGradientOpacity)}
      {renderLine('단계별로 도와주는', combinedOpacityLine2)}
      {renderLine('[ OOOXXX ]', combinedOpacityLine3)}
    </div>
  );
};

export default ScrollText;
