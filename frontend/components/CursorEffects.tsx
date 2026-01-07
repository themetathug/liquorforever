'use client';

import { useEffect, useState } from 'react';

export default function CursorEffects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Create particles occasionally
      if (Math.random() > 0.7) {
        setParticles((prev) => [
          ...prev.slice(-10), // Keep only last 10 particles
          { id: particleId++, x: e.clientX, y: e.clientY },
        ]);
      }

      // Magnetic effect on hoverable elements
      const hoverable = document.querySelector('.magnetic') as HTMLElement;
      if (hoverable) {
        const rect = hoverable.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const moveX = (distanceX / maxDistance) * 10;
          const moveY = (distanceY / maxDistance) * 10;
          hoverable.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          hoverable.style.transform = 'translate(0, 0)';
        }
      }

      // Spotlight effect
      document.querySelectorAll('.spotlight').forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty('--x', `${x}px`);
        element.style.setProperty('--y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}
    </>
  );
}

