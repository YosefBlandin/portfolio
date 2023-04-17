"use client";
import { FC, useState } from "react";
import Link from "next/link";
import {
  IoClose,
  IoReorderTwo,
  IoChevronForwardOutline,
} from "react-icons/io5";
import Image, { StaticImageData } from "next/image";

interface SectionArticle {
  sectionTitle: string;
  titleTwClass?: string;
  descriptionTwClass?: string;
  sectionDescription: string;
  sectionLinks: { url: string; name: string }[];
  sectionImg: { src: StaticImageData; alt: string };
  sectionSecondaryImg?: { src: StaticImageData; alt: string };
  bgColorTwClass?: string;
  sectionImgTwClass?: string;
}

export const SectionArticle: FC<SectionArticle> = ({
  sectionTitle,
  titleTwClass,
  sectionDescription,
  descriptionTwClass,
  sectionLinks,
  sectionImg,
  sectionSecondaryImg,
  bgColorTwClass = "bg-black",
  sectionImgTwClass = "",
}) => {
  return (
    <article className={`${bgColorTwClass} w-full pt-8 md:pt-14`}>
      <h2
        className={`text-2xl md:text-4xl lg:text-5xl text-center text-white font-bold ${titleTwClass}`}
      >
        {sectionTitle}
      </h2>
      <p
        className={`text-lg md:text-2xl lg:text-3xl text-center mt-1 lg:mt-2 text-white ${descriptionTwClass}`}
      >
        {sectionDescription}
      </p>
      <ul className="flex justify-center gap-6 mt-2 lg:mt-4">
        {sectionLinks.map((link: { url: string; name: string }) => (
          <li
            key={link.name}
            className="flex text-blue-500 md:text-lg lg:text-xl "
          >
            <Link href={link.url}>{link.name}</Link>
            <IoChevronForwardOutline className="mt-1.5" />
          </li>
        ))}
      </ul>
      <section className="flex justify-center items-end xl:gap-52">
        {sectionSecondaryImg && (
          <picture className="hidden xl:block xl:w-52 2xl:w-60 mb-4">
            <Image
              src={sectionSecondaryImg.src}
              alt={sectionSecondaryImg.alt}
            />
          </picture>
        )}
        <picture
          className={`max-w-md  lg:max-w-xl xl:max-w-2xl  ${sectionImgTwClass}`}
        >
          <Image src={sectionImg.src} alt={sectionImg.alt} />
        </picture>
      </section>
    </article>
  );
};
