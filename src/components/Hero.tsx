import FadeInSection from "./ui/FadeInSection";
import Logo from "../assets/images/BBD-Logo.png";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center bg-gradient-to-tr from-slate-600 to-slate-900 text-white">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <img src={Logo} alt="Blue Byrd Logo" className="w-24 sm:w-32 md:w-48 lg:w-56 mb-6 mx-auto" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Blue Byrd Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Handcrafted web experiences with wings—built to take flight.
          </p>

        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;