import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "NextJs Playground",
  description: "Showcase NextJs features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`container ${roboto.className}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
