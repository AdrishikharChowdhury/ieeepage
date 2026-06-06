export function HeroHalftonePanel() {
  return (
    <div
      className="w-full h-[500px] rounded-[40px] bg-gradient-to-br from-[var(--color-ieee-blue)] to-[var(--color-ieee-teal)] opacity-80"
      style={{
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 2px, transparent 2px),
          radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 2px, transparent 2px),
          linear-gradient(135deg, var(--color-ieee-blue), var(--color-ieee-teal))
        `,
        backgroundSize: '24px 24px, 24px 24px, 100% 100%',
      }}
    />
  );
}
