import React from "react";
import Image from "next/image";

type Params = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  width: number;
  height: number;
};

export default function CardH({
  title,
  description,
  image: { src, alt },
  width,
  height,
}: Params) {
  return (
    <div
      className="flex rounded-lg"
      // style={{ width: "100%", boxShadow: "0 0 0 1px rgba(0,0,0, 0.2)" }}
    >
      <div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  );
}
