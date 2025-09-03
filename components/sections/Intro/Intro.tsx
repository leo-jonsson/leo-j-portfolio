import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="w-full grid gap-2 p-2">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">Leo Jonsson A.</h1>
          <p className="text-2xl text-muted-foreground ml-0.5 mt-1">
            React Developer
          </p>
        </div>
        <Image
          src="/assets/Me.jpeg"
          alt="Image of me"
          width={130}
          height={130}
          className="rounded-full object-cover grayscale md:block hidden"
        />
      </div>
    </section>
  );
};

export default Intro;
