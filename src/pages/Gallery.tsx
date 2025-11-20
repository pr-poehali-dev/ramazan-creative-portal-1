import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Gallery = () => {
  const [interiorModal, setInteriorModal] = useState<{ src: string; title: string; description?: string } | null>(null);

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
      year: "2021",
      interiorImages: [
        {
          title: "В элегантной гостиной с классическим дизайном",
          description: "Картина гармонично вписывается в изысканный интерьер с бирюзовыми акцентами и золотыми деталями",
          image: "https://cdn.poehali.dev/files/44280f44-e525-436e-a089-34ac2e5d0c9f.jpg"
        }
      ]
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
      title: "Зимний закат",
      description: "Мягкие голубые и розовые тона передают спокойствие зимнего вечера над горами. Размер: 50x70 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/97c8e88f-9c37-48ce-b5d7-3f8ed9de3f18.jpeg",
      year: "2022"
    },
    {
      id: 6,
      title: "Розовые облака",
      description: "Нежная абстракция с розово-голубой палитрой, вдохновленная рассветом в горах. Размер: 60x80 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/f3ea59c1-e9e0-4d82-af79-e6cc4dc7d37c.jpeg",
      year: "2023"
    },
    {
      id: 7,
      title: "Древо жизни",
      description: "Символическая композиция с золотистым деревом на темно-синем фоне. Размер: 60x90 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/71ee7a22-0fb1-423b-9c8e-8b1d0e3c1ec9.jpeg",
      year: "2023"
    },
    {
      id: 8,
      title: "Гармония природы",
      description: "Яркая композиция с чередованием теплых и холодных оттенков. Размер: 50x70 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/1a45d6f3-ffd5-472e-b95a-aed8a87f4c83.jpeg",
      year: "2023"
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
      year: "2024",
      interiorImages: [
        {
          title: "В интерьере современной гостиной",
          description: "Картина прекрасно дополняет современный интерьер с зелеными оттенками",
          image: "https://cdn.poehali.dev/files/b76408e9-a746-4de8-8049-492a55ba0d7e.jpg"
        }
      ]
    },
    {
      id: 12,
      title: "Горные вершины",
      description: "Мощная экспрессивная композиция с острыми пиками в ярких зелено-красных тонах. Размер: 90x120 см, материал: акрил",
      image: "https://cdn.poehali.dev/files/8f0d913a-b971-4c0d-b1dd-b02013104f81.jpeg",
      year: "2024",
      interiorImages: [
        {
          title: "Дизайн интерьера с картиной",
          description: "Картина создает яркий акцент в стильном интерьере с оранжевыми тонами",
          image: "https://cdn.poehali.dev/files/c5c73862-eb67-40b0-8394-3e76862260d2.jpg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4 font-cormorant text-darkGray">
            Галерея живописи
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto font-openSans text-xl leading-relaxed">
            Коллекция картин, воплощающих философские размышления и красоту родного края. 
            Каждая работа создана акриловыми красками и отражает глубокую связь автора с природой Кавказа.
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
                    <div className="space-y-4">
                      <img 
                        src={painting.image} 
                        alt={painting.title}
                        className="w-full rounded-lg"
                      />
                      {painting.interiorImages && painting.interiorImages.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-darkGray font-cormorant">Картина в интерьере:</h4>
                          {painting.interiorImages.map((interior, idx) => (
                            <div 
                              key={idx}
                              className="relative group cursor-pointer"
                              onClick={() => setInteriorModal({
                                src: interior.image,
                                title: interior.title,
                                description: interior.description
                              })}
                            >
                              <img 
                                src={interior.image} 
                                alt={interior.title}
                                className="w-full rounded-lg hover:opacity-90 transition-opacity"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                                <Icon name="ZoomIn" size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold font-cormorant text-darkGray">{painting.title}</h3>
                      <p className="text-gray-600 font-openSans leading-relaxed">{painting.description}</p>
                      <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Год создания:</span>
                          <span>{painting.year}</span>
                        </div>
                      </div>
                      <Button className="bg-gold hover:bg-yellow-600 text-white w-full">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать картину
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto mt-16 bg-lightGray">
            <CardContent className="p-8 bg-[#b8860b1a]">
              <h3 className="text-2xl font-bold mb-6 font-cormorant text-darkGray text-center">Заказать картину</h3>
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
                  <label className="block text-sm font-semibold text-darkGray mb-2">Заинтересовавшая картина</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent">
                    <option>Выберите картину</option>
                    {paintings.map((painting) => (
                      <option key={painting.id} value={painting.id}>
                        {painting.title} ({painting.year})
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

      {interiorModal && (
        <Dialog open={!!interiorModal} onOpenChange={() => setInteriorModal(null)}>
          <DialogContent className="max-w-5xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-cormorant text-darkGray">{interiorModal.title}</h3>
              <img 
                src={interiorModal.src} 
                alt={interiorModal.title}
                className="w-full rounded-lg"
              />
              {interiorModal.description && (
                <p className="text-gray-600 font-openSans leading-relaxed">{interiorModal.description}</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;
