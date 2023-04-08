"use client";
import { useState } from "react";
import { IoReorderTwo } from "react-icons/io5";

export const MainNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => setOpen(!open);
  return (
    <>
      <nav>
        <IoReorderTwo color="#ffffffcc" fontSize={"2rem"} />
      </nav>
      {open && <section></section>}
    </>
  );
};
