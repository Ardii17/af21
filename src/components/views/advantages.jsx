import Image from "next/image";
import CurvaLine from "../elements/curva_line";

function Advantages({ advantagesRef }) {
  return (
    <section
      ref={advantagesRef}
      className="bg-[#f86624] flex flex-col items-center gap-8"
    >
      <div className="grid grid-cols-1 min-lg:grid-cols-2 items-center justify-center gap-12 px-4 min-md:px-12 min-lg:px-20">
        <div className="flex flex-col gap-4 items-start" data-aos="fade-right">
          <p className="text-white font-bold text-3xl text-shadow">
            Our Advantages
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            doloremque impedit in? Reiciendis cumque reprehenderit, perspiciatis
            ratione eaque a ab.
          </p>
          <div className="flex flex-col gap-4">
            <ListAdvantages
              number="1"
              title="Lorem ipsum dolor sit amet."
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, incidunt."
            />
            <ListAdvantages
              number="2"
              title="Lorem ipsum dolor sit amet."
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, incidunt."
            />
            <ListAdvantages
              number="3"
              title="Lorem ipsum dolor sit amet."
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, incidunt."
            />
          </div>
        </div>
        <Image
          alt="advantages"
          src="/images/advantages.png"
          width={800}
          height={800}
          data-aos="fade-left"
        />
      </div>
      <CurvaLine beginColor="#f86624" endColor="#EA3546" />
    </section>
  );
}

function ListAdvantages({ number, title, desc }) {
  return (
    <div className="flex gap-6 items-center">
      <p className="text-white bg-[#662e9b] px-4 py-2 rounded-full font-semibold">
        {number}
      </p>
      <div className="flex flex-col text-white">
        <h1 className="font-semibold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Advantages;
