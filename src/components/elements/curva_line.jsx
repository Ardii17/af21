function CurvaLine({ beginColor, endColor }) {
  return (
    <div class={`relative w-full h-20 bg-[${beginColor}]`}>
      <svg
        class="absolute bottom-0 w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="black"
          stroke-width="5"
          d="M0,40 C360,100 720,-20 1080,40 C1440,100 1440,40 1440,40"
        />

        <path
          fill={endColor}
          d="M0,40 C360,100 720,-20 1080,40 C1440,100 1440,40 1440,40 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}

export default CurvaLine;
