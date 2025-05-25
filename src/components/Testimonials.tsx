
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Raj Sharma",
    position: "Basic Plan User",
    image: "/assets/raj.jpg",
    stars: 5,
    quote: "ZepWash has completely changed how I take care of my car. Their service is prompt, thorough, and the staff is so professional. I love that they use eco-friendly products!"
  },
  {
    name: "Rahul Kapoor",
    position: "Premium Subscriber",
    image: "/assets/rahul.jpg",
    stars: 5,
    quote: "As someone who's always busy, having ZepWash come to my apartment complex is incredibly convenient. The premium package keeps my car looking like new every week."
  },
  {
    name: "Raghav Gupta",
    position: "Basic Plan User",
    image: "/assets/raghav.jpg",
    stars: 4,
    quote: "I was skeptical at first about how well a water-efficient wash would clean, but I'm thoroughly impressed! My car looks great, and I feel good about the environmental impact."
  }
];

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join hundreds of satisfied customers who trust ZepWash for their car cleaning needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card-feature group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.stars ? "#FFD700" : "none"} 
                    color={i < testimonial.stars ? "#FFD700" : "#D1D5DB"} 
                  />
                ))}
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
