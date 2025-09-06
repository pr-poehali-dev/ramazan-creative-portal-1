import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Paintings = () => {
  const [selectedPainting, setSelectedPainting] = useState<number | null>(null);
  
  const paintings = [
    {
      id: 1,
      title: "Горы моей души",
      year: "2010",
      technique: "Масло на холсте",
      size: "80x60 см",
      description: "Пейзаж родных кавказских гор, выполненный в теплых тонах осени. Картина отражает глубокую связь автора с природой Дагестана.",
      image: "/img/04d20604-dc8f-43d3-8857-da89f74880af.jpg",
      category: "Пейзаж"
    },
    {
      id: 2,
      title: "Портрет деда",
      year: "2012",
      technique: "Масло на холсте", 
      size: "70x50 см",
      description: "Портрет старого горца, воплощающий мудрость и достоинство дагестанского народа. Работа выполнена с особой любовью и уважением к памяти предков.",
      image: "/img/46fa50c2-9e5f-4c9e-b99a-cd48269e3355.jpg",
      category: "Портрет"
    },
    {
      id: 3,
      title: "Национальные мотивы",
      year: "2015",
      technique: "Масло на холсте",
      size: "90x70 см", 
      description: "Натюрморт с традиционными предметами дагестанского быта: коврами, керамикой, национальными украшениями.",
      image: "/img/6a3f050f-40da-40cd-a2bd-66eed42416ec.jpg",
      category: "Натюрморт"
    },
    {
      id: 4,
      title: "Рассвет над Каспием",
      year: "2016",
      technique: "Акварель",
      size: "60x40 см",
      description: "Лирический пейзаж побережья Каспийского моря на рассвете, передающий красоту и умиротворение.",
      image: "/img/04d20604-dc8f-43d3-8857-da89f74880af.jpg",
      category: "Пейзаж"
    },
    {
      id: 5,
      title: "Женщина-горянка",
      year: "2018",
      technique: "Масло на холсте",
      size: "65x45 см",
      description: "Портрет дагестанской женщины в национальном костюме, олицетворяющий красоту и силу горского характера.",
      image: "/img/46fa50c2-9e5f-4c9e-b99a-cd48269e3355.jpg",
      category: "Портрет"
    },
    {
      id: 6,
      title: "Дербентская крепость",
      year: "2020",
      technique: "Акварель",
      size: "50x70 см",
      description: "Историческая крепость Нарын-кала в Дербенте, древнейшем городе России.",
      image: "/img/04d20604-dc8f-43d3-8857-da89f74880af.jpg",
      category: "Архитектура"
    }
  ];

  const categories = ["Все", "Пейзаж", "Портрет", "Натюрморт", "Архитектура"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredPaintings = activeCategory === "Все" 
    ? paintings 
    : paintings.filter(painting => painting.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Пейзаж': return 'bg-green-100 text-green-800';
      case 'Портрет': return 'bg-blue-100 text-blue-800';
      case 'Натюрморт': return 'bg-purple-100 text-purple-800';
      case 'Архитектура': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
            <img 
              src="/img/04d20604-dc8f-43d3-8857-da89f74880af.jpg" 
              alt="Живопись Рамазана Абдулатипова"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Живописные работы
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Художественное творчество, вдохновленное красотой Дагестана и его народа
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Palette" size={24} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{paintings.length}</p>
            <p className="text-gray-600">Живописных работ</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Image" size={24} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">4</p>
            <p className="text-gray-600">Жанра</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Paintbrush" size={24} className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-gray-600">Техники</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} className="text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">10+</p>
            <p className="text-gray-600">Лет творчества</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Paintings Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPaintings.map((painting, index) => (
            <div 
              key={painting.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPainting(painting.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={painting.image} 
                  alt={painting.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(painting.category)}`}>
                    {painting.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{painting.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {painting.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {painting.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{painting.technique}</span>
                  <span>{painting.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPainting && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPainting(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const painting = paintings.find(p => p.id === selectedPainting);
                return painting ? (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">{painting.title}</h2>
                      <button 
                        onClick={() => setSelectedPainting(null)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <Icon name="X" size={24} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <img 
                        src={painting.image} 
                        alt={painting.title}
                        className="w-full rounded-lg shadow-lg"
                      />
                      
                      <div>
                        <div className="space-y-4">
                          <div>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(painting.category)}`}>
                              {painting.category}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed">
                            {painting.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                              <p className="text-sm font-medium text-gray-500">Год создания</p>
                              <p className="text-lg text-gray-900">{painting.year}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Техника</p>
                              <p className="text-lg text-gray-900">{painting.technique}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Размер</p>
                              <p className="text-lg text-gray-900">{painting.size}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Жанр</p>
                              <p className="text-lg text-gray-900">{painting.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}

        {/* Artist Quote */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Brush" size={48} className="mx-auto mb-6 text-white" />
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "Живопись для меня — это способ запечатлеть красоту моего народа и родной земли. 
            Каждый мазок кисти несет в себе любовь к Дагестану."
          </blockquote>
          <cite className="text-lg font-semibold">— Рамазан Абдулатипов</cite>
        </div>

      </div>
    </div>
  );
};

export default Paintings;