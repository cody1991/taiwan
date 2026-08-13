import type { CSSProperties } from "react";

const flakes = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 17 + 8) % 100}%`,
  delay: `${-(i * 1.4)}s`,
  duration: `${11 + (i % 7)}s`,
  size: `${2 + (i % 4)}px`,
  drift: i % 2 === 0 ? "-12px" : "14px",
}));

export function Snow() {
  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((flake, index) => (
        <i
          key={index}
          style={
            {
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
              "--drift": flake.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
