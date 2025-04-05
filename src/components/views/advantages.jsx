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
            Kami menawarkan solusi desain web profesional yang unik, responsif,
            dan terjangkau. Dengan tampilan eksklusif, performa optimal, serta
            harga yang bersaing, website Anda akan lebih menonjol dan memberikan
            pengalaman terbaik bagi pengunjung.
          </p>
          <div className="flex flex-col gap-4">
            <ListAdvantages
              number="1"
              title="Desain Eksklusif"
              desc="Kami tidak menggunakan template standar. Setiap website yang kami buat bersifat unik dan disesuaikan dengan identitas merek Anda, memastikan Anda tampil berbeda dari kompetitor."
            />
            <ListAdvantages
              number="2"
              title="Responsif & Performa Optimal"
              desc="Semua landing page dan portofolio kami kompatibel dengan berbagai perangkat (desktop, tablet, dan mobile) dengan waktu loading yang cepat untuk pengalaman pengguna terbaik."
            />
            <ListAdvantages
              number="3"
              title="Harga Bersaing"
              desc="Dengan investasi Rp500.000, Anda mendapatkan satu halaman landing page atau portofolio profesional"
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
