import React from 'react';

const Hero = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: \"url('https://ik.imagekit.io/ukuvewd1m/zizo-imagination-Subject__A_super_hyperrealistic_photoshoot_featuri.jpeg?updatedAt=1763351645121')\",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center leading-tight">
          THE<br />
          NUTCRACKER
        </h1>
        {/* Add your other content here */}
      </div>
    </div>
  );
};

export default Hero;
