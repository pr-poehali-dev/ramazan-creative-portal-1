import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const albums = [
    {
      id: 0,
      title: "Мелодии Цамаури",
      description: "Первый альбом с традиционными мелодиями",
      cover: "https://cdn.poehali.dev/files/1d18f7d6-a179-4c41-82ab-cf9109abd86f.jpeg",
      tracks: [
        { title: "Дагестан-моя молитва", duration: "4:15" },
        { title: "Возвращение", duration: "3:42" },
        { title: "Истина покоя", duration: "5:23" },
        { title: "Танец", duration: "3:18" },
        { title: "Дорога в молодость", duration: "4:07" },
        { title: "Чувство", duration: "3:55" },
        { title: "Аббасиния", duration: "4:31" },
        { title: "Весна пришла", duration: "3:29" },
        { title: "Утро в ауле", duration: "4:44" },
        { title: "Звонкая тоска", duration: "3:12" },
        { title: "Цветок Памира", duration: "5:08" }
      ]
    },
    {
      id: 1,
      title: "Душа Востока",
      description: "Второй альбом с восточными мотивами",
      cover: "https://cdn.poehali.dev/files/16c59f74-1127-4a9e-9f21-00c65c55fcb1.jpeg",
      tracks: [
        { title: "Восточный караван", duration: "4:22" },
        { title: "Дагестан", duration: "3:58" },
        { title: "Родной край", duration: "4:41" },
        { title: "Сабаб", duration: "3:33" },
        { title: "Прощание", duration: "5:15" },
        { title: "Тляратинка", duration: "3:47" },
        { title: "Полет над Москвой", duration: "4:29" },
        { title: "Тайная любовь", duration: "3:24" },
        { title: "Аведия", duration: "4:03" },
        { title: "Воспоминания", duration: "5:37" },
        { title: "Марта", duration: "3:51" },
        { title: "Аминка", duration: "3:16" },
        { title: "Вальс матери", duration: "4:54" },
        { title: "Ритмы Памира", duration: "3:39" },
        { title: "Айша", duration: "4:18" },
        { title: "Мама", duration: "5:02" },
        { title: "Иннарь", duration: "3:43" }
      ]
    }
  ];

  const currentAlbumData = albums[currentAlbum];
  const currentTrackData = currentAlbumData.tracks[currentTrack];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
  };

  const switchAlbum = (albumIndex: number) => {
    setCurrentAlbum(albumIndex);
    setCurrentTrack(0);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
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

      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 font-cormorant text-darkGray">
              Музыкальные композиции
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-openSans leading-relaxed">
              Музыкальные композиции, вдохновленные народными традициями Дагестана и 
              восточными мотивами. Каждая мелодия — это путешествие в мир красоты Кавказа.
            </p>
          </div>

          <div className="mb-12 flex justify-center gap-4">
            {albums.map((album, index) => (
              <Button
                key={album.id}
                onClick={() => switchAlbum(index)}
                className={`${
                  currentAlbum === index
                    ? 'bg-gold hover:bg-yellow-600 text-white'
                    : 'bg-white hover:bg-gray-100 text-darkGray border-2 border-gold'
                }`}
              >
                <Icon name="Disc3" size={16} className="mr-2" />
                {album.title}
              </Button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-gold to-yellow-600 p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative group">
                    <img 
                      src={currentAlbumData.cover} 
                      alt={currentAlbumData.title}
                      className="w-64 h-64 rounded-lg shadow-2xl object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
                  </div>
                  
                  <div className="flex-1 text-white">
                    <h2 className="text-4xl font-bold mb-3 font-cormorant">{currentAlbumData.title}</h2>
                    <p className="text-xl mb-6 text-yellow-100 font-openSans">{currentAlbumData.description}</p>
                    <div className="flex items-center gap-4 text-yellow-100">
                      <div className="flex items-center gap-2">
                        <Icon name="Music" size={20} />
                        <span>{currentAlbumData.tracks.length} треков</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} />
                        <span>Альбом 2016-2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-8 bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-cormorant text-darkGray">
                        {currentTrackData.title}
                      </h3>
                      <p className="text-gray-600 font-openSans">Трек {currentTrack + 1} из {currentAlbumData.tracks.length}</p>
                    </div>
                    <div className="text-right text-gray-600 font-openSans">
                      <div className="text-lg">{currentTrackData.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <Button 
                      size="lg"
                      onClick={togglePlay}
                      className="bg-gold hover:bg-yellow-600 text-white rounded-full w-16 h-16"
                    >
                      {isPlaying ? (
                        <Icon name="Pause" size={24} />
                      ) : (
                        <Icon name="Play" size={24} />
                      )}
                    </Button>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gold to-yellow-600 transition-all duration-300"
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => selectTrack(Math.max(0, currentTrack - 1))}
                      disabled={currentTrack === 0}
                    >
                      <Icon name="SkipBack" size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => selectTrack(Math.min(currentAlbumData.tracks.length - 1, currentTrack + 1))}
                      disabled={currentTrack === currentAlbumData.tracks.length - 1}
                    >
                      <Icon name="SkipForward" size={16} />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold mb-4 font-cormorant text-darkGray">Список треков:</h4>
                  <div className="max-h-96 overflow-y-auto space-y-1 pr-2">
                    {currentAlbumData.tracks.map((track, index) => (
                      <div
                        key={index}
                        onClick={() => selectTrack(index)}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          currentTrack === index
                            ? 'bg-gradient-to-r from-gold/20 to-yellow-600/20 border-l-4 border-gold'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-gray-400 font-semibold w-8">{index + 1}</span>
                            <div>
                              <div className={`font-semibold font-openSans ${
                                currentTrack === index ? 'text-gold' : 'text-darkGray'
                              }`}>
                                {track.title}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-openSans">{track.duration}</span>
                            {currentTrack === index && (
                              <Icon name="Volume2" size={16} className="text-gold" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gold/10 to-yellow-600/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-cormorant text-darkGray text-center">
                  О музыкальном творчестве
                </h3>
                <p className="text-gray-600 font-openSans leading-relaxed text-center mb-6">
                  Музыкальные композиции Рамазана Абдулатипова — это уникальное сочетание 
                  традиционных мотивов народов Дагестана и современного звучания. Каждая мелодия 
                  рассказывает историю о родной земле, её людях и культуре.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <Icon name="Disc3" size={32} className="mx-auto mb-3 text-gold" />
                    <div className="text-2xl font-bold text-gold mb-2">2</div>
                    <p className="text-gray-600 font-openSans">Альбома</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <Icon name="Music" size={32} className="mx-auto mb-3 text-gold" />
                    <div className="text-2xl font-bold text-gold mb-2">28</div>
                    <p className="text-gray-600 font-openSans">Композиций</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <audio ref={audioRef} />
    </div>
  );
};

export default Music;
