import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, SprayCan, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: <Droplets size={40} className="text-zep-blue-500" />,
    title: "Basic",
    description: "Foam Exterior Wash",
    features: [
      "Premium foam wash",
      "External surface cleaning",
      "Water-saving technology",
      "Quick 15-minute service"
    ],
    gradient: "from-zep-blue-100 to-zep-blue-200",
    iconBg: "bg-zep-blue-100",
    delay: 1
  },
  {
    icon: <SprayCan size={40} className="text-zep-blue-500" />,
    title: "Premium",
    description: "Foam + Dry + Glass",
    features: [
      "Everything in Basic",
      "Window and glass cleaning",
      "Seat Dusting",
      "Dashboard Cleaning"
    ],
    gradient: "from-zep-blue-100 to-zep-green-100",
    iconBg: "bg-zep-green-100",
    delay: 2
  },
  {
    icon: <Car size={40} className="text-zep-blue-500" />,
    title: "Supreme",
    description: "All + Tyres + Interior Wipe",
    features: [
      "Everything in Premium",
      "Door and Mat Cleaning",
      "Boot Space Cleaning",
      "Interior freshener"
    ],
    gradient: "from-zep-green-100 to-zep-green-200",
    iconBg: "bg-zep-green-100",
    delay: 3
  }
];

const Services = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const descRef = useScrollAnimation<HTMLParagraphElement>();
  const card1Ref = useScrollAnimation<HTMLDivElement>();
  const card2Ref = useScrollAnimation<HTMLDivElement>();
  const card3Ref = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();
  
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className="section-container" id="services">
      <div className="text-center mb-12">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-4 fade-in-up"
        >
          Choose the Clean That Suits You
        </h2>
        <p 
          ref={descRef}
          className="text-gray-600 max-w-2xl mx-auto fade-in-up stagger-delay-1"
        >
          Explore subscription-based car care on our app. Choose the perfect plan tailored to your vehicle's needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            ref={cardRefs[index]}
            className={`
              curved-card pop-shadow group relative overflow-hidden 
              bg-white p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2
              fade-in-up stagger-delay-${service.delay}
            `}
          >
            {/* Animated gradient background */}
            <div 
              className={`
                absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 
                bg-gradient-to-br ${service.gradient} rounded-full opacity-70
                transition-all duration-500 group-hover:scale-110 group-hover:opacity-80
              `}
            ></div>
            
            <div className="relative">
              {/* Animated icon */}
              <div className={`
                mb-6 transform transition-all duration-300 
                group-hover:scale-110 group-hover:translate-x-2
              `}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-zep-blue-800 transition-colors duration-300 group-hover:text-zep-blue-600">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-5 transition-colors duration-300 group-hover:text-gray-700">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start group/item transition-all duration-300 hover:translate-x-1"
                  >
                    <div className={`
                      w-5 h-5 rounded-full ${service.iconBg} 
                      flex items-center justify-center mr-2 mt-0.5
                      transition-all duration-300 group-hover/item:scale-110
                    `}>
                      <div className="w-2.5 h-2.5 rounded-full bg-zep-green-500"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* <div className="pt-2">
               
                  <Button 
                    variant="outline" 
                    className="group/btn w-full justify-between border-zep-blue-300 hover:border-zep-blue-500 hover:bg-gradient-to-r hover:from-zep-blue-50 hover:to-zep-green-50 hover:text-zep-blue-600 hover:no-underline"
                  >
                    <span className="transition-colors duration-300 group-hover/btn:text-zep-blue-600">Subscribe</span>
                    <ArrowRight 
                      size={16} 
                      className="ml-2 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-zep-green-500" 
                    />
                  </Button>
               
              </div> */}
            </div>
          </div>
        ))}
      </div>
      
      <div 
        ref={ctaRef}
        className="text-center mt-16 fade-in-up"
      >
        <p className="text-gray-600 mb-6">Experience the ZepWash difference with our eco-friendly, professional car cleaning services.</p>
        <Button 
          size="lg" 
          className="btn-primary relative overflow-hidden group"
        >
          {/* Button shine effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
          <span className='py-8 px-4 font-semibold relative z-10'>Download Our App</span>
        </Button>
      </div>
    </section>
  );
};

export default Services;
