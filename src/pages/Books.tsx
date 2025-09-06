import Icon from '@/components/ui/icon';

const Books = () => {
  const books = [
    {
      title: "Высокий перевал",
      year: "1972",
      genre: "Поэзия",
      description: "Первый поэтический сборник, посвященный родным горам Дагестана и его народу.",
      pages: 128,
      publisher: "Дагестанское книжное издательство"
    },
    {
      title: "Горные родники",
      year: "1978", 
      genre: "Поэзия",
      description: "Лирические стихотворения о природе Кавказа, любви и философских размышлениях.",
      pages: 156,
      publisher: "Советский писатель"
    },
    {
      title: "Время больших дел",
      year: "1984",
      genre: "Публицистика",
      description: "Сборник статей и эссе о развитии национальных республик в составе СССР.",
      pages: 240,
      publisher: "Политиздат"
    },
    {
      title: "Дагестан - мой дом",
      year: "1995",
      genre: "Поэзия",
      description: "Патриотические стихи о малой родине, традициях и культуре дагестанских народов.",
      pages: 192,
      publisher: "Дагестанское книжное издательство"
    },
    {
      title: "Россия и регионы", 
      year: "2001",
      genre: "Политология",
      description: "Аналитическая работа о федеративном устройстве России и национальной политике.",
      pages: 320,
      publisher: "Международные отношения"
    },
    {
      title: "Мосты понимания",
      year: "2008",
      genre: "Мемуары",
      description: "Воспоминания о дипломатической службе, работе в правительстве и общественной деятельности.",
      pages: 280,
      publisher: "Эпоха"
    },
    {
      title: "Многоцветие единства",
      year: "2015",
      genre: "Поэзия",
      description: "Стихи о дружбе народов, переводы классической восточной поэзии на русский язык.",
      pages: 200,
      publisher: "Дагестанское книжное издательство"
    },
    {
      title: "Завещание сыну",
      year: "2020",
      genre: "Философия",
      description: "Размышления о жизни, мудрости предков и наставления для будущих поколений.",
      pages: 160,
      publisher: "Родной край"
    }
  ];

  const translations = [
    {
      author: "Омар Хайям",
      work: "Рубаи", 
      year: "1990",
      description: "Классические четверостишия персидского поэта в переводе на русский язык."
    },
    {
      author: "Фирдоуси",
      work: "Шахнаме (фрагменты)",
      year: "1995", 
      description: "Избранные эпизоды великого эпоса о персидских царях и героях."
    },
    {
      author: "Низами Гянджеви",
      work: "Лейли и Меджнун",
      year: "2000",
      description: "Поэма о трагической любви в переводе с фарси."
    }
  ];

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Поэзия': return 'bg-blue-100 text-blue-800';
      case 'Публицистика': return 'bg-green-100 text-green-800';
      case 'Политология': return 'bg-purple-100 text-purple-800';
      case 'Мемуары': return 'bg-orange-100 text-orange-800';
      case 'Философия': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
            <img 
              src="/img/1cd86244-b8ce-4ad5-be1d-05cf5e979f2f.jpg" 
              alt="Книги Рамазана Абдулатипова"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Литературное наследие
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Поэтические сборники, публицистические работы и переводы классиков восточной литературы
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="BookOpen" size={24} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{books.length}</p>
            <p className="text-gray-600">Опубликованных книг</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Languages" size={24} className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{translations.length}</p>
            <p className="text-gray-600">Переводов</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Calendar" size={24} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">50+</p>
            <p className="text-gray-600">Лет творчества</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} className="text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">Множество</p>
            <p className="text-gray-600">Литературных наград</p>
          </div>
        </div>

        {/* Books Collection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Библиография
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getGenreColor(book.genre)}`}>
                      {book.genre}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{book.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {book.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Icon name="FileText" size={16} className="mr-1" />
                        {book.pages} стр.
                      </span>
                      <span className="flex items-center">
                        <Icon name="Building2" size={16} className="mr-1" />
                        {book.publisher}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Translations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Переводы классиков
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.map((translation, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <Icon name="Languages" size={32} className="mx-auto text-amber-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {translation.author}
                  </h3>
                  <p className="text-lg text-amber-700 font-medium">
                    {translation.work}
                  </p>
                </div>
                <p className="text-gray-700 text-center leading-relaxed mb-3">
                  {translation.description}
                </p>
                <p className="text-center text-sm text-gray-500 font-medium">
                  Переведено в {translation.year} году
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Literary Quote */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Quote" size={48} className="mx-auto mb-6 text-white" />
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "Поэзия — это мост между душой человека и бесконечностью. 
            Через слово мы передаем не только мысли, но и саму суть бытия."
          </blockquote>
          <cite className="text-lg font-semibold">— Рамазан Абдулатипов</cite>
        </div>

      </div>
    </div>
  );
};

export default Books;