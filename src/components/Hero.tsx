const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-radial from-warhammer-purple/10 to-transparent" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-gothic text-5xl md:text-7xl text-warhammer-black mb-6 tracking-wider">
          Enter the Dark Realm
        </h1>
        <p className="text-warhammer-purple text-xl md:text-2xl max-w-2xl mx-auto">
          Discover the gothic darkness of the Warhammer universe
        </p>
      </div>
    </div>
  );
};

export default Hero;