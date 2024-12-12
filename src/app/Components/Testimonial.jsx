import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: "Adnan Khursheed",
      role: "Rteli Naturals Owner",
      image: "/Adnan.jpeg",
      testimonial:
        "Abuzar's skills in web development are outstanding. He delivered my project on time, and the design was more than I expected. Highly recommend!",
    },
    {
      name: "Amaan Malik",
      role: "UX Designer",
      image: "/Amaan.JPG",
      testimonial:
        "Working with Abuzar was a fantastic experience! His attention to detail and ability to execute the design vision was exceptional.",
    },
    {
      name: "Shivam Raj",
      role: "Project Manager",
      image: "/Shivam.jpeg",
      testimonial:
        "Abuzar is a brilliant front-end developer. His work on our website has significantly enhanced our user experience. I look forward to working with him again!",
    },
    {
      name: "Urvashi Sonkar",
      role: "Graphic Designer",
      image: "/Urvashi.jpeg",
      testimonial:
        "Abuzar's creative approach and technical skills make him an outstanding developer. He is truly passionate about what he does, and it shows in his work.",
    },
  ];

  return (
    <section id="testimonials-section" className="py-20 px-4">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-6xl sm:text-6xl md:text-8xl font-Mazius text-green-400 mb-12">
          What People Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-300"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-Cursive font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 font-Cursive text-sm mb-4">{testimonial.role}</p>
              <p className="text-gray-700 font-Cursive">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
