import React, {useState} from 'react';
import Hero from '../components/Hero';
import MigrationRoute from '../components/MigrationRoute';
import WetlandCard from '../components/WetlandCard';
import RamsarWidget from '../components/RamsarWidget';
import Charts from '../components/Charts';
import ProjectPurpose from '../components/ProjectPurpose';
import { Link } from 'react-router-dom';

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
      image: "./assets/93848.jpg",
      title: "Kızılırmak Deltası",
      description: "Samsun'da bulunan delta, 359 kuş türüne ev sahipliği yapan, Karadeniz'in en büyük sulak alanıdır. Özellikle flamingolar ve Sylvia türleri için önemli bir yaşam alanıdır."
    },
    {
      image: "./assets/22112021_021012812_3_gediz foto10.jpg",
      title: "Gediz Deltası",
      description: "İzmir'de bulunan delta, Akdeniz'in en büyük flamingo kolonilerine ev sahipliği yapar. Her yıl binlerce flamingo burada ürer."
    },
    {
      image: "./assets/eren-halat-vaC0fqLsWXw-unsplash.jpg",
      title: "Sultan Sazlığı",
      description: "Kayseri'de bulunan bu alan, leylekler ve Sylvia türleri için önemli bir durak noktasıdır. İç Anadolu'nun en önemli sulak alanlarından biridir."
    }
  ];

  const [month, setMonth] = useState(new Date().toISOString().substring(0,7));
  console.log(new Date().toISOString().substring(0,7));
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
      <p className="m-0 mb-4 opacity-90">NASA'nın GRACE Veri Analiz Aracı ile tarihlere göre yeryüzü sularındaki değişimleri görebilirsiniz. Aşağıdan tarih seçimi yaparak `Seç` butonuna tıkladığınızda NASA'nın sitesine yönlendirileceksiniz.</p>
      <div className='mb-4'>
        <label class="block text-light-700 text-sm font-bold mb-2" for="username">
          Tarih
        </label>
        <div>
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="month" value={month} onChange={(e) => {
              console.log('month', e.target.value);
              setMonth(e.target.value);
          }} />
          <Link target="_blank" to={`https://grace.jpl.nasa.gov/data-analysis-tool/#b=ESRI_World_Imagery&l=TELLUS_GRAC-GRFO_MASCON_CRI_GRID_RL06.3_V4_LAND(1),OSMCoastlines(1)&vm=2D&ve=20.13501216458853,25.874625562570568,48.66446790446322,51.24452820936608&pl=false&pb=false&tr=false&d=${month}-30&tlr=months`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">
            Seç
          </Link>
        </div>

      </div>
      <div className='text-center flex flex-row gap-4 justify-center'>
        <img src="assets/sep-2024-status.png" className="md:h-full md:max-w-[550px] sm:w-full sm:h-auto sm:max-w-full rounded-2xl mb-8" />
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
