import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { slide as Menu } from "react-burger-menu";

import logo from "../../../assets/logo-green-gray.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      dropdown: [
        {
          text: "FULL COURSE",
          url: "/full-course",
        },
        {
          text: "NEW LIVE VIRTUAL CLASSES",
          url: "/new-live-v-classes",
        },
        {
          text: "TEXT BANK PRACTICE SOFTWARE",
          url: "/text-bank",
        },
        {
          text: "TEXTBOOKS",
          url: "/text-books",
        },
        {
          text: "CRAM COURSES",
          url: "/cram-courses",
        },
        {
          text: "AUDIO LECTURES",
          url: "/audio-lectures",
        },
        {
          text: "INSTRUCTION HOTLINE",
          url: "/instruction-hotline",
        },
      ],
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
      dropdown: [
        {
          text: "ABOUT YAEGER",
          url: "/about",
        },
        {
          text: "SECRET SAUCE",
          url: "/secret-sauce",
        },
        {
          text: "RESOURCE CENTER",
          url: "/resource-center",
        },
        {
          text: "BLOG",
          url: "/blog",
        },
        {
          text: "FAQ",
          url: "/faq",
        },
        {
          text: "STATE REQUIREMENTS",
          url: "/state-requirements",
        },
      ],
    },
  ];
  const options = ["one", "two", "three"];
  const defaultOption = options;

  return (
    <>
      <header className="flex flex-col gap-y-5 ">
        <ul className="flex text-greenish gap-x-5 bg-grayish justify-end pr-10 py-3">
          {miniNavLinks.map((link, i) => (
            <Link key={link.url} href={link.url}>
              <li className="group transition duration-300">
                {link.text}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-greenish"></span>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex relative items-center justify-between pb-5">
          <Link href="/">
            <Image
              src={logo}
              alt="yaegercpareview"
              width={180}
              className="ml-16"
            />
          </Link>
          <ul className="hidden lg:flex text-darkish gap-x-6 justify-end items-center mr-10">
            {headerLinks.map((link, i) => (
              <li
                className={`group text-lg transition duration-300 ${
                  link.dropdown && "dropdown"
                }`}
              >
                {link.url ? (
                  <Link key={link.url} href={link.url}>
                    {link.text}
                  </Link>
                ) : (
                  link.text
                )}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-darkish"></span>
                {link.dropdown && (
                  <div
                    className="hidden dropdown-content hover:flex
                  w-[200px]
                  flex-col bg-white drop-shadow-lg"
                  >
                    {link.dropdown.map((item, i) => (
                      <a
                        className="px-5 py-3 hover:bg-gray-200 text-sm"
                        href={item.url}
                        key={item.url}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <Link href="/cart">
              <BsCartFill />
            </Link>
          </ul>
          <GiHamburgerMenu
            className="mx-10 lg:hidden text-darkish"
            size={35}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </header>
      {mobileMenuOpen && (
        <Menu isOpen={mobileMenuOpen}>
          <ul className="hidden lg:flex lg:flex-col text-darkish justify-end items-center mr-10">
            {headerLinks.map((link, i) => (
              <li
                className={`group text-lg transition duration-300 mb-3 ${
                  link.dropdown && "dropdown"
                }`}
              >
                {link.url ? (
                  <Link key={link.url} href={link.url}>
                    {link.text}
                  </Link>
                ) : (
                  link.text
                )}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-darkish"></span>
                {link.dropdown && (
                  <div
                    className="hidden dropdown-content hover:flex
                  w-[200px]
                  flex-col bg-white drop-shadow-lg"
                  >
                    {link.dropdown.map((item, i) => (
                      <a
                        className="px-5 py-3 hover:bg-gray-200 text-sm"
                        href={item.url}
                        key={item.url}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <Link href="/cart">
              <BsCartFill />
            </Link>
          </ul>
        </Menu>
      )}
    </>
  );
};

export default Header;
