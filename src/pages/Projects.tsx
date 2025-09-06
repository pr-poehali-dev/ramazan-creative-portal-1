import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Родовая башня и краеведческий музей",
      location: "с. Гебгута, Хасавюртовский район",
      year: "2010",
      category: "Культурные объекты",
      status: "Действующий",
      description: "Восстановленная родовая башня рода Абдулатиповых, ставшая центром сохранения истории и культуры. Музей содержит уникальную коллекцию артефактов.",
      curator: "Местная администрация с. Гебгута",
      videoPlanned: "Планируется видео-презентация от директора музея",
      impact: "Центр культурного туризма и сохранения исторической памяти"
    },
    {
      id: 2,
      title: "Православный храм св. князя Владимира",
      location: "г. Махачкала",
      year: "2011",
      category: "Религиозные объекты",
      status: "Действующий",
      description: "Православный храм, символизирующий межконфессиональное согласие в многонациональном Дагестане.",
      curator: "Настоятель храма протоиерей Алексий",
      videoPlanned: "Видео-экскурсия с рассказом об архитектуре и значении",
      impact: "Духовный центр для православной общины республики"
    },
    {
      id: 3,
      title: "Мечеть имени имама шейха Шамиля",
      location: "г. Махачкала",
      year: "2012",
      category: "Религиозные объекты", 
      status: "Действующий",
      description: "Современная мечеть, названная в честь легендарного имама Шамиля - символа сопротивления горцев.",
      curator: "Имам-хатиб мечети",
      videoPlanned: "Документальный фильм об истории строительства",
      impact: "Главный исламский центр столицы Дагестана"
    },
    {
      id: 4,
      title: "Памятник Русской учительнице",
      location: "с. Гебгута",
      year: "2013",
      category: "Памятники",
      status: "Действующий",
      description: "Памятник, посвященный русским учителям, внесшим огромный вклад в просвещение горских народов.",
      curator: "Школа с. Гебгута",
      videoPlanned: "Интервью с выпускниками и учителями школы",
      impact: "Символ межнационального единства в сфере образования"
    },
    {
      id: 5,
      title: "Дом Дружбы",
      location: "г. Махачкала",
      year: "2008",
      category: "Культурные объекты",
      status: "Действующий",
      description: "Культурно-общественный центр для проведения межнациональных мероприятий и фестивалей.",
      curator: "Министерство по делам национальностей РД",
      videoPlanned: "Репортаж о культурных мероприятиях и фестивалях",
      impact: "Площадка для диалога культур и народов"
    },
    {
      id: 6,
      title: "Театр поэзии 'От Пушкина до Гамзатова'",
      location: "г. Махачкала",
      year: "2009",
      category: "Культурные объекты",
      status: "Действующий",
      description: "Уникальный театр, представляющий поэтические произведения русских и дагестанских классиков.",
      curator: "Художественный руководитель театра",
      videoPlanned: "Документальный фильм о репертуаре и актерах",
      impact: "Популяризация поэтического искусства среди молодежи"
    },
    {
      id: 7,
      title: "Мемориал 'Ахульго'",
      location: "Унцукульский район, Дагестан",
      year: "2014",
      category: "Памятники",
      status: "Действующий", 
      description: "Мемориальный комплекс на месте последней битвы имама Шамиля с царскими войсками.",
      curator: "Министерство культуры РД",
      videoPlanned: "Историческая реконструкция событий",
      impact: "Центр патриотического воспитания и исторической памяти"
    },
    {
      id: 8,
      title: "Национальный музей им. А.Тахо-Годи",
      location: "г. Махачкала",
      year: "2007",
      category: "Культурные объекты",
      status: "Действующий",
      description: "Расширенная экспозиция главного музея республики с уникальными археологическими находками.",
      curator: "Директор Национального музея РД",
      videoPlanned: "Виртуальная экскурсия по залам музея",
      impact: "Главный хранитель культурного наследия народов Дагестана"
    },
    {
      id: 9,
      title: "Аллея 'Город мастеров'",
      location: "г. Махачкала",
      year: "2015",
      category: "Культурные объекты",
      status: "Действующий",
      description: "Выставочная аллея, демонстрирующая традиционные ремесла и народные промыслы Дагестана.",
      curator: "Союз мастеров народных промыслов РД",
      videoPlanned: "Мастер-классы от народных умельцев",
      impact: "Сохранение и развитие традиционных ремесел"
    },
    {
      id: 10,
      title: "Волейбольная площадка 'Волейбол в сердце гор'",
      location: "с. Гебгута", 
      year: "2016",
      category: "Спортивные объекты",
      status: "Действующий",
      description: "Современная волейбольная площадка для развития спорта среди сельской молодежи.",
      curator: "Спортивная школа Хасавюртовского района",
      videoPlanned: "Репортаж о юных волейболистах",
      impact: "Привлечение молодежи к здоровому образу жизни"
    },
    {
      id: 11,
      title: "Набережная Дербента",
      location: "г. Дербент",
      year: "2011",
      category: "Городская инфраструктура",
      status: "Действующий",
      description: "Благоустроенная набережная древнего города с современной инфраструктурой для отдыха.",
      curator: "Администрация г. Дербента",
      videoPlanned: "Прогулка по обновленной набережной",
      impact: "Развитие туристической привлекательности древнего города"
    }
  ];

  const categories = ["Все", "Культурные объекты", "Религиозные объекты", "Памятники", "Спортивные объекты", "Городская инфраструктура"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProjects = activeCategory === "Все" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Культурные объекты': return 'bg-blue-100 text-blue-800';
      case 'Религиозные объекты': return 'bg-purple-100 text-purple-800';
      case 'Памятники': return 'bg-red-100 text-red-800';
      case 'Спортивные объекты': return 'bg-green-100 text-green-800';
      case 'Городская инфраструктура': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
            <Icon name="Building" size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Наследие проектов
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            11 культурных и социальных проектов, реализованных по инициативе Рамазана Абдулатипова, 
            продолжают служить народу Дагестана
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Building" size={24} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
            <p className="text-gray-600">Реализованных проектов</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="CheckCircle" size={24} className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-gray-600">Действующих объектов</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="MapPin" size={24} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">7</p>
            <p className="text-gray-600">Населенных пунктов</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Calendar" size={24} className="text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">10</p>
            <p className="text-gray-600">Лет реализации</p>
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
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Icon name="MapPin" size={14} className="mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{project.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">{project.status}</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                return project ? (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 pr-4">{project.title}</h2>
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
                      >
                        <Icon name="X" size={24} />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Информация о проекте</h3>
                          <div className="space-y-3">
                            <div>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                                {project.category}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Icon name="MapPin" size={16} className="mr-2" />
                              {project.location}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Icon name="Calendar" size={16} className="mr-2" />
                              Открыт в {project.year} году
                            </div>
                            <div className="flex items-center text-green-600">
                              <Icon name="CheckCircle" size={16} className="mr-2" />
                              {project.status}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Кураторство</h3>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <Icon name="User" size={16} className="mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{project.curator}</span>
                            </div>
                            <div className="flex items-start">
                              <Icon name="Video" size={16} className="mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{project.videoPlanned}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Значение и влияние</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        )}

        {/* Legacy Message */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Lightbulb" size={48} className="mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Живое наследие</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
            Каждый из 11 проектов продолжает жить и развиваться, служа народу Дагестана. 
            От культурных центров до спортивных площадок — все объекты активно функционируют 
            и вносят вклад в развитие региона.
          </p>
          <p className="text-lg font-medium">
            Планируется создание видео-презентаций от кураторов каждого проекта
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;