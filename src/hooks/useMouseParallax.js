import { useState, useEffect } from 'react';

export function useMouseParallax(sensitivity = 1) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse coordinates from -1 to 1 relative to viewport center
      targetX = (event.clientX / innerWidth - 0.5) * 2;
      targetY = (event.clientY / innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Smooth linear interpolation (lerp) for fluid motion
      currentX += (targetX - currentX) * 0.08 * sensitivity;
      currentY += (targetY - currentY) * 0.08 * sensitivity;

      setMousePosition({
        x: currentX,
        y: currentY,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sensitivity]);

  return mousePosition;
}
