import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// importacion de herramientas
import Link from "next/link";
import Image from "next/image";
// importacion de iconos de react-icons
import { VscGithub } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoReader } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colombia",
  description: "information about Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-950 text-gray-300 mt-10 mb-20`}>
         {/* creacion de la navbar */}
      <nav className="px-10 bg-slate-900 fixed top-0 min-w-full font-bold">
        <ul className="flex list-none justify-between items-center h-9 capitalize">
          <li className="inline-block items-center">
            <Link href="/home">Home</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/himno">himno</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/departament">departament</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/departament">municipalities</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/departament">presidents</Link>
          </li>
          <li className="inline-block items-center">
            <Link href="/departament">constitution</Link>
          </li>
        </ul>
      </nav>
      
      {children}
      <div className="px-10 bg-slate-500 fixed bottom-0 h-20 min-w-full font-bold flex justify-center items-center">
      <Image
        src="/logo circulo limpio.png"
        alt="logo"
        width={120}
        height={100}
        className="my-0.5"
      />
      <div>
        <div className="flex">
          <h1 className="mx-1">Creado Por:</h1>
          <h1>Wilson Sanchez</h1>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://github.com/WilsonSanFullStack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub className="text-3xl mx-2 cursor-pointer" />
          </Link>
          <Link
            href="mailto:harveysanch@gmail.com?subject=Interesado%20en%20sus%20sevicios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="text-3xl mx-2 cursor-pointer" />
          </Link>

          <Link
            href="https://wa.me/+573156226982"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="text-3xl mx-2 cursor-pointer" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/wilsonsan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="text-3xl mx-2 cursor-pointer" />
          </Link>

          <Link href="https://wilsonsanchez.vercel.app/" target="_blank">
            <IoReader className="text-3xl mx-2 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
