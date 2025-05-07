import FadeInSection from "./ui/FadeInSection";

const About = () => {
  return (
    <section id="flight-path" className="py-20 bg-[#fff7ed] dark:bg-slate-900 scroll-mt-24">
      <FadeInSection>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4 text-cyan-700">The Flight Path</h2>
          <p className="text-lg">
            Blue Byrd Development was built to craft modern, high-performance web experiences that fly. We build sleek, scalable websites with clean design, sharp code, and modern frameworks—turning ideas into digital realities, fast. Whether you're launching, growing, or flying higher, Blue Byrd is your partner in the digital skies.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
