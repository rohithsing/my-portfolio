
import React, { useEffect, useRef } from 'react';

const MouseTracker: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const satelliteRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  
  const velocity = useRef(0);
  const angle = useRef(0);
  const hoverIntensity = useRef(0); // 0 (normal) to 1 (hovering)
  const isHovering = useRef(false);
  const time = useRef(0);

  // Helper for linear interpolation
  const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      const target = e.target as HTMLElement;
      const interactiveTarget = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') || 
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer';

      isHovering.current = !!interactiveTarget;
    };

    const animate = () => {
      time.current += 0.04;

      // 1. Smoothly update Hover Intensity (Lerp)
      // This allows us to avoid jittery CSS transitions for size/color
      const targetHover = isHovering.current ? 1 : 0;
      hoverIntensity.current = lerp(hoverIntensity.current, targetHover, 0.12);

      // 2. Calculate Velocity & Angle for stretching
      const dx = mousePos.current.x - lastMousePos.current.x;
      const dy = mousePos.current.y - lastMousePos.current.y;
      const currentVelocity = Math.sqrt(dx * dx + dy * dy);
      
      velocity.current = lerp(velocity.current, currentVelocity, 0.15);
      
      if (currentVelocity > 0.5) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Basic angle smoothing to avoid flipping
        angle.current = lerp(angle.current, targetAngle, 0.2);
      }

      lastMousePos.current = { ...mousePos.current };

      // 3. Interpolate Ring Position (The Lag-free follow)
      // Using a slightly higher coefficient for responsiveness
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.22);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.22);

      // 4. Transform Main Ring
      if (ringRef.current) {
        // Stretch based on velocity, but disabled during hover
        const velocityStretch = 1 + (velocity.current / 120) * (1 - hoverIntensity.current);
        const velocitySqueeze = 1 - (velocity.current / 250) * (1 - hoverIntensity.current);
        
        // Size based on hover intensity
        const baseSizeScale = lerp(1, 1.5, hoverIntensity.current);
        
        // Colors
        const borderColor = `rgba(${lerp(59, 52, hoverIntensity.current)}, ${lerp(130, 211, hoverIntensity.current)}, ${lerp(246, 153, hoverIntensity.current)}, ${lerp(0.4, 0.9, hoverIntensity.current)})`;
        const bgColor = `rgba(52, 211, 153, ${hoverIntensity.current * 0.15})`;
        const boxShadow = `0 0 ${lerp(0, 40, hoverIntensity.current)}px rgba(52, 211, 153, ${hoverIntensity.current * 0.4})`;

        ringRef.current.style.transform = `
          translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) 
          translate(-50%, -50%) 
          rotate(${angle.current}deg) 
          scale(${velocityStretch * baseSizeScale}, ${velocitySqueeze * baseSizeScale})
        `;
        ringRef.current.style.borderColor = borderColor;
        ringRef.current.style.backgroundColor = bgColor;
        ringRef.current.style.boxShadow = boxShadow;
        ringRef.current.style.borderWidth = `${lerp(1, 2, hoverIntensity.current)}px`;
      }

      // 5. Transform Satellites (Electron Cloud)
      satelliteRefs.current.forEach((sat, i) => {
        if (!sat) return;
        
        // Normal Orbit
        const orbitRadius = 18 + i * 5;
        const orbitSpeed = time.current * (1.2 + i * 0.3);
        const orbitX = Math.cos(orbitSpeed) * orbitRadius;
        const orbitY = Math.sin(orbitSpeed) * orbitRadius;
        
        // Snapped Position (Corners of the interaction box)
        const snapAngle = (i * (360 / 3) + 45) * (Math.PI / 180);
        const snapRadius = 32;
        const snapX = Math.cos(snapAngle) * snapRadius;
        const snapY = Math.sin(snapAngle) * snapRadius;
        
        // Blend between orbit and snap
        const finalX = ringPos.current.x + lerp(orbitX, snapX, hoverIntensity.current);
        const finalY = ringPos.current.y + lerp(orbitY, snapY, hoverIntensity.current);
        
        // Aesthetic updates
        const scale = lerp(1, 1.4, hoverIntensity.current);
        const opacity = lerp(0.6, 1, hoverIntensity.current);
        const satColor = hoverIntensity.current > 0.5 ? '#6ee7b7' : '#60a5fa';

        sat.style.transform = `translate3d(${finalX}px, ${finalY}px, 0) translate(-50%, -50%) scale(${scale})`;
        sat.style.opacity = `${opacity}`;
        sat.style.backgroundColor = satColor;
        if (hoverIntensity.current > 0.5) {
          sat.style.boxShadow = `0 0 10px white`;
        } else {
          sat.style.boxShadow = 'none';
        }
      });

      // 6. Precision Core
      if (dotRef.current) {
        // Dot hides when hovering
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%) scale(${1 - hoverIntensity.current})`;
        dotRef.current.style.opacity = `${1 - hoverIntensity.current}`;
      }

      // 7. Dynamic Ambient Light
      if (glowRef.current) {
        const glowSize = lerp(250, 500, hoverIntensity.current);
        const glowOpacity = lerp(0.08, 0.22, hoverIntensity.current);
        const r = lerp(59, 52, hoverIntensity.current);
        const g = lerp(130, 211, hoverIntensity.current);
        const b = lerp(246, 153, hoverIntensity.current);
        
        glowRef.current.style.background = `radial-gradient(circle ${glowSize}px at ${ringPos.current.x}px ${ringPos.current.y}px, rgba(${r}, ${g}, ${b}, ${glowOpacity}), transparent 80%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Environmental Glow */}
      <div 
        ref={glowRef} 
        className="fixed inset-0 pointer-events-none z-[40] will-change-[background]" 
      />

      {/* Primary Interaction Ring */}
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[1000] rounded-full border border-blue-500/40 will-change-transform"
      />

      {/* Satellite Particles */}
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          ref={(el) => { satelliteRefs.current[i] = el; }}
          className="fixed top-0 left-0 w-1 h-1 bg-blue-400 rounded-full z-[1001] pointer-events-none will-change-transform shadow-sm"
        />
      ))}

      {/* Center Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full z-[1001] pointer-events-none will-change-transform"
      />
    </>
  );
};

export default MouseTracker;
