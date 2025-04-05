import Image from "next/image";
import CurvaLine from "../elements/curva_line";

function WhoServe({ whoServerRef }) {
  return (
    <section ref={whoServerRef} className="bg-[#EA3546] flex flex-col gap-8">
      <div className="flex flex-col gap-12 items-center justify-center py-10 px-4 min-md:px-12 min-lg:px-20">
        <p className="text-white font-bold text-3xl text-shadow">
          Who We Serve
        </p>
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-8 w-full">
          <CardWhoServe
            image="/images/bisnisman.png"
            title="Bisnis Man"
            desc="Pebisnis yang ingin meningkatkan penjualan online"
            dataAos="fade-right"
          />
          <CardWhoServe
            image="/images/eventorganizer.png"
            title="Event Organizer"
            desc="Penyelenggara acara yang membutuhkan lebih banyak peserta"
            dataAos="fade-left"
          />
          <CardWhoServe
            image="/images/freelancer.png"
            title="Freelancer"
            desc="Freelancer dan agensi yang menawarkan jasa spesifik"
            dataAos="fade-right"
          />
          <CardWhoServe
            image="/images/ownerproducts.png"
            title="Resto / Cafe"
            desc="Pemilik usaha khusus seperti Restoran atau Cafe yang ingin meningkatkan penjualannya"
            dataAos="fade-left"
          />
        </div>
      </div>
      <CurvaLine beginColor="#EA3546" endColor="#f86624" />
    </section>
  );
}

function CardWhoServe({ image, title, desc, dataAos }) {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center"
      data-aos={dataAos}
    >
      <div className="relative flex items-center justify-center w-2/3 z-10">
        <div className="rounded-2xl bg-[#662E9B] py-10 border-2 border-black">
          <Image
            alt={title}
            src={image}
            className="aspect-square max-w-2/5 place-self-center"
            width={500}
            height={500}
          />
          <div className="absolute inset-x-0 -z-10 -bottom-1 h-6 bg-black rounded-b-2xl"></div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="font-medium text-white text-lg text-center">{desc}</p>
    </div>
  );
}

export default WhoServe;
