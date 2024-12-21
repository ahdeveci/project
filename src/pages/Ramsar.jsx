import React from 'react';

const Ramsar = () => {
  return (
    <main className="mx-auto p-8 max-w-[800px] text-white">
      <h1 className="text-5xl font-bold leading-none text-center mb-16">
        Ramsar <span className="bg-gradient-to-r from-emerald-500 via-lime-300 to-white bg-clip-text text-transparent">Sözleşmesi</span>
      </h1>
      
      <article className="bg-white/5 rounded-2xl p-8">
        <section className="mb-8">
          <h2 className="text-lime-300 text-2xl mb-4">Sözleşme Hakkında</h2>
          <p>Ramsar Sözleşmesi, 1971 yılında İran'ın Ramsar kentinde imzalanan "Özellikle Su Kuşları Yaşama Ortamı Olarak Uluslararası Öneme Sahip Sulak Alanların Korunması Sözleşmesi"dir.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lime-300 text-2xl mb-4">Temel Amaçlar</h2>
          <ul className="list-none p-0">
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Sulak alanların akılcı kullanımını sağlamak</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Önemli sulak alanları koruma altına almak</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Sulak alanlar konusunda uluslararası işbirliği yapmak</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Su kuşlarının yaşama ortamlarını korumak</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lime-300 text-2xl mb-4">Türkiye'nin Konumu</h2>
          <p>Türkiye, 1994 yılında Ramsar Sözleşmesi'ne taraf olmuştur. Ülkemizde çok sayıda Ramsar alanı bulunmaktadır ve bu alanlar özellikle göçmen kuşlar için hayati önem taşımaktadır.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lime-300 text-2xl mb-4">Önemli Ramsar Alanları</h2>
          <ul className="list-none p-0">
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Manyas (Kuş) Gölü</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Sultan Sazlığı</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Burdur Gölü</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Göksu Deltası</li>
            <li className="mb-2 pl-6 relative before:content-['•'] before:text-lime-300 before:absolute before:left-0">Kızılırmak Deltası</li>
          </ul>
        </section>

        <div className="bg-emerald-900/30 rounded-lg p-6 mt-8">
          <h3 className="text-lime-300 m-0 mb-2">Önemli Not</h3>
          <p className="m-0">
            Bu sayfa, Ramsar Sözleşmesi'nin genel bir özetini sunmaktadır. Detaylı bilgi için{' '}
            <a 
              href="https://www.tarimorman.gov.tr/DKMP/Belgeler/MEVZUAT/Uluslararas%C4%B1%20S%C3%B6zle%C5%9Fmeler/7%20RAMSAR%20S%C3%96ZLE%C5%9EMES%C4%B0.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime-300 underline hover:opacity-80"
            >
              resmi belgeyi
            </a> inceleyebilirsiniz.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Ramsar;