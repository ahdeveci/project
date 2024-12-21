import React from 'react';

const Hero = () => {
  return (
    <section className="mb-16 text-center">
      <img
        src="/assets/wolfgang-hasselmann-dyqiM3KN84g-unsplash.jpg"
        alt="Flamingolar"
        className="w-full max-h-[500px] object-cover rounded-2xl mb-8"
      />
      <p className="text-2xl max-w-3xl mx-auto">
        Türkiye, Afrika ve Avrupa arasındaki önemli kuş göç yolları üzerinde yer almaktadır. 
        Her yıl milyonlarca kuş bu rotaları kullanarak göç eder.
      </p>
    </section>
  );
};

export default Hero;