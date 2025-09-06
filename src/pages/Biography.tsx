import Icon from '@/components/ui/icon';

const Biography = () => {
  const achievements = [
    {
      period: "1941-1960",
      title: "Детство и юность",
      description: "Родился 5 сентября 1941 года в селе Гебгута Хасавюртовского района Дагестана. Рано проявил способности к литературе и искусству."
    },
    {
      period: "1960-1970", 
      title: "Становление как поэта",
      description: "Окончил филологический факультет ДГУ. Начал публиковать стихи, работал в газете 'Дагестанская правда'."
    },
    {
      period: "1970-1990",
      title: "Литературная деятельность",
      description: "Активно публикует поэтические сборники, переводит классиков. Становится известным поэтом и общественным деятелем."
    },
    {
      period: "1990-2006",
      title: "Политическая деятельность",
      description: "Депутат Народного Собрания РД, министр по делам национальностей РФ, посол России в Таджикистане."
    },
    {
      period: "2006-2013",
      title: "Глава Республики Дагестан",
      description: "Руководил регионом в сложный период, инициировал множество культурных и социальных проектов."
    },
    {
      period: "2013-2024",
      title: "Творческое наследие",
      description: "Продолжал литературную деятельность, работал над мемуарами, создавал культурные проекты."
    }
  ];

  const personalInfo = [
    { label: "Дата рождения", value: "5 сентября 1941 года", icon: "Calendar" },
    { label: "Место рождения", value: "с. Гебгута, Дагестан", icon: "MapPin" },
    { label: "Образование", value: "ДГУ, филологический факультет", icon: "GraduationCap" },
    { label: "Семья", value: "Женат, четверо детей", icon: "Users" },
    { label: "Профессия", value: "Поэт, политик, дипломат", icon: "Briefcase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-5xl">РА</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Рамазан Абдулатипов
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Выдающийся дагестанский поэт, политик и общественный деятель, 
            посвятивший жизнь служению народу и развитию культуры Дагестана
          </p>
        </div>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {personalInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name={info.icon} size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Biography Quote */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-l-4 border-blue-500">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4">
            "Дагестан — это место, где встречаются культуры, где каждый камень хранит историю, 
            а каждый человек — носитель древней мудрости."
          </blockquote>
          <cite className="text-lg text-blue-600 font-semibold">— Рамазан Абдулатипов</cite>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Жизненный путь
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-300"></div>
            
            {achievements.map((achievement, index) => (
              <div key={index} className="relative mb-10">
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-xl shadow-lg p-6 w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  }`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {achievement.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Heart" size={48} className="mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Наследие</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Рамазан Абдулатипов оставил неизгладимый след в истории Дагестана. 
            Его поэтическое творчество, политическая деятельность и культурные инициативы 
            продолжают вдохновлять новые поколения. Созданные им проекты живут и развиваются, 
            служа мостом между прошлым и будущим дагестанского народа.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Biography;