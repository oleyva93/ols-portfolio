import React from "react";

const Photography = () => {
  return (
    <section className="flex justify-between gap-4 flex-col h-full p-4 cursor-pointer">
      <div className="grid gap-2">
        <h2 className="text-base text-end font-thin">Photography</h2>
        <div className="text-base text-end font-thin h-56 w-full flex items-center justify-center">
          Coming Soon
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-base font-thin">Photobook • Documentation</p>
        <p className="text-base font-thin text-subtitle">20 Photos</p>
      </div>
    </section>
  );
};

export default Photography;
