"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/react.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between w-full px-24 py-16">
        <Link href="/">
          {" "}
          <Image alt="React Conference" src={Logo} />{" "}
        </Link>

        <ul className="md:flex hidden  items-center md:space-x-8 space-x-4 font-medium">
          <li className="hover:scale-110">
            <Link href="/about-us">About us</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/what-we-do">What We do</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/our-work">Our work</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/say-hi">Say hi</Link>
          </li>
        </ul>

        <RxHamburgerMenu onClick={(e) => setIsOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-end md:hidden w-full px-14 py-7 font-medium shadow-md">
          <li className="hover:scale-110">
            <Link href="/about-us">About us</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/what-we-do">What We do</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/our-work">Our work</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:scale-110">
            <Link href="/say-hi">Say hi</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
