import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BsCartFill} from 'react-icons/bs';

import logo from "../../../assets/logo-green-gray.png";

const Header = () => {
  const miniNavLinks = [
    {
      text: "Contact Us",
      url: "/contact",
    },
    {
      text: "Student Login",
      url: "/student-login",
    },
    {
      text: "My Cart",
      url: "/cart",
    },
  ];
  const headerLinks = [
    {
      text: "PRODUCTS",
      url: "/products",
    },
    {
      text: "SUBSCRIPTIONS",
      url: "/subscriptions",
    },
    {
      text: "WHAT'S NEW",
      url: "/whats-new",
    },
    {
      text: "DEMOS",
      url: "/demos",
    },
    {
      text: "REVIEWS",
      url: "/reviews",
    },
    {
      text: "RESOURCES",
      url: "/resources",
    },
  ];
  const options = ["one", "two", "three"];
  const defaultOption = options;

  return (
    <header className="flex flex-col gap-y-5 my-5 mx-16">
      <ul className="flex text-greenish gap-x-5 justify-end mr-10">
        {miniNavLinks.map((link, i) => (
          <Link href={link.url}>
            <li className="group transition duration-300">
              {link.text}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-greenish"></span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex relative items-center justify-between">
        <Image src={logo} alt='yaegercpareview' width={200} />
        <ul className="flex text-darkish gap-x-6 justify-end items-center mr-10">
        {headerLinks.map((link, i) => (
          <Link href={link.url}>
            <li className="group transition duration-300">
              {link.text}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-darkish"></span>
            </li>
          </Link>
        ))}
        <BsCartFill />
      </ul>
      </div>
    </header>
  );
};

export default Header;
