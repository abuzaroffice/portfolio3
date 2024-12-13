import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster, toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [description, setdescription] = useState("")

  useEffect(() => {
    // Animate heading with a bouncing effect on scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate form elements with floating effects
    gsap.fromTo(
      inputRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hover effect for the button with GSAP
    gsap.fromTo(
      buttonRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'easeInOut',
        paused: true,
      }
    );

  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("handleSubmitted")
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "78f1a054-8036-4b40-8f2d-bc50de14a527",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.description.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        setname("");
        setemail("");
        setdescription('');
        console.log(result);
        toast('Form successfully submitted! Now go take a break. 😄');
    }
  }

  return (
    <section id="contact-section" className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          ref={headingRef}
          className="text-6xl sm:text-6xl md:text-8xl font-Mazius text-green-400 drop-shadow-lg"
        >
          Let's Connect
        </h2>
        <div ref={formRef} className="w-full max-w-lg mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-lg">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label htmlFor="name" className="text-lg font-Cursive text-gray-800">Your Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>(setname(e.target.value))}
                  required
                  placeholder="Your name"
                  value={name}
                  className="w-full p-4 bg-transparent border-b-2 font-Cursive border-gray-400 focus:border-green-600 outline-none transition duration-300"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email" className="text-lg font-Cursive text-gray-800">Your Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) =>(setemail(e.target.value))}
                  required
                  placeholder="email@example.com"
                  value={email}
                  className="w-full p-4 bg-transparent border-b-2 font-Cursive border-gray-400 focus:border-green-600 outline-none transition duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label htmlFor="message" className="text-lg font-Cursive text-gray-800">Your Message</label>
                <textarea
                  name="description"
                  required
                  onChange={(e) =>(setdescription(e.target.value))}
                  rows="4"
                  value={description}
                  placeholder="Enter your message"
                  className="w-full p-4 bg-transparent border-b-2 font-Cursive border-gray-400 focus:border-green-600 outline-none transition duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-400 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
        <Toaster position="bottom-left"/>
      </div>
    </section>
  );
};

export default Contact;

