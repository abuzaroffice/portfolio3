import localFont from "next/font/local";
import "./globals.css";
import localFont from "next/font/local";


const Cursive = localFont({
  src: "./fonts/Gilroy-Medium.e7e7c091.ttf",
  variable: "--font-Gilroy",
  weight: "100 900",
});
const Mazius = localFont({
  src: "./fonts/Mazius-Extraitalic.121a71a7.otf",
  variable: "--font-Mazius",
  weight: "100 900",
});


export const metadata = {
  title: "abuzar's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body
        className={`${Cursive.variable} ${Mazius.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
