const ProcessStepMobile = ({ icon, title, description, stepNumber }) => {
    return (
      <div className="flex items-center bg-white p-6 rounded-xl shadow-lg">
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-5 shadow-lg border-4 border-blue-50">
          {icon}
        </div>
        <div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
            STEP {stepNumber}
          </span>
          <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProcessStepMobile;
  