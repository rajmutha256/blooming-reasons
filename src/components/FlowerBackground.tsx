type Flower = {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
};

const flowers = ["🌸", "🌼", "🌷"];

const seeded = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const floatingFlowers: Flower[] = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  emoji: flowers[Math.floor(seeded(index, 1) * flowers.length)],
  left: seeded(index, 2) * 100,
  delay: seeded(index, 3) * 9,
  duration: 12 + seeded(index, 4) * 12,
  size: 18 + seeded(index, 5) * 16,
  opacity: 0.2 + seeded(index, 6) * 0.1,
  drift: seeded(index, 7) * 24 - 12,
}));

export default function FlowerBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {floatingFlowers.map((flower) => (
        <span
          key={flower.id}
          className="flower-float absolute -bottom-20 select-none"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            fontSize: `${flower.size}px`,
            opacity: flower.opacity,
            ["--drift" as string]: `${flower.drift}px`,
          }}
        >
          {flower.emoji}
        </span>
      ))}
    </div>
  );
}
