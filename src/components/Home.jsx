import MainImage from "../assets/images/main.png";
import BackgroundImage from "../assets/images/bg.png"; 

export default function Home() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{ marginTop: '4rem' }} // Add space for fixed header
    >
      {/* Background Image */}
      <img
        src={BackgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Text Content */}
      <div className="text-left max-w-2xl z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#BC9667] uppercase tracking-wide leading-tight mb-4">
          START YOUR DAY <br /> WITH COFFEE
        </h1>
        <p className="text-lg text-white mb-8">
          Fuel your focus. Enjoy the aroma of a fresh start, awake your senses and embrace the day, one cup at a time.
        </p>
        <a
          href="#"
          className="px-10 py-3 rounded-md bg-[#BC9667] text-white hover:bg-[#9c7d56] hover:text-white font-medium transition duration-300 inline-block"
        >
          SHOP NOW
        </a>
      </div>

      {/* Coffee Image */}
      <div className="z-10 mt-10 md:mt-0">
        <img
          src={MainImage}
          alt="Coffee"
          className="max-w-full h-auto md:max-w-lg lg:max-w-xl"
        />
      </div>
    </section>
  );
}