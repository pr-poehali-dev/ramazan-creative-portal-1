import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
      title: "Горы моей души",
      description: "Пейзаж родного Дагестана, написанный в минуты глубоких размышлений о судьбе народа",
      image: "/img/c6edf979-cb5b-4af5-93b3-7d2d790d1df6.jpg",
      year: "2018"
    },
    {
      id: 2,
      title: "Портрет мудреца",
      description: "Образ народного философа, воплощающий вековую мудрость горцев",
      image: "/img/21811240-497b-4d70-b0f1-ded2f9b07f06.jpg",
      year: "2019"
    },
    {
      id: 3,
      title: "Абстракция времени",
      description: "Философское осмысление бренности бытия и вечности духа",
      image: "/img/ed7552f1-63ba-48be-ae4f-007e30996827.jpg",
      year: "2020"
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
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
              <a href="#books" className="text-darkGray hover:text-gold transition-colors">Книги</a>
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
                <Button className="bg-gold hover:bg-yellow-600 text-white px-8 py-3">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Творчество
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkGray px-8 py-3">
                  <Icon name="User" size={20} className="mr-2" />
                  Биография
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/img/a8d0f2ad-ff0c-4942-b28a-52021d99017f.jpg" 
                alt="Рамазан Абдулатипов"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
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
                  src="/img/286bbf1f-5830-40f1-b4dc-990506adc2fc.jpg" 
                  alt="Книги Рамазана Абдулатипова"
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="mb-2">Философия</Badge>
                <Badge variant="secondary" className="mb-2 ml-2">Политика</Badge>
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
                  src="/img/58544fe2-70af-48cd-9932-4db058ca954d.jpg" 
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
                <div className="bg-gradient-to-r from-gold to-yellow-600 rounded-lg mb-6 w-full h-48 flex items-center justify-center">
                  <Icon name="Music2" size={64} className="text-white opacity-50" />
                </div>
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
                      <p className="text-gray-600 font-openSans text-sm mb-3">{painting.description}</p>
                      <Badge variant="outline">{painting.year}</Badge>
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
                      <Badge variant="outline">{painting.year}</Badge>
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

      {/* Dagestan Legacy Section */}
      <section id="dagestan" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-cormorant text-darkGray">
              Деятельность в Дагестане
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-openSans leading-relaxed">
              Период руководства Республикой Дагестан ознаменовался реализацией 
              масштабных проектов развития региона, укрепления межнационального 
              согласия и культурного возрождения.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="text-left">
                <CardContent className="p-8">
                  <Icon name="Building" size={32} className="text-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-cormorant">Инфраструктурные проекты</h3>
                  <p className="text-gray-600 font-openSans">
                    Развитие транспортной инфраструктуры, строительство школ и больниц, 
                    модернизация городской среды.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-left">
                <CardContent className="p-8">
                  <Icon name="Users" size={32} className="text-gold mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-cormorant">Социальные программы</h3>
                  <p className="text-gray-600 font-openSans">
                    Поддержка молодежи, развитие образования, укрепление 
                    межнационального диалога.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions & Events */}
      <section className="py-20 bg-lightGray">
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