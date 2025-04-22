import HowHeader from './ui/HowItWorks/HowHeader';
import ProcessStepDesktop from './ui/HowItWorks/ProcessStepDesktop';
import ProcessStepMobile from './ui/HowItWorks/ProcessStepMobile';
import AppCta from './ui/HowItWorks/AppCta';

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <HowHeader />

        {/* Process Steps - Desktop View */}
        <div className="hidden md:flex justify-between items-start mb-24 relative">
          <div className="absolute top-16 left-0 w-full h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full z-0"></div>

          <ProcessStepDesktop
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
            title="Book via App"
            description="Download our app and schedule a car wash at your preferred time and location."
          />

          <ProcessStepDesktop
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            }
            title="Professional Wash"
            description="Our trained team arrives with all equipment and premium cleaning solutions."
          />

          <ProcessStepDesktop
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            }
            title="Rate & Review"
            description="Share your feedback and satisfaction level to help us improve our service."
          />
        </div>

        {/* Process Steps - Mobile View */}
        <div className="md:hidden space-y-12 mb-16">
          <ProcessStepMobile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
            title="Book via App"
            description="Download our app and schedule a car wash at your preferred time and location."
            stepNumber={1}
          />

          <ProcessStepMobile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            }
            title="Professional Wash"
            description="Our trained team arrives with all equipment and premium cleaning solutions."
            stepNumber={2}
          />

          <ProcessStepMobile
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            }
            title="Rate & Review"
            description="Share your feedback and satisfaction level to help us improve our service."
            stepNumber={3}
          />
        </div>

        <AppCta/>
      </div>
    </section>
  );
};

export default HowItWorks;
