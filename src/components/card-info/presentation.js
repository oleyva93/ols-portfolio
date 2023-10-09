function Presentation({ user }) {
  const { bio, city, state, country, capabilities } = user?.presentation;
  return (
    <section className="flex gap-8 justify-between flex-col h-full p-4">
      <div className="grid gap-20">
        <h1 className="text-2xl font-thin uppercase">{`${user?.name} ${user?.last_name}`}</h1>
        <p className="text-base w-[55%] font-thin">{bio}</p>
      </div>
      <div className="flex flex-col !gap-0">
        <p className="text-basefont-thin">{`${city} ${state}`}</p>
        <p className="text-base font-thin">{country}</p>
        <p className="text-base font-thin text-subtitle">{capabilities}</p>
      </div>
    </section>
  );
}

export default Presentation;
