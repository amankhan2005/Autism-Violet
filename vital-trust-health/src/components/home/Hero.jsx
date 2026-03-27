 import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#2F9E8F] via-[#3EB8A7] to-[#155E54] py-20 md:py-24 lg:py-32 relative overflow-hidden">
      
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          
          {/* TEXT */}
          <div className="text-white text-center lg:text-left">
            
            {/* ✅ Only mobile text bigger */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Professional <br />
              <span className="text-teal-100/90">Mental Health</span> <br />
              Support
            </h1>

            {/* ✅ Mobile center, desktop same */}
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-center lg:text-left">
              Compassionate and confidential care designed to support your mental well-being anytime, anywhere. You are not alone.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              
              <Link
                to="/about-us"
                className="group inline-flex items-center justify-center bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-900/20 
                hover:bg-[#EA580C] hover:scale-105 transition-all duration-300"
              >
                Know More
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg 
                hover:bg-white hover:text-[#155E54] transition-all duration-300"
              >
                Book Appointment
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* ✅ IMAGE → hidden only on mobile */}
      <div className="hidden lg:flex absolute right-0 mr-10 bottom-0 h-full items-end pointer-events-none">
        <img
          src="/images/doctor.png"
          alt="Doctor"
          className="h-full object-cover drop-shadow-2xl"
        />
      </div>

      {/* GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-400/10 blur-[150px] rounded-full"></div>

    </section>
  );
};

export default Hero;