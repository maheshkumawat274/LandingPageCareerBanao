import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  text: string;
  image: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "This company surpasses its competitors in service quality.",
    image: "https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png",
    name: "Mukesh Kumar",
  },
  {
    id: 2,
    text: "Excellent service and fast delivery! Highly recommended.",
    image: "https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg",
    name: "Parity",
  },
  {
    id: 3,
    text: "Great customer support and fast response time. Really appreciate the effort!",
    image: "https://st2.depositphotos.com/4153545/8102/i/950/depositphotos_81020504-stock-photo-cheerful-young-indian-woman.jpg",
    name: "Riya",
  },
  {
    id: 4,
    text: "Amazing experience! The team was professional and delivered exactly what I wanted.",
    image: "https://media.istockphoto.com/id/1307694376/photo/portrait-of-young-indian-man-with-folded-hands.jpg?s=612x612&w=0&k=20&c=rrVJ41nvwhCDq0pGL2hn9EWwfnyeGs4ZyYHL_0pyZEU=",
    name: "Yogesh",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center bg-purple-700 p-6 rounded-lg shadow-lg text-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-md mb-4"
        />
        <p className="text-white text-sm sm:text-lg leading-relaxed">{testimonial.text}</p>
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-white fill-white w-5 sm:w-6 h-5 sm:h-6" />
          ))}
        </div>
        <p className="mt-3 text-white text-sm sm:text-base font-semibold">- {testimonial.name}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default - Large Screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500, // Below 500px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="py-10 px-4 sm:px-0">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
        Testimonials
      </h1>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
