"use client";
import { useGoTo } from "@/hooks";

export default function MenuLi({ href, children }: any) {
  const goTo = useGoTo(href);
  return (
    <li className="cursor-pointer">
      <a href={href}>{children}</a>
      <button onClick={goTo}></button>
    </li>
  );
}
