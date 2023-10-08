"use client";
import Image from "next/image";
import paw from "../../public/paw.svg";

export default function Logo() {
  const handleClick = () => {
    alert("algo");
  };
  return (
    <div className="flex cursor-pointer" onClick={handleClick}>
      <Image src={paw} alt="imagen de la pata" width={25} height={25}></Image>
      <h3>Pet Finder</h3>
    </div>
  );
}
