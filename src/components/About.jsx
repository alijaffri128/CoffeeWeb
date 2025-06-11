import React from 'react';
import AboutImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 px-4 py-8">
      {/* Image Section */}
      <div className="about-img">
        <img
          src={AboutImage}
          alt="About Us"
          className="rounded-md w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="about-text text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase mb-2">Our History</h2>
        <p className="text-[0.938rem] mb-4">
          We started like you, a small group deeply enamored with the nuances of coffee. Soon, our passion ignited the idea of sharing this knowledge and these exceptional flavors with others.
        </p>
        <p className="text-[0.938rem] mb-6">
          With that in mind, we created a specific kind of social space - not home, not work - where people could connect, relax, and enjoy a consistent and high-quality beverage.
        </p>
        <a
          href="#"
          className="inline-block bg-[#BC9667] text-white px-6 py-2 rounded-md transition duration-300 hover:text-white hover:bg-[#5c3f2c]"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default About;
