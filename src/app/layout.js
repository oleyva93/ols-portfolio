import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oscar Leyva",
  description: "I'm a Full-Stack developer",
  icons: {
    icon: "os.svg",
  },
  openGraph: {
    title: "Oscar's Portfolio",
    description: "I'm a Full-Stack developer",
    type: "website",
    locale: "en_IE",
    url: "https://oscarleyva.vercel.app/",
    images: [
      {
        url: "/api/me",
        width: 800,
        height: 600,
        alt: "Oscar Leyva",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
