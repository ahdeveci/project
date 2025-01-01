import React from 'react';

const ProjectPurpose = () => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 mt-8 border border-lime-300/20">
    <h3 className="text-lime-300 m-0 mb-2">Proje Amaçları</h3>
    <p className="m-0 mb-4 opacity-90">
    Türkiye'nin Batı Palearktik göç yolu üzerindeki kritik geçiş noktalarını belirlemek.
Kuş göç yollarının ekolojik sürdürülebilirliğini sağlamak için koruma tedbirleri geliştirmek.
NASA ve GRACE-FO (Gravity Recovery and Climate Experiment Follow-On) verilerini kullanarak su kaynakları, toprak nemi ve arazi kullanımındaki değişikliklerin kuş göçü üzerindeki etkilerini analiz etmek.
Uzay tabanlı ve yerel veri kaynaklarını entegre ederek koruma politikaları geliştirmek.
    </p>
    <div className='text-center flex flex-row gap-4 flex-wrap align-middle justify-center'>
      <img src="./assets/Sylvia_atricapilla_heineken.jpg" className="md:h-full md:max-w-[550px] sm:w-full sm:h-auto sm:max-w-full rounded-2xl mb-8" />
      <img src="./assets/kizilirmak-deltasi-kus-cenneti.png" className="md:h-full md:max-w-[550px] sm:w-full sm:h-auto sm:max-w-full rounded-2xl mb-8"/>
    </div>

  </div>
  );
};

export default ProjectPurpose;

