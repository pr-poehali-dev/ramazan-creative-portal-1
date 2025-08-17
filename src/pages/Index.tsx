import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
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
              </CardContent>
            </Card>
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