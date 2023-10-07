const Footer = () => {
  return (
    <section className="flex h-full p-2">
      <div className="w-[50%]"></div>
      <div className="flex justify-between flex-col h-full w-[50%]">
        <div className="grid gap-3"></div>

        <div className="flex gap-10 text-right">
          <div className="flex flex-col gap-1 w-full">
            <div className="grid gap-1">
              © 2023. Handcrafted by Ggsm. Auto Light/Dark ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
