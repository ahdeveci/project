import React from 'react';
import { Link } from 'react-router-dom';

const Charts = () => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 mt-8 border border-lime-300/20">
      <h3 className="text-lime-300 m-0 mb-2">Kızılırmak Deltası</h3>
      <p className="m-0 mb-4 opacity-90">Kızılırmak'ın yeryüzü suları zaman içerisindeki değişimi</p>
      <div className='flex flex-row gap-4 flex-wrap align-middle justify-center'>
        <img src="./assets/PHOTO-2024-12-19-16-01-38 2.jpg" className="md:h-full md:max-w-[550px] sm:w-full sm:h-auto sm:max-w-full rounded-2xl mb-8" />
        <img src="./assets/PHOTO-2024-12-19-16-01-38.jpg" className="md:h-full md:max-w-[550px] sm:w-full sm:h-auto sm:max-w-full rounded-2xl mb-8" />
      </div>

    </div>
  );
};

export default Charts;
