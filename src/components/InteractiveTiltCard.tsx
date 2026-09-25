import React, { useState, useRef, MouseEvent, ReactNode } from 'react';

interface InteractiveTiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 8
  spotlightColor?: string; // spotlight color, default amber
  onClick?: () => void;
  interactiveGlow?: boolean;
}

export const InteractiveTiltCard: React.FC<InteractiveTiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  spotlightColor = 'rgba(245, 158, 11, 0.14)',
  onClick,
  interactiveGlow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({
      x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
      y: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.4s cubic-bezier(0.2, 1, 0.3, 1)',
      }}
      className={`relative select-none will-change-transform ${className}`}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      {interactiveGlow && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`,
            borderRadius: 'inherit',
          }}
        />
      )}

      {/* Surface Shimmer Highlight following cursor angle */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit z-10 opacity-30 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `linear-gradient(${120 + tilt.y * 5}deg, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            borderRadius: 'inherit',
          }}
        />
      )}

      {/* Actual Content */}
      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  );
};
