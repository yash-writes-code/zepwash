const ProcessStepDesktop = ({ icon, title, description }) => {
    return (
      <div className="z-10 flex flex-col items-center w-1/3 px-6 transform transition-all duration-500 hover:-translate-y-2">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-8 shadow-xl border-4 border-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-blue-800">{title}</h3>
        <p className="text-center text-neutral-600 leading-relaxed">{description}</p>
      </div>
    );
  };
  
  export default ProcessStepDesktop;
  