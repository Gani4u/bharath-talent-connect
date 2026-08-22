import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Interpolate color from primary deep blue to secondary orange as the user scrolls
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#034E8A", "#F87005"]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        backgroundColor
      }}
    />
  );
}
export { ScrollProgress };
