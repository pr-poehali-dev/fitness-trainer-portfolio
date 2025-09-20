import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'workouts', 'results', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Персональные тренировки',
      description: 'Индивидуальные занятия с полным вниманием тренера',
      price: 'от 3000₽',
      features: ['Персональная программа', 'Контроль техники', 'Мотивация и поддержка'],
      icon: 'User'
    },
    {
      title: 'Онлайн тренировки',
      description: 'Тренировки в удобное время через видеосвязь',
      price: 'от 2000₽',
      features: ['Гибкое расписание', 'Домашние тренировки', 'Консультации 24/7'],
      icon: 'Video'
    },
    {
      title: 'Групповые занятия',
      description: 'Тренировки в небольших группах до 4 человек',
      price: 'от 1500₽',
      features: ['Групповая мотивация', 'Экономия бюджета', 'Социальное общение'],
      icon: 'Users'
    }
  ];

  const workouts = [
    {
      title: 'Силовые тренировки',
      description: 'Наращивание мышечной массы и увеличение силы',
      duration: '60-90 мин',
      icon: 'Dumbbell'
    },
    {
      title: 'Кардио тренировки',
      description: 'Жиросжигание и улучшение выносливости',
      duration: '45-60 мин',
      icon: 'Heart'
    },
    {
      title: 'Функциональный тренинг',
      description: 'Развитие всех групп мышц и координации',
      duration: '50-70 мин',
      icon: 'Target'
    },
    {
      title: 'Стретчинг и восстановление',
      description: 'Растяжка, расслабление и восстановление мышц',
      duration: '30-45 мин',
      icon: 'Smile'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Максим помог мне сбросить 15 кг за 4 месяца! Профессиональный подход и постоянная поддержка.',
      result: '-15 кг за 4 месяца'
    },
    {
      name: 'Дмитрий Смирнов',
      rating: 5,
      text: 'Отличный тренер! Составил индивидуальную программу, помог набрать мышечную массу.',
      result: '+8 кг мышц за 6 месяцев'
    },
    {
      name: 'Елена Козлова',
      rating: 5,
      text: 'Онлайн тренировки очень удобны. Тренируюсь дома, а результат как в зале!',
      result: 'Подтянутая фигура за 3 месяца'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-xl text-navy-800">
              Максим Фитнес
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'workouts', label: 'Тренировки' },
                { id: 'results', label: 'Результаты' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    activeSection === item.id ? 'text-orange-500' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                Достигай целей с
                <span className="text-orange-500"> персональным тренером</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Помогу тебе обрести форму мечты. Персональные и онлайн тренировки в Санкт-Петербурге.
                Индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Записаться на тренировку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('services')}
                  className="border-white text-white hover:bg-white hover:text-navy-800 px-8 py-3"
                >
                  Узнать цены
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">200+</div>
                  <div className="text-sm text-gray-400">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">5</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">95%</div>
                  <div className="text-sm text-gray-400">Достигают цели</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/6e9f20cf-8024-46f6-a619-12555860d955.jpg" 
                alt="Персональный тренер Максим"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">Сертифицированный тренер</div>
                <div className="text-xs opacity-90">ACSM, NASM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Привет! Меня зовут Максим, и я персональный фитнес-тренер с 5-летним опытом. 
              Моя миссия — помочь каждому достичь своих целей в фитнесе, будь то похудение, 
              набор мышечной массы или улучшение общего самочувствия.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Award" size={48} className="mx-auto text-orange-500 mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">Сертификации</h3>
                  <p className="text-gray-600">ACSM, NASM, специализация по питанию</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Users" size={48} className="mx-auto text-orange-500 mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">Опыт</h3>
                  <p className="text-gray-600">200+ успешных трансформаций клиентов</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Target" size={48} className="mx-auto text-orange-500 mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">Подход</h3>
                  <p className="text-gray-600">Индивидуальные программы для каждого</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выбери формат тренировок, который подходит именно тебе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                      <div className="text-2xl font-bold text-orange-500">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600"
                    onClick={() => scrollToSection('contact')}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section id="workouts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Виды тренировок
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Разнообразные программы для достижения любых целей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workouts.map((workout, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={workout.icon as any} size={32} className="text-orange-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{workout.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{workout.description}</p>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    {workout.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Результаты клиентов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Реальные трансформации людей, которые поверили в себя
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading font-semibold text-xl mb-4 text-navy-800">
                  Впечатляющие результаты за 6 месяцев:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">-15кг</div>
                    <div className="text-sm text-gray-600">Средняя потеря веса</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">+8кг</div>
                    <div className="text-sm text-gray-600">Прирост мышц</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">95%</div>
                    <div className="text-sm text-gray-600">Достигают цели</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">100%</div>
                    <div className="text-sm text-gray-600">Улучшение самочувствия</div>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => scrollToSection('contact')}
              >
                Хочу такой же результат!
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/e8349076-3497-424a-b8b1-58d1ac5d71c5.jpg" 
                alt="Результаты трансформации клиентов"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="text-sm font-medium text-navy-800">До и После</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-800">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что говорят люди, которые достигли своих целей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-medium text-navy-800">{review.name}</div>
                    <Badge className="mt-2 bg-green-100 text-green-700">
                      {review.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Контакты
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Готов начать? Свяжись со мной любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-lg">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Локация</div>
                    <div className="text-gray-300">Санкт-Петербург, центр города</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-lg">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-gray-300">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-lg">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">maxim.fitness@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-500 rounded-lg">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-gray-300">@maxim_fitness_spb</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-700">
                <h3 className="font-heading font-semibold text-lg mb-3">Режим работы</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Пн-Пт: 7:00 - 22:00</div>
                  <div>Сб-Вс: 9:00 - 20:00</div>
                  <div className="text-sm">Онлайн консультации 24/7</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f20e11aa-5411-48b5-9d59-8f0c7f619fba.jpg" 
                alt="Тренировочный процесс"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-navy-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('tel:+79991234567')}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="font-heading font-bold text-xl">Максим Фитнес</div>
            <p className="text-gray-400">
              Персональный тренер в Санкт-Петербурге | Онлайн и офлайн тренировки
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
            <div className="text-sm text-gray-500 pt-4 border-t border-gray-800">
              © 2024 Максим Фитнес. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;