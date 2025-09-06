import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Электронная почта",
      value: "info@ramazan-abdulatipov.ru",
      description: "Для общих вопросов и предложений"
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (8722) 12-34-56",
      description: "Приемная (рабочие дни 9:00-18:00)"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Махачкала, ул. Центральная, 123",
      description: "Культурный центр имени Р. Абдулатипова"
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Выходные: Сб-Вс"
    }
  ];

  const socialLinks = [
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/ramazan_abdulatipov",
      description: "Новости и объявления"
    },
    {
      name: "VKontakte", 
      icon: "Users",
      url: "https://vk.com/ramazan_abdulatipov",
      description: "Официальная группа"
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "https://youtube.com/@ramazan_abdulatipov",
      description: "Видео и интервью"
    }
  ];

  const addresses = [
    {
      title: "Культурный центр (Махачкала)",
      address: "г. Махачкала, ул. Центральная, 123",
      phone: "+7 (8722) 12-34-56",
      email: "info@cultural-center.ru",
      description: "Основной офис и выставочные залы"
    },
    {
      title: "Музей в селе Гебгута",
      address: "с. Гебгута, Хасавюртовский район",
      phone: "+7 (8722) 98-76-54",
      email: "museum@gebguta.ru",
      description: "Родовая башня и краеведческий музей"
    },
    {
      title: "Дом Дружбы (Махачкала)",
      address: "г. Махачкала, проспект Дружбы, 45",
      phone: "+7 (8722) 55-44-33",
      email: "friendship@house.ru",
      description: "Центр межнациональных мероприятий"
    }
  ];

  const projects = [
    {
      name: "Фонд культурного наследия",
      description: "Сохранение и развитие культурных традиций Дагестана",
      contact: "heritage@foundation.ru"
    },
    {
      name: "Образовательные программы",
      description: "Поддержка молодых талантов в области литературы и искусства",
      contact: "education@programs.ru"
    },
    {
      name: "Издательская деятельность",
      description: "Публикация литературных произведений и исторических материалов",
      contact: "publishing@books.ru"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center">
            <Icon name="Mail" size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Контакты
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Свяжитесь с нами для получения информации о культурных проектах и мероприятиях
          </p>
        </div>

        {/* Main Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} size={28} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-xl font-semibold text-blue-600 mb-2">
                {contact.value}
              </p>
              <p className="text-gray-600 text-sm">
                {contact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Социальные сети
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={social.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {social.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {social.description}
                </p>
                <a 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Перейти
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Office Addresses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши адреса
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {addresses.map((address, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" size={24} className="text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {address.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {address.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Icon name="MapPin" size={14} className="mr-2" />
                        {address.address}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Phone" size={14} className="mr-2" />
                        {address.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Mail" size={14} className="mr-2" />
                        {address.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects & Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Проекты и инициативы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-center text-blue-600">
                      <Icon name="Mail" size={16} className="mr-2" />
                      <span className="text-sm font-medium">{project.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Invitation */}
        <div className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white text-center mb-16">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Мы всегда рады общению с теми, кто интересуется культурой и историей Дагестана. 
            Пишите нам о ваших идеях, предложениях и вопросах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@ramazan-abdulatipov.ru" 
              className="inline-flex items-center px-6 py-3 bg-white text-slate-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </a>
            <a 
              href="tel:+78722123456" 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-slate-700 transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-slate-500" />
              <p className="text-xl font-semibold text-slate-600">Карта местоположения</p>
              <p className="text-slate-500">г. Махачкала, Республика Дагестан</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Как нас найти</h3>
            <p className="text-gray-600">
              Основной офис расположен в центре Махачкалы, в шаговой доступности от основных 
              культурных достопримечательностей города. Удобная транспортная развязка 
              обеспечивает легкий доступ из любой точки города.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacts;