import Image from "next/image";
import CurvaLine from "../elements/curva_line";

function About({ howItWorksRef }) {
  return (
    <section className="bg-[#F472B6] flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center bg-[#F472B6] px-4 min-md:px-12 min-lg:px-20 min-lg:flex-row">
        <div
          className="flex items-center justify-center w-full min-lg:w-1/2"
          data-aos="fade-right"
        >
          <Image
            alt="about"
            src="/images/about.png"
            className="w-full min-md:max-w-1/2 min-lg:max-w-1/3 place-self-center"
            width={800}
            height={800}
          />
        </div>
        <div
          className="w-full min-lg:w-1/2 flex flex-col justify-start gap-4 px-4 min-md:px-12 min-lg:px-20"
          data-aos="fade-left"
        >
          <p className="text-white font-bold text-3xl">
            The Future of Landing Page Development
          </p>
          <p className="text-white font text-lg">
            Need a fast, responsive, and high-converting landing page? Welcome!
            We are AF21, your trusted partner for professional landing page
            creation at a flat monthly fee. We bring modern solutions to your
            digital needs.
          </p>
        </div>
      </div>
      <div
        ref={howItWorksRef}
        className="flex flex-col gap-8 items-center justify-center px-4 min-md:px-12 min-lg:px-20"
        data-aos="fade-up"
      >
        <p className="text-white font-bold text-3xl text-shadow">
          How it Works
        </p>
        <div className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 gap-6 w-full">
          <CardHowItWorks
            image="/images/plan.png"
            title="Plan"
            desc="Kami memulai dengan memahami kebutuhan dan tujuan bisnis Anda.
                  Bersama, kita akan mendiskusikan konsep desain, struktur
                  halaman, dan fitur yang dibutuhkan. Setelah itu, kami membuat
                  wireframe awal agar Anda bisa melihat gambaran visual sebelum
                  proses pengembangan dimulai."
          />
          <CardHowItWorks
            image="/images/build.png"
            title="Build"
            desc="Tim kami mulai mengembangkan landing page sesuai dengan konsep
                  yang telah disepakati. Kami memastikan desain responsif,
                  performa optimal, dan integrasi fitur seperti formulir,
                  animasi, atau API berjalan dengan baik. Setelah tahap ini
                  selesai, kami akan memberikan preview untuk Anda tinjau."
          />
          <CardHowItWorks
            image="/images/plan.png"
            title="Launch"
            desc="Setelah melakukan revisi dan penyempurnaan berdasarkan masukan
                  Anda, landing page siap untuk dipublikasikan. Kami akan
                  membantu proses deployment, optimasi kecepatan, dan memastikan
                  semuanya berjalan dengan lancar. Kini, landing page Anda siap
                  digunakan untuk menarik lebih banyak pelanggan! 🚀"
          />
        </div>
      </div>
      <CurvaLine beginColor="#F472B6" endColor="#EA3546" />
    </section>
  );
}

function CardHowItWorks({ image, title, desc }) {
  return (
    <div className="relative z-10">
      <div className="bg-white h-full border-2 border-black w-full rounded-2xl px-2 py-6 flex flex-col items-center">
        <Image
          alt={title}
          src={image}
          className="max-w-1/2 aspect-square"
          width={500}
          height={500}
        />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="px-8 pt-2">
          <p className="font-medium text-gray-400 text-lg">{desc}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 -z-10 -bottom-1 h-6 bg-black rounded-b-2xl"></div>
    </div>
  );
}

export default About;
