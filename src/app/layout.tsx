import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aswin Joseraj | Frontend Developer",
  description: "Portfolio of Aswin Jose Raj - Frontend Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${firaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
