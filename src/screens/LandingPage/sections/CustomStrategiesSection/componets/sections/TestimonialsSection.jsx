import { TestimonialCard } from "../ui/TestimonialCard";
import backImg from '../../../../../../assets/images/testimonial/back.png';
import nextImg from '../../../../../../assets/images/testimonial/next.png'


export const  TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="relative w-full py-12 lg:py-24 bg-[#fff6f3] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1765px] items-start gap-12 lg:gap-[74px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <div className="opacity-50 w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] cursor-pointer hover:opacity-70 transition-opacity">
            <img
              className="w-[45px] lg:w-[55px] h-8 lg:h-10 mt-2.5 ml-[3px]"
              alt="Previous testimonial"
              src={backImg}  
            />
          </div>

          <h2 className="font-bold text-black text-2xl sm:text-3xl lg:text-[46px] text-center tracking-[-0.42px] leading-8 lg:leading-[52px] px-4">
            What Clinics Are Saying
          </h2>

          <div className="rotate-180 w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] cursor-pointer hover:opacity-70 transition-opacity">
            <img
              className="w-[45px] lg:w-[55px] h-8 lg:h-10 mt-2.5 ml-[3px] -rotate-180"
              alt="Next testimonial"
              src={nextImg}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[29px] w-full overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};