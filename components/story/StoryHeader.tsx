const StoryHeader = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="flex flex-col items-center gap-3">
        <h1
          className="font-bold text-[40px] leading-none tracking-[0.8px] text-color-ink"
          style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
        >
          Our Story
        </h1>
        <span className="w-12 h-0.75 bg-ieee-blue" />
      </div>
      <p className="text-base text-ink/60 text-center max-w-2xl">
        From a single spark to a blazing trail — the journey of IEEE STCET Student Branch
      </p>
    </div>
  );
};

export default StoryHeader;
