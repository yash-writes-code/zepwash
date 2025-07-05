
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Process from '@/components/Process';
import CtaSection from '@/components/CtaSection';
import Services2 from '@/components/Services2';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="mt-[-6.5rem] pt-[6.5rem] pb-12 bg-gradient-to-r from-zep-blue-500 to-zep-green-500 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center pt-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Choose the clean that suits you with our premium car wash services.
          </p>
        </div>
      </div>
      
      <Services2 />
      {/* <Process /> */}
      <CtaSection />
      
      <Footer />
    </>
  );
};

export default ServicesPage;
