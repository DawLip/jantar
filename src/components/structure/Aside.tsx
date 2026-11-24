"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Aside() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItem = (label: string, path: string, indent = false) => (
    <button
      type="button"
      onClick={() => router.push(path)}
      className={`
        w-full py-2 text-left text-2xl
        text-OnCardWhite cursor-pointer
        hover:bg-CardHeader transition-colors
        ${indent ? "px-12" : "px-8"}
        ${pathname === path ? "bg-CardHeader font-bold" : "font-normal"}
      `}
    >
      {label}
    </button>
  );

  return (
    <aside className="w-56 shrink-0 self-stretch py-4 bg-CardBgc rounded-2xl flex flex-col justify-between overflow-hidden">
      <nav className="w-full flex flex-col">
        {menuItem("Etykiety", "/etykiety")}
        {menuItem("Promocyjne", "/etykiety/promocyjne", true)}
      </nav>

      <nav className="w-full flex flex-col">
        {menuItem("Ustawienia", "/ustawienia")}
        {menuItem("Wyloguj", "/logout")}
      </nav>
    </aside>
  );
}