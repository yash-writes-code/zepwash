
import { Droplets, ShieldCheck, Users, AreaChart } from 'lucide-react';

const features = [
  {
    icon: <Droplets size={36} className="text-zep-blue-500" />,
    title: "100% Water Efficient",
    description: "Our unique cleaning process uses 95% less water than traditional methods while delivering superior results."
  },
  {
    icon: <ShieldCheck size={36} className="text-zep-green-500" />,
    title: "Branded Chemicals",
    description: "We use only premium, eco-friendly cleaning solutions that are safe for your car and the environment."
  },
  {
    icon: <Users size={36} className="text-zep-purple-500" />,
    title: "Verified Staff",
    description: "All our cleaning professionals undergo extensive training and background verification."
  },
  {
    icon: <AreaChart size={36} className="text-zep-blue-500" />,
    title: "Tower-Dedicated Team",
    description: "Each residential tower gets a dedicated team for consistent service and personalized care."
  }
];

const Features = () => {
  return (
    <section className="section-container" id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ZepWash?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We combine cutting-edge technology with eco-friendly practices to deliver the best car wash experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card-feature transform hover:scale-105 hover:shadow-md hover:shadow-slate-400 transition-transform duration-300">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
