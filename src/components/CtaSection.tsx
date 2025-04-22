
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-zep-green-500 to-zep-blue-500 py-16 text-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Spotless Car?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 500+ happy car owners who trust ZepWash for their cleaning needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zep-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Download App
            </Button>
            
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-90">Residential Towers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Water Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
