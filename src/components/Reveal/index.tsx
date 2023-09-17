import { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

export default function Reveal({ children }: IProps) {
  const [isVisible, setIsVisible] = useState("hidden");
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    console.log(inView);
    if (inView) {
      setIsVisible("visible");
    }
  }, [inView]);

  return (
    <>
      <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={isVisible}
      transition={{ duration: .5, delay: .12 }}
      >
        {children}
        </motion.div>
    </>
  );
}
