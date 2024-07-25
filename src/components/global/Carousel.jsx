import React from 'react'
import { useState } from 'react';

export const Carousel = () => {
  const slides = [
    'https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/slider%2Fslider-3.jpg?alt=media&token=2c1879ed-30cb-4d2c-bb8e-054c6f029db6',
    'https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/slider%2Fslider-2.jpeg?alt=media&token=afdc3a0e-a8bc-469c-b2b1-41a772976e24',
    'https://firebasestorage.googleapis.com/v0/b/rotaract-bbsr.appspot.com/o/slider%2Fslider-1.jpeg?alt=media&token=a1266d46-5a27-4f0a-a5d1-c5d9f93e4d7e'
  ];
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
      setCurrent((current + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrent((current - 1 + slides.length) % slides.length);
    };
  
    const goToSlide = (index) => {
      setCurrent(index);
    };
  
  return (
  
     
     
        <div className="max-w-2xl mx-auto mt-8 relative">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full inline-block"
                />
              ))}
            </div>
          </div>
    
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &#10094;
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &#10095;
          </button>
    
          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 bg-gray-400 rounded-full mx-1 ${current === index ? 'bg-gray-800' : ''}`}
              ></button>
            ))}
          </div>
        </div>
      );
    };
    
   
    

