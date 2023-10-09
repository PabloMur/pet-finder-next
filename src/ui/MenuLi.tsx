"use client";
import { useGoTo } from "@/hooks";
export default function MenuLi({ href, children }: any) {
  const goTo = useGoTo(href);

  return (
    <li className="cursor-pointer">
      <button onClick={goTo}>{children}</button>
    </li>
  );
}
