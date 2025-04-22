import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  Star,
  Heart,
  Users,
  Shield,
  Target,
} from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import BubbleBackground from '@/components/BubbleBackground';

const values = [
  {
    icon: <Leaf size={32} className="text-zep-green-500" />,
    title: 'Environmental Responsibility',
    text: "We're committed to reducing water waste and using eco-friendly cleaning products that protect our environment.",
  },
  {
    icon: <Star size={32} className="text-zep-blue-500" />,
    title: 'Quality Excellence',
    text: 'We never compromise on the quality of our service, using premium products and thorough cleaning procedures.',
  },
  {
    icon: <Heart size={32} className="text-zep-purple-500" />,
    title: 'Customer Centricity',
    text: 'Our services are designed with the customer in mind, focusing on convenience, reliability, and satisfaction.',
  },
  {
    icon: <Users size={32} className="text-zep-blue-500" />,
    title: 'Community Building',
    text: 'We aim to create positive relationships within the communities we serve, becoming more than just a service provider.',
  },
  {
    icon: <Shield size={32} className="text-zep-green-500" />,
    title: 'Trust & Reliability',
    text: 'Our verified staff and consistent service build the trust necessary for long-term relationships with our customers.',
  },
  {
    icon: <Target size={32} className="text-zep-purple-500" />,
    title: 'Innovation',
    text: 'We continuously improve our methods and technology to provide better, more efficient services.',
  },
];

const About = () => {
  // Animation refs
  const headerTitleRef = useScrollAnimation();
  const headerTextRef = useScrollAnimation();
  const storyTitleRef = useScrollAnimation();
  const storyText1Ref = useScrollAnimation();
  const storyText2Ref = useScrollAnimation();
  const storyText3Ref = useScrollAnimation();
  const storyButtonsRef = useScrollAnimation();
  const valuesTitleRef = useScrollAnimation();
  const valuesDescRef = useScrollAnimation();
  const ctaTitleRef = useScrollAnimation();
  const ctaTextRef = useScrollAnimation();
  const ctaButtonRef = useScrollAnimation();

  // Background animation ref
  const bgPatternRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (bgPatternRef.current) {
        const scrollY = window.scrollY;
        bgPatternRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="relative mt-[-6.5rem] pt-[6.5rem] pb-12 bg-gradient-to-r from-zep-green-500 to-zep-blue-500 text-white overflow-hidden">
        {/* Background pattern */}
        <div 
          ref={bgPatternRef}
          className="absolute inset-0 bg-pattern-overlay opacity-15 transition-transform duration-500"
        ></div>
        
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center pt-16 relative z-10">
          <h1 
            ref={headerTitleRef}
            className="text-3xl md:text-5xl font-bold mb-4 fade-in-up"
          >
            About ZepWash
          </h1>
          <p 
            ref={headerTextRef}
            className="text-xl opacity-90 max-w-2xl mx-auto fade-in-up stagger-delay-1"
          >
            Revolutionizing car cleaning with eco-friendly solutions.
          </p>
        </div>
      </div>

      <section className="section-container">
        <div className="grid items-center">
          <div>
            <h2 
              ref={storyTitleRef}
              className="text-3xl font-bold mb-6 fade-in-up"
            >
              Our Story
            </h2>
            <p 
              ref={storyText1Ref}
              className="text-gray-600 mb-4 fade-in-up stagger-delay-1"
            >
              ZepWash was founded with a simple mission: to provide premium car cleaning services while minimizing environmental impact.
            </p>
            <p 
              ref={storyText2Ref}
              className="text-gray-600 mb-4 fade-in-up stagger-delay-2"
            >
              What started as a small operation in one residential society has now grown to serve dozens of communities across the city. Our innovative water-saving technology and dedication to customer satisfaction have made us the preferred choice for eco-conscious car owners.
            </p>
            <p 
              ref={storyText3Ref}
              className="text-gray-600 mb-6 fade-in-up stagger-delay-3"
            >
              We're committed to evolving our services while staying true to our core values of sustainability, quality, and customer-centricity.
            </p>

            <div 
              ref={storyButtonsRef}
              className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-delay-4"
            >
              <Link to="/services">
                <Button className="btn-primary">Our Services</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Join Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 relative overflow-hidden">
        {/* Subtle bubble background */}
        <div className="absolute inset-0 opacity-5">
          <BubbleBackground density="low" variant="blue" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 
              ref={valuesTitleRef}
              className="text-3xl font-bold mb-4 fade-in-up"
            >
              Our Values
            </h2>
            <p 
              ref={valuesDescRef}
              className="text-gray-600 max-w-2xl mx-auto fade-in-up stagger-delay-1"
            >
              The principles that guide everything we do at ZepWash.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((feature, index) => (
              <div
                key={index}
                ref={useScrollAnimation({ threshold: 0.1, delay: index * 0.1 })}
                className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 hover:shadow-md hover:shadow-slate-400 transition-transform duration-300 fade-in-up"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="rounded-full bg-zep-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-zep-blue-600 to-zep-blue-700 py-16 text-white relative overflow-hidden">
        {/* Bubble background */}
        <BubbleBackground density="low" variant="blue" className="opacity-20" />
        
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 
            ref={ctaTitleRef}
            className="text-3xl font-bold mb-6 fade-in-up"
          >
            Join the ZepWash Family
          </h2>
          <p 
            ref={ctaTextRef}
            className="text-xl opacity-90 max-w-2xl mx-auto mb-8 fade-in-up stagger-delay-1"
          >
            Experience the future of car cleaning today. Download our app or sign up to get started.
          </p>

          <div 
            ref={ctaButtonRef}
            className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-delay-2"
          >
            <Button size="lg" className="bg-white text-zep-blue-600 hover:bg-gray-100 animate-pulse-slow">
              Download App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
