function Reading() {
  return (
    <section className="flex justify-between gap-4 flex-col h-full p-4 cursor-pointer">
      <div className="grid gap-2">
        <h2 className="text-base text-end font-thin">Reading</h2>
        <div className="text-base text-end font-thin h-56 w-full flex items-center justify-center">
          Coming Soon
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-base font-thin">
          Personal Library • Recommended Reads
        </p>
        <p className="text-base font-thin text-subtitle">45 Books</p>
      </div>{" "}
    </section>
  );
}

export default Reading;
