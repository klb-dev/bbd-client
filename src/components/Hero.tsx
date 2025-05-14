import FadeInSection from "./ui/FadeInSection";
import Logo from "../assets/images/BBD-Logo.png";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center animate-gradient text-white">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <img
          src={Logo}
          alt="Blue Byrd Logo"
          className="w-24 sm:w-32 md:w-48 lg:w-56 mb-6 mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,1)]"
        />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Modern Web Development that Soars
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Handcrafted web experiences built to help brands soar in the digital sky. Building fast, responsive websites with clean UI design and scalable code.
          </p>
          <a
            href="#send-signal"
            className="mt-12 inline-block bg-cyan-700 hover:bg-cyan-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-colors"
          >
          Get in Touch
        </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;