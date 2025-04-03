import Image from "next/image";
import CurvaLine from "../elements/curva_line";

function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className="bg-[#f86624]">
      <div className="flex flex-col min-lg:flex-row items-center justify-center px-4 min-md:px-12 min-lg:px-20 gap-4 min-lg:gap-0 pt-20">
        <div className="w-full flex flex-col justify-start gap-4">
          <h1 className="text-9xl text-white font-extrabold">AF21</h1>
          <p className="text-white font-bold text-3xl">
            Landing pages that convert… effortlessly
          </p>
          <p className="text-white font-semibold text-2xl">
            Unlimited revisions and a flat monthly fee.
          </p>
          <div className="relative z-10 w-1/3">
            <div className="w-full z-10 rounded hover:translate-y-1 transition-all">
              <button
                className={`py-3 px-3 font-semibold whitespace-nowrap w-full bg-[#662e9b] hover:bg-[##662e9bd8] rounded transition-all`}
              >
                <p className="text-white">Contact Us</p>{" "}
              </button>
            </div>
            <div className="absolute inset-x-0 w-full -z-10 -bottom-1 h-6 bg-black/30 rounded-b"></div>
          </div>
        </div>
        <Image
          alt="hero"
          src="/images/home.png"
          className="w-full min-md:max-w-1/2 min-lg:max-w-1/3"
          width={800}
          height={800}
        />
      </div>
      <CurvaLine beginColor="#f86624" endColor="#F472B6" />
    </section>
  );
}

export default Hero;
