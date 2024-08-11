import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Plus_Jakarta_Sans } from "next/font/google";
import { type Metadata } from "next";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",

  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "JSK Portfolio Management Co. L.L.C",
  description:
    "At JSK, our foundation is built on financial wisdom and a commitment to your success",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-sans">
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
