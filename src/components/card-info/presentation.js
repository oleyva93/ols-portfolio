function Presentation() {
  return (
    <section className="flex gap-8 justify-between flex-col h-full p-4">
      <div className="grid gap-20">
        <h1 className="text-2xl font-thin">OSCAR LEYVA</h1>
        <p className="text-base w-[55%] font-thin">
          I am a product architect who combines artistry with functionality to
          create captivating experiences.
        </p>
      </div>
      <div className="flex flex-col !gap-0">
        <p className="text-basefont-thin">Mérida, Yucatán</p>
        <p className="text-base font-thin">México</p>
        <p className="text-base font-thin text-subtitle">
          Precision, balance & discipline
        </p>
      </div>
    </section>
  );
}

export default Presentation;
