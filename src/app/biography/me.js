import Image from "next/image";

const Me = ({ image }) => {
  return (
    <div className="flex flex-[2] bg-card-secondary justify-between gap-4 flex-col h-full cursor-pointer main-header">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-60 w-full object-cover md:h-full md:w-80"
            src={image}
            width={450}
            height={450}
            alt="A working image"
          />
        </div>
        <div className="p-4 sxl:p-8 grid grid-cols-1 sxl:grid-cols-2 gap-5 text-base font-thin">
          <div className="rounded-md p-2 bg-tags">
            Interaction / Product Designer — generalist by thinking, specialist
            by practice.
          </div>
          <div className="rounded-md p-2 bg-tags">
            I strive to live by my work values — precision, balance and
            discipline.
          </div>
          <div className="rounded-md p-2 bg-tags">
            My vocation is in pursuit of systems that seamlessly come together,
            experiences that elegantly convey ideas, and interactions that
            challenge conventions.
          </div>
          <div className="h-fit rounded-md p-2 bg-tags">
            Design is communication. For me, clarity and momentum are a
            formidable duo.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Me;

{
  /* <article
      className="flex flex-[2] bg-card-secondary justify-between gap-4 flex-col h-full p-4 cursor-pointer main-header"
      id="biography-section"
    >
      <header className="py-3">
        <label className="text-2xl font-thin">Software Engineer</label>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2  gap-2 items-start">
        <div className="image-content">
          <div className="absolute-image">
            <Image
              src={image}
              width={450}
              height={450}
              alt="my biography photo"
              quality={100}
              priority={false}
              className="image gallery"
              unoptimized
            />
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-base font-thin">
          <div className="rounded-md p-2 bg-tags">
            Interaction / Product Designer — generalist by thinking, specialist
            by practice.
          </div>
          <div className="rounded-md p-2 bg-tags">
            I strive to live by my work values — precision, balance and
            discipline.
          </div>
          <div className="rounded-md p-2 bg-tags">
            My vocation is in pursuit of systems that seamlessly come together,
            experiences that elegantly convey ideas, and interactions that
            challenge conventions.
          </div>
          <div className="h-fit rounded-md p-2 bg-tags">
            Design is communication. For me, clarity and momentum are a
            formidable duo.
          </div>
        </section>
      </section>
    </article> */
}
