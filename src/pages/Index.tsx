import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Добро пожаловать на сайт Рамазана Абдулатипова
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Государственный деятель, философ, писатель, художник и композитор.
            Экс-глава Республики Дагестан, автор более 20 книг.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Biography */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📖 Биография
              </CardTitle>
              <CardDescription>
                Жизненный путь выдающегося деятеля
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                От села Гебгута до высших эшелонов власти. История становления личности.
              </p>
              <Badge variant="secondary" className="mt-2">Основная информация</Badge>
            </CardContent>
          </Card>

          {/* Books */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📚 Книги
              </CardTitle>
              <CardDescription>
                Литературное наследие автора
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Более 20 опубликованных книг по философии, политике и культуре.
              </p>
              <Badge variant="secondary" className="mt-2">Философия • Политика</Badge>
            </CardContent>
          </Card>

          {/* Paintings */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Картины
              </CardTitle>
              <CardDescription>
                Художественное творчество
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Живописные работы, отражающие красоту Кавказа и философские размышления.
              </p>
              <Badge variant="secondary" className="mt-2">Пейзажи • Абстракции</Badge>
            </CardContent>
          </Card>

          {/* Music */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎵 Музыка
              </CardTitle>
              <CardDescription>
                Музыкальные композиции
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Мелодии, вдохновленные народными традициями Дагестана.
              </p>
              <Badge variant="secondary" className="mt-2">Народная музыка</Badge>
            </CardContent>
          </Card>

          {/* Dagestan */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏔️ Дагестан
              </CardTitle>
              <CardDescription>
                Деятельность в республике
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Период руководства Дагестаном и реализованные проекты развития.
              </p>
              <Badge variant="secondary" className="mt-2">2013-2017</Badge>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏗️ Проекты
              </CardTitle>
              <CardDescription>
                Наследие и инициативы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Культурные объекты и проекты, продолжающие служить людям.
              </p>
              <Badge variant="secondary" className="mt-2">Культурное наследие</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Контакты</h2>
              <div className="space-y-2 text-gray-600">
                <p>📧 info@example.com</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>📍 Махачкала, Республика Дагестан</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;