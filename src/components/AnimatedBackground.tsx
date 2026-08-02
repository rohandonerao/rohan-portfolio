export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] animate-blob rounded-full bg-accent/25 blur-[110px]" />
      <div
        className="absolute top-1/3 -right-32 h-[480px] w-[480px] animate-blob rounded-full bg-accent-2/20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[380px] w-[380px] animate-blob rounded-full bg-accent-3/15 blur-[110px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
