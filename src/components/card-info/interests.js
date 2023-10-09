const Interests = ({ interests }) => (
  <section className="flex h-full p-4">
    <div className="w-[50%] zero-width"></div>
    <div className="flex justify-between gap-4 flex-col h-full !w-[50%]">
      <div className="grid gap-3">
        <h3 className="text-lg font-thin text-subtitle">Interests</h3>
        <ul>
          {interests.map((interest) => (
            <li key={interest?.id} className="text-base font-thin">
              {interest.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-thin text-subtitle">Socials</h3>
          <div className="grid gap-1">
            <a
              className="text-base font-thin cursor-alias"
              href="https://twitter.com/GladysGSM"
            >
              Twitter
            </a>
            <a
              className="text-base font-thin cursor-alias"
              href="https://www.linkedin.com/in/gladys-giselle-743a55196/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="text-base font-thin cursor-alias"
              href="https://www.instagram.com/gladysgsm/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-thin text-subtitle">Content</h3>
          <div className="grid gap-1">
            <a
              className="text-base font-thin cursor-alias"
              href="https://www.youtube.com/@atelier.line_1"
              target="_blank"
            >
              LINE
            </a>
            <a className="text-base font-thin cursor-alias" href="#">
              Anothers
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;
