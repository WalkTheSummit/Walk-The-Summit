import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/images/hero-slider-1.svg',
      title: "We're a student-led organization dedicated to",
      subtitle: 'transforming the lives of children',
      description: 'in the remote villages of the Himalayas.',
      cta: {
        text: 'Projects',
        link: '#projects'
      }
    },
    {
      image: '/assets/images/hero-slider-2.svg',
      title: 'For the Students',
      subtitle: 'By the Students',
      description: 'Making education accessible to every child in the Himalayas.',
      cta: {
        text: 'Learn More',
        link: '/about'
      }
    },
    {
      image: '/assets/images/hero-slider-3.svg',
      title: 'Join Our Mission',
      subtitle: 'Make a Difference',
      description: 'Help us create lasting change in remote Himalayan communities.',
      cta: {
        text: 'Get Involved',
        link: '#get-involved'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                {slide.subtitle}
              </h2>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                {slide.description}
              </p>
              <a
                href={slide.cta.link}
                className="inline-block px-8 py-3 text-lg font-semibold bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-200 animate-slide-up"
              >
                {slide.cta.text}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-200 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-200 focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
