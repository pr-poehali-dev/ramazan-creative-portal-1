import Icon from '@/components/ui/icon';

const Dagestan = () => {
  const facts = [
    {
      title: "Многонациональность",
      icon: "Users",
      stat: "100+",
      description: "Более 100 народностей проживает в Дагестане, каждая со своей уникальной культурой"
    },
    {
      title: "Языковое богатство", 
      icon: "Languages",
      stat: "30+",
      description: "Более 30 языков являются официальными в республике"
    },
    {
      title: "Историческое наследие",
      icon: "Castle",
      stat: "5000",
      description: "Более 5000 лет истории цивилизации в регионе"
    },
    {
      title: "Природное разнообразие",
      icon: "Mountain",
      stat: "4466",
      description: "Высота горы Базардюзю - высшей точки Дагестана"
    }
  ];

  const regions = [
    {
      name: "Махачкала",
      description: "Столица республики, крупнейший город и порт на Каспийском море",
      population: "600 тыс. человек",
      highlights: ["Каспийский порт", "Центр культуры", "Современная архитектура"]
    },
    {
      name: "Дербент",
      description: "Древнейший город России, входящий в список ЮНЕСКО",
      population: "125 тыс. человек", 
      highlights: ["Крепость Нарын-кала", "5000 лет истории", "Культурное наследие ЮНЕСКО"]
    },
    {
      name: "Хасавюрт",
      description: "Важный экономический и культурный центр северного Дагестана",
      population: "140 тыс. человек",
      highlights: ["Промышленный центр", "Многонациональный", "Транспортный узел"]
    },
    {
      name: "Горный Дагестан",
      description: "Высокогорные районы с уникальной культурой и традициями",
      population: "500 тыс. человек",
      highlights: ["Аварские башни", "Традиционные ремесла", "Горные селения"]
    }
  ];

  const culture = [
    {
      title: "Танцы",
      description: "Лезгинка - визитная карточка кавказской культуры",
      icon: "Music4"
    },
    {
      title: "Ремесла",
      description: "Ковроткачество, чеканка, резьба по дереву",
      icon: "Scissors"
    },
    {
      title: "Кухня",
      description: "Хинкал, чуду, курзе и другие национальные блюда",
      icon: "Chef"
    },
    {
      title: "Фольклор",
      description: "Богатое устное творчество и эпические сказания",
      icon: "BookOpen"
    },
    {
      title: "Гостеприимство",
      description: "Традиционное кавказское радушие и уважение к гостю",
      icon: "Heart"
    },
    {
      title: "Архитектура",
      description: "Боевые башни, мечети и традиционные дома",
      icon: "Building"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
            <img 
              src="/img/97d8619d-b04b-43ac-ba36-56f18fe70945.jpg" 
              alt="Пейзажи Дагестана"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Дагестан - горная страна
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Удивительная республика на стыке Европы и Азии, где сохранились древние традиции и культура горских народов
          </p>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={fact.icon} size={32} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{fact.stat}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{fact.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Регионы и города
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {region.name}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {region.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Icon name="Users" size={16} className="mr-1" />
                      {region.population}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {region.highlights.map((highlight, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Культурное наследие
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Panoramic Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/img/97d8619d-b04b-43ac-ba36-56f18fe70945.jpg" 
            alt="Панорама Дагестана"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Величие кавказских гор</h3>
            <p className="text-gray-600 leading-relaxed">
              Дагестан поражает своей природной красотой: от заснеженных вершин Кавказского хребта 
              до теплых берегов Каспийского моря. Здесь каждый уголок хранит свою историю и традиции.
            </p>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Mountain" size={48} className="mx-auto mb-6 text-white" />
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "Дагестан - это не просто место на карте. Это душа, это корни, это источник силы и вдохновения. 
            Здесь живет народ, чья мудрость передается из поколения в поколение."
          </blockquote>
          <cite className="text-lg font-semibold">— Рамазан Абдулатипов</cite>
        </div>

      </div>
    </div>
  );
};

export default Dagestan;