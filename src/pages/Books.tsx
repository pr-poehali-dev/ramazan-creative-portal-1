import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Books = () => {
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
      category: "Поэзия",
      isbn: "978-5-00901-234-5",
      image: "https://cdn.poehali.dev/files/abb8a252-0340-436d-8c46-1429644b3a4c.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-lightGray">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Icon name="ArrowLeft" size={24} className="text-gold" />
              <span className="text-darkGray font-bold text-xl">На главную</span>
            </Link>
            <img 
              src="https://cdn.poehali.dev/files/18a68986-9282-48ff-9b2e-853fee0cb669.png" 
              alt="Логотип" 
              className="h-16 w-auto"
            />
          </div>
        </div>
      </header>

      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 font-cormorant text-darkGray">Каталог книг</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-openSans leading-relaxed">
              Более 20 опубликованных книг по философии, политике, культуре и мемуаристике. 
              Каждая работа — результат многолетних размышлений и глубокого изучения 
              истории, культуры и традиций народов России и Кавказа.
            </p>
          </div>

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

          <Card className="max-w-2xl mx-auto bg-lightGray">
            <CardContent className="p-8 bg-[#b8860b1a]">
              <h3 className="text-2xl font-bold mb-6 font-cormorant text-darkGray text-center">Форма для обратной связи</h3>
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
                  <label className="block text-sm font-semibold text-darkGray mb-2">Комментарий</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    rows={4}
                    placeholder="Дополнительная информация или вопросы"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-gold hover:bg-yellow-600 text-white">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Books;
