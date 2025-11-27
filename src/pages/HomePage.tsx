import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
    </motion.div>
  );
}
