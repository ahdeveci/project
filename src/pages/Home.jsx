import React from 'react';
import Hero from '../components/Hero';
import MigrationRoute from '../components/MigrationRoute';
import WetlandCard from '../components/WetlandCard';
import RamsarWidget from '../components/RamsarWidget';
import Charts from '../components/Charts';
import ProjectPurpose from '../components/ProjectPurpose';

const Home = () => {
  const routes = [
    {
      href: "#bosphorus",
      title: "Boğaz Göç Yolu",
      body: "İstanbul Boğazı üzerinden geçen göç yolu, yırtıcı kuşlar ve Sylvia türleri için önemli bir geçiş noktasıdır."
    },
    {
      href: "#caucasus",
      title: "Kafkasya Rotası",
      body: "Doğu Karadeniz üzerinden geçen bu rota, özellikle leylekler ve Sylvia türleri tarafından kullanılır."
    },
    {
      href: "#mediterranean",
      title: "Akdeniz Kıyı Şeridi",
      body: "Akdeniz kıyısı boyunca uzanan rota, flamingolar ve su kuşları için hayati önem taşır."
    }
  ];

  const wetlands = [
    {
      image: "/public/assets/93848.jpg",
      title: "Kızılırmak Deltası",
      description: "Samsun'da bulunan delta, 359 kuş türüne ev sahipliği yapan, Karadeniz'in en büyük sulak alanıdır. Özellikle flamingolar ve Sylvia türleri için önemli bir yaşam alanıdır."
    },
    {
      image: "/public/assets/22112021_021012812_3_gediz foto10.jpg",
      title: "Gediz Deltası",
      description: "İzmir'de bulunan delta, Akdeniz'in en büyük flamingo kolonilerine ev sahipliği yapar. Her yıl binlerce flamingo burada ürer."
    },
    {
      image: "/public/assets/eren-halat-vaC0fqLsWXw-unsplash.jpg",
      title: "Sultan Sazlığı",
      description: "Kayseri'de bulunan bu alan, leylekler ve Sylvia türleri için önemli bir durak noktasıdır. İç Anadolu'nun en önemli sulak alanlarından biridir."
    }
  ];

  return (
    <main className="mx-auto p-4 max-w-[1200px] text-white text-xl leading-relaxed">
      <h1 className="text-6xl font-bold leading-none text-center mb-8">
        Türkiye'den Geçen <span className="bg-gradient-to-r from-emerald-500 via-lime-300 to-white bg-clip-text text-transparent">Kuş Göçleri</span>
      </h1>
      
      <Hero />

      <ProjectPurpose/>

      <Charts/>
      
      <RamsarWidget />

      <div className="bg-white/10 rounded-2xl p-6 mt-8 border border-lime-300/20">
      <h3 className="text-lime-300 m-0 mb-2">Nasa Ölçümü</h3>
      <p className="m-0 mb-4 opacity-90">Detaylar...</p>
      <div className='text-center flex flex-row gap-4'>
        <img src="https://svs.gsfc.nasa.gov/vis/a010000/a013500/a013574/Still.png" className="h-full max-w-[550px] object-cover rounded-2xl mb-8" />
      </div>
      
    </div>
      
      <section className="mb-16 mt-16">
        <h2 className="text-4xl mb-8 text-center">Önemli Göç Rotaları</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((route) => (
            <MigrationRoute key={route.href} {...route} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl mb-8 text-center">Önemli Sulak Alanlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wetlands.map((wetland) => (
            <WetlandCard key={wetland.title} {...wetland} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;