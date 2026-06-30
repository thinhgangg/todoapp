const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <img
          src="404_NotFound.png"
          alt="Not Found"
          className="max-w-full mb-6 w-96 z-10"
        />

        <a
          href="/"
          className="inline-block px-6 py-3 mt-6 font-medium text-black bg-foreground rounded-2xl z-10"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
