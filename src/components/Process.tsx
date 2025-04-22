
import { CalendarCheck, Car, MessageSquare } from 'lucide-react';

const processes = [
  {
    icon: <CalendarCheck size={48} className="text-zep-blue-500" />,
    title: "Book",
    description: "Schedule a wash through our app or website at your preferred time slot."
  },
  {
    icon: <Car size={48} className="text-zep-green-500" />,
    title: "Wash",
    description: "Our professionals arrive on time and deliver a premium cleaning experience."
  },
  {
    icon: <MessageSquare size={48} className="text-zep-purple-500" />,
    title: "Feedback",
    description: "Rate your experience and provide feedback to help us improve."
  }
];

const Process = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, efficient, and convenient - here's how our service works.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processes.map((process, index) => (
              <div key={index} className="card-feature text-center flex flex-col items-center">
                <div className="rounded-full p-4 bg-white shadow-md mb-6">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                
                {/* Step number */}
                <div className="absolute top-0 right-0 md:static mt-4 md:mt-6 bg-zep-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
