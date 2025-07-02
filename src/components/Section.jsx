import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Section({ id, title, children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const originalText = el.dataset.value;

    const handleMouseEnter = () => {
      let iteration = 0;

      const interval = setInterval(() => {
        el.innerText = originalText
          .split("")
          .map((letter, index) =>
            index < iteration ? originalText[index] : letters[Math.floor(Math.random() * 26)]
          )
          .join("");

        if (iteration >= originalText.length) clearInterval(interval);

        iteration += 1 / 3;
      }, 20);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    return () => el.removeEventListener("mouseenter", handleMouseEnter);
  }, []);

  return (
    <motion.section
      id={id}
      className="max-w-[700px] mx-auto font-mono text-amber-400 pt-3"
      style={{ padding: "0 1rem"}}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {title && (
        <h2
          ref={titleRef}
          data-value={title}
          className="mb-2 font-bold leading-[1.5] text-[1.5rem] cursor-pointer"
        >
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
