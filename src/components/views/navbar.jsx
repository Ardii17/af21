import { useEffect, useState } from "react";

function Navbar({
  heroRef,
  howItWorksRef,
  whoServerRef,
  advantagesRef,
  pricingRef,
}) {
  const [active, setActive] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const scrollTo = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  useEffect(() => {
    const handleActiveNavbar = () => {
      const positionY = window.scrollY;
      if (positionY < currentScrollY) {
        setActive(true);
      } else if (positionY < 10) {
        setActive(false);
      } else if (positionY > currentScrollY) {
        setActive(false);
      }
      setCurrentScrollY(positionY);
    };

    window.addEventListener("scroll", handleActiveNavbar);

    return () => {
      window.removeEventListener("scroll", handleActiveNavbar);
    };
  }, [currentScrollY]);

  return (
    <nav
      className={`${
        active ? "top-0" : "-top-20"
      } fixed flex justify-between left-0 right-0 px-8 py-4 min-md:py-6 z-50 backdrop-blur-md transition-all`}
    >
      <h1 className="text-2xl text-white font-semibold">AF21</h1>
      <ul className="gap-6 items-center justify-center hidden min-md:flex">
        <MyList title="Home" onClick={() => scrollTo(heroRef)} />
        <MyList title="How it Works" onClick={() => scrollTo(howItWorksRef)} />
        <MyList title="Who We Serve" onClick={() => scrollTo(whoServerRef)} />
        <MyList title="Advantages" onClick={() => scrollTo(advantagesRef)} />
        <MyList title="Pricing" onClick={() => scrollTo(pricingRef)} />
      </ul>
    </nav>
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

export default Navbar;
