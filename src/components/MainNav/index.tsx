"use client";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoReorderTwo } from "react-icons/io5";

export const MainNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => setOpen(!open);

  const links = [
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1lpI_r-YpIOgX-BepdE1F5eQe03mmKtAu/view?usp=sharing",
    },
    {
      name: "Projects",
      url: "/blog",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yosefblandin/",
    },
  ];

  return (
    <>
      <nav>
        {open ? (
          <IoClose
            onClick={handleClick}
            color="#ffffffcc"
            fontSize={"2rem"}
            className="relative z-40 lg:hidden"
          />
        ) : (
          <IoReorderTwo
            onClick={handleClick}
            color="#ffffffcc"
            fontSize={"2rem"}
            className="relative z-40 font-medium lg:hidden"
          />
        )}
        <section className="hidden lg:flex">
          <ul className="flex gap-8 xl:gap-16 items-center justify-start">
            {links.map((link) => (
              <li
                key={link.name}
                className="text-white font-light text-xs lg:text-lg"
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
      {open && (
        <section className="bg-zinc-900 fixed z-20 top-0 left-0 right-0 bottom-0 w-full h-screen md:hidden">
          <ul className="flex flex-col gap-4 px-12 py-14">
            {links.map((link) => (
              <li key={link.name} className="text-white font-medium text-2xl">
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
