import CurvaLine from "../elements/curva_line";

function Pricing({ pricingRef }) {
  const teksBasicPackage =
    "Hallo, Saya tertarik dengan Jasa anda untuk package basic";
  const teksPremiumPackage =
    "Hallo, Saya tertarik dengan Jasa anda untuk package premium";

  return (
    <section ref={pricingRef} className="bg-[#EA3546] flex flex-col gap-8">
      <div className="flex flex-col gap-12 items-center justify-center py-10 px-4 min-md:px-12 min-lg:px-20">
        <p className="text-white font-bold text-3xl text-shadow">Pricing</p>
        <div className="flex flex-col min-md:flex-row gap-8 w-full">
          <CardPricing
            price="Rp. 500.000"
            discount="Rp. 1.000.000"
            title="Basic Package"
            desc="Website profesional dengan domain gratis, desain responsif, dan performa optimal."
            options={[
              "Website dengan domain gratis",
              "Desain responsif dan unik",
              "Performa optimal dengan loading cepat",
              "Integrasi media sosial",
              "Revisi minor (maksimal 2 kali)",
              "Dukungan teknis selama 1 bulan",
            ]}
            onContact={`https://wa.me/6289684253334?text=${teksBasicPackage}`}
          />
          <CardPricing
            price="Rp. 800.000"
            discount="Rp. 1.300.000"
            title="Premium Package"
            desc="Website eksklusif dengan domain khusus, performa tinggi, dan garansi uang kembali."
            options={[
              "Website dengan domain khusus (.com, .id, dll.)",
              "Desain eksklusif dan disesuaikan dengan brand",
              "Performa tinggi dan optimasi kecepatan",
              "Integrasi media sosial dan fitur tambahan sesuai kebutuhan",
              "Dukungan teknis selama 3 bulan",
              "Garansi uang kembali jika tidak puas",
            ]}
            onContact={`https://wa.me/6289684253334?text=${teksPremiumPackage}`}
          />
        </div>
      </div>
      <CurvaLine beginColor="#EA3546" endColor="#252B2B" />
    </section>
  );
}

function CardPricing({ price, discount, title, desc, options, onContact }) {
  return (
    <div
      className="relative z-10 w-full min-lg:w-2/3 place-self-center h-full bg-red-600"
      data-aos="fade-up"
    >
      <div className="bg-white h-full border-2 border-black w-full rounded-2xl p-4 flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <h1 className="font-extrabold text-2xl">{price}</h1>
          <h1 className="font-medium text-lg line-through">{discount}</h1>
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-medium text-gray-500">{desc}</p>
        <ul className="font-medium text-gray-500 flex flex-col gap-2">
          {options.map((option, index) => (
            <li key={index} className="flex gap-4 items-center">
              <i className="bx bx-check bg-[#662e9b] rounded-full p-1 text-white"></i>
              <p>{option}</p>
            </li>
          ))}
        </ul>
        <div className="relative z-10 w-full place-self-center mt-4">
          <div className="w-full z-10 rounded hover:translate-y-1 transition-all">
            <button
              onClick={() => window.open(onContact, "_blank")}
              className={`py-3 px-3 font-semibold whitespace-nowrap w-full bg-[#662e9b] hover:bg-[##662e9bd8] rounded transition-all`}
            >
              <p className="text-white">Contact Us</p>
            </button>
          </div>
          <div className="absolute inset-x-0 w-full -z-10 -bottom-1 h-6 bg-black/30 rounded-b"></div>
        </div>
      </div>
      <div className="absolute inset-x-0 -z-10 -bottom-1 h-6 bg-black rounded-b-2xl"></div>
    </div>
  );
}

export default Pricing;
