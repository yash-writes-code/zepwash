
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    position: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    stars: 5,
    quote: "ZepWash has completely changed how I take care of my car. Their service is prompt, thorough, and the staff is so professional. I love that they use eco-friendly products!"
  },
  {
    name: "Rahul Kapoor",
    position: "Premium Subscriber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    stars: 5,
    quote: "As someone who's always busy, having ZepWash come to my apartment complex is incredibly convenient. The premium package keeps my car looking like new every week."
  },
  {
    name: "Neha Patel",
    position: "Basic Plan User",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
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
