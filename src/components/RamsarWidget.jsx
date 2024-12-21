import React from 'react';
import { Link } from 'react-router-dom';

const RamsarWidget = () => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 mt-8 border border-lime-300/20">
      <h3 className="text-lime-300 m-0 mb-2">Ramsar Sözleşmesi</h3>
      <p className="m-0 mb-4 opacity-90">Sulak alanların korunması için imzalanan uluslararası sözleşme</p>
      <Link to="/ramsar" className="text-lime-300 no-underline text-sm font-semibold hover:opacity-80 transition-opacity">
        Daha Fazla Bilgi →
      </Link>
    </div>
  );
};

export default RamsarWidget;