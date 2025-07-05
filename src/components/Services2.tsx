import React from 'react';
import { ArrowRight, Droplets, SprayCan, Car, Check, X } from 'lucide-react';

const allFeatures = [
  "Premium foam wash (Every Third Day)",
  "Daily surface dust wipe-off", 
  "Side mirrors, windshield & windows cleaning",
  "Number plate cleaning",
  "Tyre & rim deep cleaning",
  "Premium foam wash (Alternate Day)",
  "Weekly dashboard & panel dusting",
  "Weekly seat surface & glove compartment cleaning", 
  "Weekly cup & key holder cleaning",
  "Interior vacuuming Weekly",
  "Deep foot mat cleaning Weekly",
  "Boot/trunk space cleaning Weekly",
  "Interior fragrance Weekly"
];

const services = [
  {
    icon: <Droplets size={40} className="text-blue-600" />,
    title: "Basic",
    description: "Essential Exterior Cleaning",
    includedFeatures: [
      "Premium foam wash (Every Third Day)",
      "Daily surface dust wipe-off",
      "Side mirrors, windshield & windows cleaning", 
      "Number plate cleaning",
      "Tyre & rim deep cleaning"
    ],
  
  },
  {
    icon: <SprayCan size={40} className="text-blue-600" />,
    title: "Premium", 
    description: "Exterior + Weekly Interior Touch",
    includedFeatures: [
      "Premium foam wash (Every Third Day)",
      "Daily surface dust wipe-off",
      "Side mirrors, windshield & windows cleaning",
      "Number plate cleaning", 
      "Tyre & rim deep cleaning",
      "Premium foam wash (Alternate Day)",
      "Weekly dashboard & panel dusting",
      "Weekly seat surface & glove compartment cleaning",
      "Weekly cup & key holder cleaning"
    ],
  },
  {
    icon: <Car size={40} className="text-blue-600" />,
    title: "Supreme",
    description: "Full Interior + Exterior Package", 
    includedFeatures: allFeatures,
  }
];

const Services2 = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Choose the Clean That Suits You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore subscription-based car care on our app. Choose the perfect plan tailored to your vehicle's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 hover:-translate-y-2 overflow-hidden
                border-blue-200 border-2
              `}
            >

              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-60`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`mb-6 bg-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center`}>
                  {service.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className={`text-3xl font-bold mb-3 text-blue-600`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {allFeatures.map((feature, i) => {
                    const isIncluded = service.includedFeatures.includes(feature);
                    return (
                      <div 
                        key={i}
                        className={`flex items-start transition-all duration-300 hover:translate-x-1 ${
                          isIncluded ? 'opacity-100' : 'opacity-80'
                        }`}
                      >
                        <div className={`
                          w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0
                          ${isIncluded 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                          }
                        `}>
                          {isIncluded ? (
                            <Check size={14} className="font-bold" />
                          ) : (
                            <X size={14} className="font-bold" />
                          )}
                        </div>
                        <span className={`text-sm leading-relaxed ${
                          isIncluded ? 'text-gray-800 font-medium' : 'text-gray-400'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Subscribe Button */}
                {/* <button className={`
                  w-full py-4 px-6 rounded-xl font-semibold text-white
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  flex items-center justify-center group
                  bg-gray-800 hover:bg-gray-900
                `}>
                  <span>Subscribe Now</span>
                  <ArrowRight 
                    size={20} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </button> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Experience the ZepWash Difference
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ZepWash for eco-friendly, professional car cleaning services.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Download Our App
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services2;