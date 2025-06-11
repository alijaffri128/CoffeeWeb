import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'Joshua Drake',
    text: 'Wow! Just stopped here for a cup of coffee and I was extremely surprised by the environment! Very good place, good food, and, of course, good coffee!',
    image: 'https://i.postimg.cc/mr1R7LjG/rev1.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Yasin Arafat',
    text: 'Where do I begin? They are the BEST!! The decor is very relaxed, and the shop is immaculate. The staff is accommodating, even with food allergies!',
    image: 'https://i.postimg.cc/G3GJ3VW7/rev2.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Anna Doe',
    text: 'Fantastic coffee and the owner is charming. He is knowledgeable, and they roast their coffee on-site. Reasonable rates and a lovely atmosphere!',
    image: 'https://i.postimg.cc/hGRKnJT3/rev3.jpg',
    rating: 5,
  },
];

// Utility to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 fill-[var(--main-color)] stroke-[var(--main-color)]" />);
  }

  if (hasHalf) {
    stars.push(<StarHalf key="half" className="w-4 h-4 fill-[var(--main-color)] stroke-[var(--main-color)]" />);
  }

  return stars;
};

const Customers = () => {
  return (
    <section id="customers" className="px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold uppercase">Our Customers</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="p-6 rounded-md text-center shadow-md transition-all duration-400 hover:bg-[var(--second-color)]"
          >
            {/* Stars */}
            <div className="flex justify-center mb-3">{renderStars(customer.rating)}</div>

            {/* Review text */}
            <p className="text-[0.938rem] mb-4">{customer.text}</p>

            {/* Name */}
            <h2 className="text-xl font-semibold my-2">{customer.name}</h2>

            {/* Profile Image */}
            <img
              src={customer.image}
              alt={customer.name}
              className="w-[70px] h-[70px] rounded-full object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
