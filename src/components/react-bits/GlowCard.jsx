import { useRef } from 'react';

export default function GlowCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    // Calculate angle based on mouse position
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360; // Normalize angle between 0 and 360 degrees

    // Update the custom property --start dynamically
    card.style.setProperty('--start', angle);
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="testcard rounded-xl p-6 h-full flex flex-col justify-between bg-indigo-900/30 backdrop-blur-2xl transition duration-300"
    >
      {children}
    </div>
  );
}
