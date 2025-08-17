import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedTimelineItem, setExpandedTimelineItem] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicTracks = [
    {
      title: "Горные напевы",
      description: "Традиционная мелодия Дагестана",
      duration: "3:45"
    },
    {
      title: "Размышления о времени",
      description: "Философская композиция",
      duration: "4:12"
    },
    {
      title: "Единство народов",
      description: "Гимн межнационального согласия",
      duration: "5:20"
    }
  ];

  const paintings = [
    {
      id: 1,
      title: "Воды Каспия",
      description: "Абстрактная композиция, вдохновленная морскими пейзажами родного края. Размер: 60x80 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/6bd61afb-63ed-44fe-8fdd-c4dd99f0dad9.jpeg",
      year: "2019"
    },
    {
      id: 2,
      title: "Горная пастораль",
      description: "Традиционная жизнь горцев в ярких красках народного творчества. Размер: 50x70 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/f3525173-4711-4f1f-b069-a502ef0ab489.jpeg",
      year: "2020"
    },
    {
      id: 3,
      title: "Кавказские вершины",
      description: "Величественные горы Дагестана в экспрессивной живописной манере. Размер: 70x90 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/06503cca-7832-4acd-b5c6-66b3f4c8a68e.jpeg",
      year: "2021"
    },
    {
      id: 4,
      title: "Осенний свет",
      description: "Экспрессивная композиция с яркими желтыми и красными акцентами, символизирующая энергию осени. Размер: 40x60 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/abe30654-ce65-42ea-a9cd-eaf83af35505.jpg",
      year: "2022"
    },
    {
      id: 5,
      title: "Сердце земли",
      description: "Глубокая абстракция с красным центром, окруженным природными формами и цветами. Размер: 80x100 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/631cc71a-5e19-48c2-874f-a1f7bf19fcdb.jpeg",
      year: "2022"
    },
    {
      id: 6,
      title: "Космические ветра",
      description: "Динамичная композиция в бирюзовых и оранжевых тонах, напоминающая вихри в космосе. Размер: 50x80 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/b7ffc4d2-2ccf-4ace-9605-4e129f731262.jpeg",
      year: "2023"
    },
    {
      id: 7,
      title: "Розовый сад",
      description: "Яркий букет роз на солнечном фоне, выполненный в импрессионистической манере. Размер: 30x40 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/bf7d7a43-2335-40bd-9918-24f5e2e30abf.jpeg",
      year: "2023"
    },
    {
      id: 8,
      title: "Вихрь страсти",
      description: "Экспрессивная абстракция с огненными красками, отражающая внутреннюю энергию творчества. Размер: 60x90 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/f9bab1ef-a7b2-4e5f-a851-3e3060f684e4.jpeg",
      year: "2024"
    },
    {
      id: 9,
      title: "Осенний лес",
      description: "Яркая экспрессивная работа с красно-оранжевыми кронами деревьев на изумрудном фоне. Размер: 40x50 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/029268b8-89ed-4027-b95a-7c2b65a4fe42.jpg",
      year: "2024"
    },
    {
      id: 10,
      title: "Радужный поток",
      description: "Динамичная абстракция с яркими полосами цвета, символизирующая движение жизни. Размер: 70x120 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/b98c33bc-4306-48bf-92e4-16b15157282b.jpeg",
      year: "2024"
    },
    {
      id: 11,
      title: "Красный цветок",
      description: "Нежная работа с одиноким красным цветком на фоне голубого неба и золотого поля. Размер: 25x35 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/95ceff4c-abd3-48f4-8b82-d7945d5e4ec6.jpeg",
      year: "2024"
    },
    {
      id: 12,
      title: "Горные вершины",
      description: "Мощная экспрессивная композиция с острыми пиками в ярких зелено-красных тонах. Размер: 90x120 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/8f0d913a-b971-4c0d-b1dd-b02013104f81.jpeg",
      year: "2024"
    }
  ];

  const books = [
    {
      id: 1,
      title: "Размышления о времени и вечности",
      description: "Философские эссе о природе времени, роли личности в истории и поиске смысла бытия",
      year: "2020",
      pages: 384,
      category: "Философия",
      isbn: "978-5-00123-456-7"
    },
    {
      id: 2,
      title: "Единство в многообразии",
      description: "Исследование межнациональных отношений и культурного диалога на Кавказе",
      year: "2019",
      pages: 456,
      category: "Политология",
      isbn: "978-5-00234-567-8"
    },
    {
      id: 3,
      title: "От родовой башни до ворот Кремля",
      description: "Автобиографические записки о пути от горного села до высших эшелонов власти",
      year: "2018",
      pages: 312,
      category: "Мемуары",
      isbn: "978-5-00345-678-9",
      image: "https://cdn.poehali.dev/files/0b9cff16-307c-4771-b428-6bf076542dbc.jpg"
    },
    {
      id: 4,
      title: "Горские традиции и современность",
      description: "Культурологическое исследование традиций народов Дагестана в контексте глобализации",
      year: "2017",
      pages: 275,
      category: "Культурология",
      isbn: "978-5-00456-789-0"
    },
    {
      id: 5,
      title: "Мой дагестанский народ",
      description: "Этнографическое исследование культуры и традиций народов Дагестана",
      year: "2019",
      pages: 428,
      category: "Этнография", 
      isbn: "978-5-00567-890-1",
      image: "https://cdn.poehali.dev/files/20188352-700e-4a04-a7d6-cf1ec606819f.jpeg"
    },
    {
      id: 6,
      title: "Россия: в чем суть твоего бытия?",
      description: "Философские размышления о национальной идентичности и пути развития России",
      year: "2021",
      pages: 392,
      price: 1480,
      category: "Философия",
      isbn: "978-5-00678-901-2",
      image: "https://cdn.poehali.dev/files/6686fdec-4113-4327-be17-6108b4ba2400.jpeg"
    },
    {
      id: 7,
      title: "Власть и совесть",
      description: "Политические мемуары и размышления о роли морали в государственном управлении",
      year: "2020",
      pages: 356,
      price: 1260,
      category: "Политика",
      isbn: "978-5-00789-012-3",
      image: "https://cdn.poehali.dev/files/fcee1e96-a1b2-4f36-86dc-64489c36a244.jpg"
    },
    {
      id: 8,
      title: "В афоризмах на каждый день",
      description: "Сборник мудрых изречений и жизненных наблюдений",
      year: "2022",
      pages: 248,
      price: 890,
      category: "Афоризмы",
      isbn: "978-5-00890-123-4",
      image: "https://cdn.poehali.dev/files/a2f0c304-8cac-483e-99f7-076b5fcc80ac.jpeg"
    },
    {
      id: 9,
      title: "Опыты поэтической философии",
      description: "Поэтические размышления о смысле жизни, любви и творчестве",
      year: "2023",
      pages: 312,
      price: 1150,
      category: "Поэзия",
      isbn: "978-5-00901-234-5",
      image: "https://cdn.poehali.dev/files/abb8a252-0340-436d-8c46-1429644b3a4c.jpg"
    }
  ];

  const timeline = [
    {
      year: "1946",
      title: "Рождение",
      description: "Родился 4 августа в селе Гебгута Тляратинского района Дагестана"
    },
    {
      year: "1960-е",
      title: "Образование",
      description: "Изучал философию и политологию в Дагестанском государственном университете, активно участвовал в общественной жизни"
    },
    {
      year: "1991-2006",
      title: "Политическая карьера",
      description: "Доктор философских наук, профессор, специалист в области культурологии, истории и национальных отношений. Председатель Совета национальностей Верховного Совета РФ, заместитель председателя Совета Федерации, депутат Государственной Думы, министр, заместитель Председателя Правительства РФ, глава Республики Дагестан"
    },
    {
      year: "2013-2017",
      title: "Глава Дагестана",
      description: "Руководство Республикой Дагестан, реализация крупных проектов развития"
    },
    {
      year: "1978-н.в.",
      title: "Литературное творчество",
      description: "Начало активной литературной деятельности, написание книг по философии и политике"
    },
    {
      year: "1993-н.в.",
      title: "Художественное творчество",
      description: "Увлечение живописью, создание картин с пейзажами Кавказа"
    },
    {
      year: "2016-н.в.",
      title: "Музыкальное творчество",
      description: "Начало композиторской деятельности, создание музыкальных произведений"
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
  };

  const toggleTimelineItem = (index: number) => {
    setExpandedTimelineItem(expandedTimelineItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-lightGray">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-darkGray font-cormorant">
              Рамазан Абдулатипов
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#biography" className="text-darkGray hover:text-gold transition-colors">Биография</a>
              <a href="#books-catalog" className="text-darkGray hover:text-gold transition-colors">Книги</a>
              <a href="#paintings" className="text-darkGray hover:text-gold transition-colors">Картины</a>
              <a href="#music" className="text-darkGray hover:text-gold transition-colors">Музыка</a>
              <a href="#dagestan" className="text-darkGray hover:text-gold transition-colors">Дагестан</a>
              <a href="#contacts" className="text-darkGray hover:text-gold transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-darkGray to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
                Рамазан Гаджимурадович
                <span className="block text-gold">Абдулатипов</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 font-openSans leading-relaxed">
                Выдающийся государственный деятель, писатель, художник и композитор. 
                Бывший глава Республики Дагестан, автор более 20 книг, создатель уникальных 
                живописных произведений и музыкальных композиций.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gold hover:bg-yellow-600 text-white px-8 py-3" onClick={() => document.getElementById('creative')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Творчество
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkGray px-8 py-3" onClick={() => document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="User" size={20} className="mr-2" />
                  Биография
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://cdn.poehali.dev/files/c7f2ea43-a593-4eea-b990-d54d215c95c0.jpeg" 
                alt="Рамазан Гаджимурадович Абдулатипов"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto mb-6"
              />
              
              {/* Quote under photo */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 text-center border-2 border-gold/30 shadow-2xl">
                <blockquote className="text-lg text-white mb-6 font-openSans leading-relaxed font-bold drop-shadow-lg">
                  "Настоящий лидер должен не только управлять но и вдохновлять не только решать 
                  проблемы настоящего но и создавать основы для будущих поколений. Культура и 
                  образование — это фундамент любого прогресса."
                </blockquote>
                <cite className="text-gold font-black font-cormorant text-2xl drop-shadow-lg font-extrabold">— Рамазан Абдулатипов</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-20 bg-white">
        <div className="container mx-auto px-6">


          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Биография
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto font-openSans leading-relaxed">
            Жизненный путь выдающегося государственного деятеля, мыслителя и творческой личности, 
            посвятившего себя служению народу и развитию культурного наследия Дагестана
          </p>
          
          {/* Early Life */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-cormorant text-darkGray">Ранние годы и образование</h3>
              <p className="text-gray-600 font-openSans leading-relaxed">
                Рамазан Гаджимурадович Абдулатипов родился 4 августа 1946 года в селе Гебгута 
                Тляратинского района Дагестана. С детства проявлял незаурядные способности к учебе 
                и глубокий интерес к истории и культуре родного края.
              </p>
              <p className="text-gray-600 font-openSans leading-relaxed">
                Получил высшее образование в Дагестанском государственном университете, где 
                изучал философию и политологию. Уже в студенческие годы активно участвовал 
                в общественной жизни, проявляя лидерские качества.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-lg p-8 text-white">
              <Icon name="GraduationCap" size={48} className="mb-4" />
              <h4 className="text-xl font-bold mb-3 font-cormorant">Образование</h4>
              <ul className="space-y-2 font-openSans">
                <li>• Дагестанский государственный университет</li>
                <li>• Специальность: Философия, политология</li>
                <li>• Кандидат философских наук</li>
                <li>• Доктор политических наук</li>
              </ul>
            </div>
          </div>



          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 font-cormorant text-darkGray">
              Основные вехи жизни
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold"></div>
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16 w-full">
                    <Card 
                      className="cursor-pointer hover:shadow-lg transition-all duration-300" 
                      onClick={() => toggleTimelineItem(index)}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <Badge variant="outline" className="w-fit">{event.year}</Badge>
                            <h4 className="text-xl font-bold font-cormorant text-darkGray">
                              {event.title}
                            </h4>
                          </div>
                          <Icon 
                            name={expandedTimelineItem === index ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            className="text-gold transition-transform duration-200"
                          />
                        </div>
                        {expandedTimelineItem === index && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-600 font-openSans leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Dagestan Legacy Section */}
      <section id="dagestan" className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-cormorant text-darkGray">
              Деятельность в Дагестане
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-openSans leading-relaxed">
              В 2013 году, когда Абдулатипов возглавил Дагестан, республика считалась 
              одним из самых сложных регионов России. Период руководства ознаменовался 
              реализацией масштабных проектов развития региона, укрепления межнационального 
              согласия и культурного возрождения.
            </p>
            
            <div className="bg-gold/10 rounded-lg p-6 mb-12 text-left">
              <h3 className="text-2xl font-bold mb-4 font-cormorant text-darkGray text-center">
                Ключевые достижения и реформы
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Борьба с коррупцией</h4>
                      <p className="text-gray-600 font-openSans text-sm">Реформировал управление, обновил исполнительные органы и усилил контроль над чиновниками</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Инфраструктурное развитие</h4>
                      <p className="text-gray-600 font-openSans text-sm">Строительство и реконструкция дорог, коммуникаций, социальных объектов (школ, больниц, детсадов, спорткомплексов)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Развитие сельского хозяйства</h4>
                      <p className="text-gray-600 font-openSans text-sm">Программы поддержки аграриев, модернизация агрокомплексов, внедрение новых технологий, поддержка малых фермеров</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Образование и культура</h4>
                      <p className="text-gray-600 font-openSans text-sm">Открытие новых образовательных учреждений, ремонт школ и вузов, внедрение современных программ, поддержка культуры и традиций</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Безопасность и согласие</h4>
                      <p className="text-gray-600 font-openSans text-sm">Приоритет безопасности, снижение экстремизма, укрепление межнационального согласия и диалог между этническими и религиозными группами</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Экономическое развитие</h4>
                      <p className="text-gray-600 font-openSans text-sm">Проекты для развития промышленности, бизнеса, привлечения инвестиций, создание экономических зон и индустриальных парков</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">7</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-darkGray mb-1">Молодежь и спорт</h4>
                      <p className="text-gray-600 font-openSans text-sm">Молодежные и спортивные программы, строительство спортобъектов, популяризация здорового образа жизни</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-left hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Shield" size={32} className="text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-3 font-cormorant">Стабилизация региона</h3>
                  <p className="text-gray-600 font-openSans text-sm">
                    Значительное улучшение ситуации с безопасностью и снижение социальной напряженности
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-left hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="TrendingUp" size={32} className="text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-3 font-cormorant">Экономический рост</h3>
                  <p className="text-gray-600 font-openSans text-sm">
                    Привлечение инвестиций и создание новых рабочих мест в различных отраслях экономики
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-left hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Heart" size={32} className="text-gold mb-4" />
                  <h3 className="text-lg font-bold mb-3 font-cormorant">Социальное развитие</h3>
                  <p className="text-gray-600 font-openSans text-sm">
                    Улучшение качества жизни населения через развитие образования, здравоохранения и культуры
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Works Section */}
      <section id="creative" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Творческое наследие
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans">
            Многогранный талант, воплощенный в литературе, живописи и музыке
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Books */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-cormorant text-darkGray">Книги</h3>
                <p className="text-gray-600 mb-6 font-openSans">
                  Более 20 опубликованных книг по политике, философии и культуре
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/89cafe64-fc26-4592-9f2d-a2a7877082fe.jpeg" 
                  alt="Книги Рамазана Абдулатипова"
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="mb-2">Философия</Badge>
                <Badge variant="secondary" className="mb-2 ml-2">Политика</Badge>
                <Button className="mt-4 bg-gold hover:bg-yellow-600 text-white" onClick={() => document.getElementById('books-catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Каталог книг
                </Button>
              </CardContent>
            </Card>

            {/* Paintings */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-cormorant text-darkGray">Картины</h3>
                <p className="text-gray-600 mb-6 font-openSans">
                  Живописные работы, отражающие красоту Кавказа и философские размышления
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/1776b388-f570-41d6-a23f-a04d68d21513.jpeg" 
                  alt="Картины Рамазана Абдулатипова"
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="mb-2">Пейзажи</Badge>
                <Badge variant="secondary" className="mb-2 ml-2">Портреты</Badge>
                <Button className="mt-4 bg-gold hover:bg-yellow-600 text-white" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть галерею
                </Button>
              </CardContent>
            </Card>

            {/* Music */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Music" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-cormorant text-darkGray">Музыка</h3>
                <p className="text-gray-600 mb-6 font-openSans">
                  Музыкальные композиции, вдохновленные народными традициями Дагестана
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/77684f27-14a7-443e-a139-e77aad289f5b.jpeg" 
                  alt="Музыка Рамазана Абдулатипова"
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="mb-2">Народная музыка</Badge>
                <Badge variant="secondary" className="mb-2 ml-2">Композиции</Badge>
                <Button className="mt-4 bg-gold hover:bg-yellow-600 text-white" onClick={() => document.getElementById('music-player')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Play" size={16} className="mr-2" />
                  Слушать музыку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Галерея живописи
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans">
            Коллекция картин, воплощающих философские размышления и красоту родного края
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {paintings.map((painting) => (
              <Dialog key={painting.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={painting.image} 
                        alt={painting.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-cormorant text-darkGray">{painting.title}</h3>
                      <p className="text-gray-600 font-openSans text-sm mb-4">{painting.description}</p>
                      <Button className="bg-gold hover:bg-yellow-600 text-white w-full">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={painting.image} 
                        alt={painting.title}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold font-cormorant text-darkGray">{painting.title}</h3>
                      <p className="text-gray-600 font-openSans leading-relaxed">{painting.description}</p>
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2 font-cormorant">Техника:</h4>
                        <p className="text-gray-600 font-openSans">Масло на холсте</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section id="music-player" className="py-20 bg-lightGray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Музыкальные композиции
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans">
            Мелодии, вдохновленные народными традициями и философскими размышлениями
          </p>
          
          <div className="max-w-2xl mx-auto">
            {/* Current Track Display */}
            <Card className="mb-8 bg-gradient-to-r from-darkGray to-gray-800 text-white">
              <CardContent className="p-8 text-center">
                <Icon name="Music" size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 font-cormorant">{musicTracks[currentTrack].title}</h3>
                <p className="text-gray-300 mb-6 font-openSans">{musicTracks[currentTrack].description}</p>
                
                {/* Player Controls */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-gold"
                    onClick={() => selectTrack(currentTrack > 0 ? currentTrack - 1 : musicTracks.length - 1)}
                  >
                    <Icon name="SkipBack" size={24} />
                  </Button>
                  
                  <Button 
                    size="icon" 
                    className="bg-gold hover:bg-yellow-600 text-white w-16 h-16"
                    onClick={togglePlay}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-gold"
                    onClick={() => selectTrack(currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0)}
                  >
                    <Icon name="SkipForward" size={24} />
                  </Button>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                  <div className="bg-gold h-2 rounded-full w-1/3 transition-all duration-300"></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-300">
                  <span>1:15</span>
                  <span>{musicTracks[currentTrack].duration}</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Track List */}
            <div className="space-y-2">
              {musicTracks.map((track, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-200 ${
                    index === currentTrack ? 'bg-gold text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => selectTrack(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-semibold font-cormorant ${
                          index === currentTrack ? 'text-white' : 'text-darkGray'
                        }`}>
                          {track.title}
                        </h4>
                        <p className={`text-sm font-openSans ${
                          index === currentTrack ? 'text-yellow-100' : 'text-gray-600'
                        }`}>
                          {track.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm ${
                          index === currentTrack ? 'text-yellow-100' : 'text-gray-500'
                        }`}>
                          {track.duration}
                        </span>
                        {index === currentTrack && isPlaying && (
                          <Icon name="Volume2" size={16} className="text-white" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Catalog Section */}
      <section id="books-catalog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Каталог книг
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans">
            Коллекция философских и политических трудов, доступных для приобретения
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {books.map((book) => (
              <Dialog key={book.id}>
                <DialogTrigger asChild>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 relative cursor-pointer">
                    <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className="w-24 h-32 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      {book.image ? (
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                          <Icon name="Book" size={32} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3">{book.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 font-cormorant text-darkGray group-hover:text-gold transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 font-openSans text-sm mb-4 leading-relaxed">
                        {book.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>Год: {book.year}</span>
                        <span>•</span>
                        <span>Страниц: {book.pages}</span>
                        <span>•</span>
                        <span>ISBN: {book.isbn}</span>
                      </div>
                      <div className="flex justify-end">
                        <Button className="bg-gold hover:bg-yellow-600 text-white">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Заказать
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute top-2 right-2 bg-darkGray text-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs z-10">
                    <p className="text-sm font-openSans leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      {book.image ? (
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-96 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                          <Icon name="Book" size={64} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <Badge variant="outline">{book.category}</Badge>
                      <h3 className="text-3xl font-bold font-cormorant text-darkGray">{book.title}</h3>
                      <p className="text-gray-600 font-openSans leading-relaxed">{book.description}</p>
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Год издания:</span>
                          <span>{book.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Страниц:</span>
                          <span>{book.pages}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">ISBN:</span>
                          <span>{book.isbn}</span>
                        </div>

                      </div>
                      <Button className="bg-gold hover:bg-yellow-600 text-white w-full">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Order Form */}
          <Card className="max-w-2xl mx-auto bg-lightGray">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 font-cormorant text-darkGray text-center">
                Форма заказа
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-darkGray mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-darkGray mb-2">Какую книгу хотите заказать?</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent">
                    <option>Выберите книгу</option>
                    {books.map((book) => (
                      <option key={book.id} value={book.id}>
                        {book.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-darkGray mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Дополнительные пожелания..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <Button className="bg-gold hover:bg-yellow-600 text-white px-12 py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заказ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Видео-отзывы и интервью
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans">
            Личные свидетельства коллег и друзей о деятельности Рамазана Гаджимурадовича
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Коллега по госслужбе
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    Воспоминания о совместной работе в Государственной Думе
                  </p>
                  <Badge variant="secondary">5:32</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Художник-коллега
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    О творческом пути и художественном видении
                  </p>
                  <Badge variant="secondary">7:18</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Житель Дагестана
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    Благодарность за вклад в развитие республики
                  </p>
                  <Badge variant="secondary">4:45</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Музыкант
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    О музыкальном творчестве и любви к народным мелодиям
                  </p>
                  <Badge variant="secondary">6:22</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Историк
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    Анализ исторического значения деятельности
                  </p>
                  <Badge variant="secondary">8:10</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-darkGray to-gray-800 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-gold" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-cormorant text-darkGray">
                    Философ
                  </h3>
                  <p className="text-gray-600 font-openSans text-sm mb-3">
                    О философских взглядах и литературном наследии
                  </p>
                  <Badge variant="secondary">9:33</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Exhibitions & Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-cormorant text-darkGray">
            Анонсы выставок
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-white p-3 rounded-lg">
                    <Icon name="Calendar" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-cormorant">Ретроспективная выставка</h3>
                    <p className="text-gray-600 font-openSans mb-2">
                      Выставка живописных работ "Горы и души" в Центральном музее искусств
                    </p>
                    <Badge>Осень 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-white p-3 rounded-lg">
                    <Icon name="BookOpen" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-cormorant">Презентация новой книги</h3>
                    <p className="text-gray-600 font-openSans mb-2">
                      Презентация сборника философских эссе "Размышления о времени"
                    </p>
                    <Badge>Зима 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-cormorant text-darkGray">
            Отзывы и мнения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-gold">
              <CardContent className="p-8">
                <p className="text-gray-600 italic mb-4 font-openSans">
                  "Рамазан Гаджимурадович — это человек уникального масштаба, 
                  сочетающий в себе талант политика, художника и мыслителя."
                </p>
                <div className="text-darkGray font-semibold">— Коллега по государственной службе</div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-gold">
              <CardContent className="p-8">
                <p className="text-gray-600 italic mb-4 font-openSans">
                  "Его картины передают глубину души горца и философское 
                  осмысление бытия. Это настоящее искусство."
                </p>
                <div className="text-darkGray font-semibold">— Искусствовед</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-darkGray text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 font-cormorant">Контакты</h2>
          <p className="text-xl mb-12 text-gray-300 font-openSans">
            Для сотрудничества и приобретения творческих работ
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
            <Card className="bg-white text-darkGray">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-bold mb-2 font-cormorant">Email</h3>
                <p className="font-openSans">info@abdullatipov.ru</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-darkGray">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-bold mb-2 font-cormorant">Телефон</h3>
                <p className="font-openSans">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-openSans">
            © 2024 Рамазан Абдулатипов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;