import { Link } from 'react-router-dom';

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zep-blue-600 to-zep-blue-700 text-white relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-zep-blue-400 rounded-full opacity-20 animate-float z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-zep-green-400 rounded-full opacity-20 animate-float z-0"></div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* TEXT SECTION FIRST IN MARKUP */}
          <div className="space-y-6 w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">Download Our App</h2>
            <p className="text-white/90">
              Get the full ZepWash experience on your mobile device. Subscribe to plans, schedule washes, and manage your account - all from one convenient app.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <span>Download the app from your preferred store</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <span>Create an account and select your service plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <span>Schedule your washes and enjoy the premium service</span>
              </div>
            </div>
          </div>

          {/* APP STORE IMAGES */}
          <div className="w-full md:w-1/2 flex flex-col items-center ">
            <div className="flex md:flex-col gap-4 md:gap-8 md:mt-16  justify-center ">
              <img
                src="/assets/play_store2.png"
                alt="play store"
                className="w-40 md:w-60"
              />
              <img
                src="/assets/app_store.png"
                alt="app store"
                className="w-40 md:w-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
