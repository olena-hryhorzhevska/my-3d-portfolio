// SectionWrapper.js
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

export const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  }

  // Добавьте это:
  HOC.displayName = `SectionWrapper(${Component.name})`;
  return HOC;
};

export default SectionWrapper;
