import React from 'react';

const WetlandCard = ({ image, title, description }) => {
  return (
    <div className="bg-white/10 rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-transform">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <h3 className="p-4 m-0">{title}</h3>
      <p className="px-4 pb-4 m-0 text-sm">{description}</p>
    </div>
  );
};

export default WetlandCard;