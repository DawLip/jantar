import { Inter } from "next/font/google";
import StoreProvider from "@/components/StoreProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} w-full h-screen`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}