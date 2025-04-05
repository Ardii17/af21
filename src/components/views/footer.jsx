function Footer({
  heroRef,
  howItWorksRef,
  whoServerRef,
  advantagesRef,
  pricingRef,
}) {
  const scrollTo = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  return (
    <footer className="w-full flex flex-col gap-6 min-md:gap-0 min-md:flex-row justify-between bg-[#252B2B] px-4 py-4 min-md:px-2 min-md:py-6 min-lg:px-20 min-lg:py-8 max-sm:items-center max-sm:justify-center">
      <div className="flex flex-col justify-between">
        <h1 className="text-white font-bold text-3xl">AF21</h1>
      </div>
      <ul className="gap-4 items-start min-md:items-center justify-center flex">
        <MyList title="Home" onClick={() => scrollTo(heroRef)} />
        <MyList title="How it Works" onClick={() => scrollTo(howItWorksRef)} />
        <MyList title="Who We Serve" onClick={() => scrollTo(whoServerRef)} />
        <MyList title="Advantages" onClick={() => scrollTo(advantagesRef)} />
        <MyList title="Pricing" onClick={() => scrollTo(pricingRef)} />
      </ul>
      <div className="flex justify-between gap-4">
        <a
          href="https://wa.me/6289684253334"
          target="_blank"
          className="p-2 rounded-full border-2 border-white flex items-center justify-center cursor-pointer group hover:border-[#662e9b] transition-all"
        >
          <i className="bx bxl-whatsapp text-white text-xl group-hover:text-[#662e9b] transition-all" />
        </a>
        <a
          href="https://www.instagram.com/af21.dev?igsh=MTJobzBnMm41YXJrMw=="
          target="_blank"
          className="p-2 rounded-full border-2 border-white flex items-center justify-center cursor-pointer group hover:border-[#662e9b] transition-all"
        >
          <i className="bx bxl-instagram text-white text-xl group-hover:text-[#662e9b] transition-all" />
        </a>
      </div>
    </footer>
  );
}

function MyList({ title, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="font-medium text-white cursor-pointer hover:text-[#662e9b] hover:underline transition-all"
      >
        {title}
      </button>
    </li>
  );
}

export default Footer;
