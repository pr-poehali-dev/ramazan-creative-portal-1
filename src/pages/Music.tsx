import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Music = () => {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const musicWorks = [
    {
      id: 1,
      title: "Горная песня",
      album: "Голос Кавказа",
      year: "2005",
      duration: "4:32",
      genre: "Народная музыка",
      description: "Лирическая композиция, вдохновленная красотой дагестанских гор и традиционными мелодиями.",
      lyrics: "В горах моих, где небо так близко,\nЗвучит мелодия родной земли...",
      collaborators: "Совместно с ансамблем 'Лезгинка'"
    },
    {
      id: 2,
      title: "Мать-Родина",
      album: "Патриотические мотивы",
      year: "2008",
      duration: "5:15",
      genre: "Патриотическая",
      description: "Торжественная песня, посвященная любви к Отечеству и малой родине.",
      lyrics: "О, родина моя, Дагестан прекрасный,\nТвои вершины - символ красоты...",
      collaborators: "Государственный хор РД"
    },
    {
      id: 3,
      title: "Колыбельная дочери",
      album: "Семейные мотивы",
      year: "2010",
      duration: "3:48",
      genre: "Колыбельная",
      description: "Нежная мелодия, написанная для дочери, с элементами традиционного дагестанского фольклора.",
      lyrics: "Спи, моя малышка, под луной кавказской,\nСны твои пусть будут светлыми...",
      collaborators: "Соло автора"
    },
    {
      id: 4,
      title: "Дружба народов",
      album: "Единство",
      year: "2012",
      duration: "6:20",
      genre: "Гимн",
      description: "Торжественное произведение о единстве народов России и Дагестана.",
      lyrics: "Мы разные, но едины духом,\nНас связывает общая судьба...",
      collaborators: "Многонациональный хор"
    },
    {
      id: 5,
      title: "Река времени",
      album: "Философские размышления",
      year: "2015",
      duration: "7:12",
      genre: "Медитативная",
      description: "Глубокая композиция о течении времени, мудрости лет и смене поколений.",
      lyrics: "Течет река времени неспешно,\nНесет она наши мечты...",
      collaborators: "Камерный оркестр"
    },
    {
      id: 6,
      title: "Весна в горах",
      album: "Времена года",
      year: "2018",
      duration: "4:05",
      genre: "Природная лирика",
      description: "Светлая мелодия о пробуждении природы в кавказских горах.",
      lyrics: "Пришла весна в мои родные горы,\nЗапели птицы песни о любви...",
      collaborators: "Детский хор 'Радуга'"
    }
  ];

  const albums = [
    {
      title: "Голос Кавказа",
      year: "2005",
      tracks: 8,
      description: "Дебютный музыкальный альбом с традиционными мотивами"
    },
    {
      title: "Патриотические мотивы", 
      year: "2008",
      tracks: 6,
      description: "Сборник песен о любви к Родине и родному краю"
    },
    {
      title: "Семейные мотивы",
      year: "2010",
      tracks: 10,
      description: "Интимные композиции о семье и близких людях"
    },
    {
      title: "Единство",
      year: "2012", 
      tracks: 7,
      description: "Альбом о дружбе народов и межнациональном согласии"
    }
  ];

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case 'Народная музыка': return 'bg-green-100 text-green-800';
      case 'Патриотическая': return 'bg-red-100 text-red-800';
      case 'Колыбельная': return 'bg-blue-100 text-blue-800';
      case 'Гимн': return 'bg-purple-100 text-purple-800';
      case 'Медитативная': return 'bg-indigo-100 text-indigo-800';
      case 'Природная лирика': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
            <Icon name="Music" size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Музыкальное творчество
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Песни и музыкальные произведения, созданные с любовью к родной земле
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Music" size={24} className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{musicWorks.length}</p>
            <p className="text-gray-600">Композиций</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Disc" size={24} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{albums.length}</p>
            <p className="text-gray-600">Альбомов</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Mic" size={24} className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">6</p>
            <p className="text-gray-600">Жанров</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">15+</p>
            <p className="text-gray-600">Коллабораций</p>
          </div>
        </div>

        {/* Music Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Музыкальные произведения
          </h2>
          
          <div className="space-y-6">
            {musicWorks.map((track, index) => (
              <div key={track.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  
                  {/* Track Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <button
                        onClick={() => setPlayingTrack(playingTrack === track.id ? null : track.id)}
                        className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                      >
                        <Icon name={playingTrack === track.id ? "Pause" : "Play"} size={20} />
                      </button>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                        <p className="text-gray-600">{track.album} • {track.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {track.description}
                    </p>
                    
                    {playingTrack === track.id && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Текст произведения:</h4>
                        <p className="text-gray-700 italic whitespace-pre-line">
                          {track.lyrics}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Track Details */}
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <div className="flex flex-col space-y-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium w-fit ${getGenreColor(track.genre)}`}>
                        {track.genre}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {track.duration}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Icon name="Users" size={16} className="mr-1" />
                        {track.collaborators}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Albums Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Дискография
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {albums.map((album, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Icon name="Disc" size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {album.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {album.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{album.year}</span>
                    <span>{album.tracks} треков</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Musical Philosophy */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <Icon name="Heart" size={48} className="mx-auto mb-6 text-white" />
          <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
            "Музыка — это язык души, который понимают все народы. 
            Через мелодию я стремлюсь передать красоту и мудрость моего народа."
          </blockquote>
          <cite className="text-lg font-semibold">— Рамазан Абдулатипов</cite>
        </div>

      </div>
    </div>
  );
};

export default Music;