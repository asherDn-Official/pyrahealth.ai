import { useState, useRef, useEffect } from 'react';
import { TestimonialCard } from "../ui/TestimonialCard";
import backImg from '../../../../../../assets/images/testimonial/back.png';
import nextImg from '../../../../../../assets/images/testimonial/next.png';

export const TestimonialsSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle next button click
  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to first
    }
    scrollToTestimonial();
  };

  // Handle previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(testimonials.length - 1); // Loop to last
    }
    scrollToTestimonial();
  };

  // Scroll to the current testimonial
  const scrollToTestimonial = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.children[currentIndex];
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle touch start for swipe
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Handle touch move for swipe
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch end to determine swipe direction
  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const cardWidth = container.children[0]?.offsetWidth || 0;
    const gap = 29; // Same as your gap in the CSS
    
    // Calculate the nearest card index
    const newIndex = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
    scrollToTestimonial();
  };

  // Auto-scroll when currentIndex changes
  useEffect(() => {
    scrollToTestimonial();
  }, [currentIndex]);

  return (
    <section className="relative w-full    py-12 lg:py-24 bg-[#fff6f3] overflow-hidden">
      <div className="  flex flex-col w-full max-w-[1200px] items-start gap-12 lg:gap-[74px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <button 
            onClick={handlePrev}
            className="opacity-50 w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] cursor-pointer hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Previous testimonial"
          >
            <img
              className="w-[45px] lg:w-[55px] h-8 lg:h-10 mt-2.5 ml-[3px]"
              alt="Previous testimonial"
              src={backImg}  
            />
          </button>

          <h2 className="font-bold text-black text-2xl sm:text-3xl lg:text-[46px] text-center tracking-[-0.42px] leading-8 lg:leading-[52px] px-4">
            What Clinics Are Saying
          </h2>

          <button 
            onClick={handleNext}
            className="rotate-180 w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] cursor-pointer hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Next testimonial"
          >
            <img
              className="w-[45px] lg:w-[55px] h-8 lg:h-10 mt-2.5 ml-[3px] -rotate-180"
              alt="Next testimonial"
              src={nextImg}
            />
          </button>
        </div>

        <div 
          ref={containerRef}
className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[29px] w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            WebkitOverflowScrolling: 'touch' // For smooth scrolling on iOS
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="snap-always snap-center flex-shrink-0"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};