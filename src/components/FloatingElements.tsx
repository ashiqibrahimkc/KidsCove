export default function FloatingElements() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Circle / Bubble 1 */}
      <div className="absolute top-10 left-[8%] w-16 h-16 rounded-full bg-accent-yellow/20 animate-float" />

      {/* Star 1 */}
      <div
        className="absolute top-28 right-[12%] text-2xl sm:text-3xl text-accent-pink animate-wobble"
        style={{ animationDuration: "5s" }}
      >
        ✨
      </div>

      {/* Bubble 2 */}
      <div
        className="absolute top-1/2 left-[4%] w-24 h-24 rounded-full bg-primary/10 animate-pulse-soft"
        style={{ animationDuration: "4s" }}
      />

      {/* Emoji 1 */}
      <div
        className="absolute top-1/3 right-[6%] text-2xl sm:text-3xl animate-bounce-gentle"
        style={{ animationDuration: "4.5s" }}
      >
        🎈
      </div>

      {/* Bubble 3 */}
      <div
        className="absolute bottom-16 right-[15%] w-20 h-20 rounded-full bg-secondary/20 animate-float"
        style={{ animationDuration: "6s" }}
      />

      {/* Star 2 */}
      <div
        className="absolute bottom-24 left-[10%] text-xl sm:text-2xl text-accent-blue animate-wiggle"
        style={{ animationDuration: "3s" }}
      >
        ⭐
      </div>

      {/* Bubble 4 */}
      <div
        className="absolute top-20 left-[45%] w-12 h-12 rounded-full bg-accent-purple/15 animate-bounce-gentle"
        style={{ animationDuration: "5.5s" }}
      />
    </div>
  );
}
