import Link from "next/link";
import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import {
  BsVimeo,
  BsYoutube,
  BsSpotify,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const footerNavLinks = [
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Contact",
      url: "/contact",
    },
    {
      text: "AdaptaPASS",
      url: "/adaptapass",
    },
    {
      text: "Our Partners",
      url: "/partners",
    },
    {
      text: "Campus Representatives",
      url: "/campus-representatives",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];
  const footerSocialIcons = [
    {
      icon: <FiTwitter />,
      url: "/",
    },
    {
      icon: <FaFacebookF />,
      url: "/",
    },
    {
      icon: <BsVimeo />,
      url: "/",
    },
    {
      icon: <FaPinterestP />,
      url: "/",
    },
    {
      icon: <GrLinkedinOption />,
      url: "/",
    },
    {
      icon: <BsYoutube />,
      url: "/",
    },
    {
      icon: <AiOutlineGoogle />,
      url: "/",
    },
    {
      icon: <AiFillInstagram />,
      url: "/",
    },
    {
      icon: <BsSpotify />,
      url: "/",
    },
    {
      icon: <BsMusicNoteBeamed />,
      url: "/",
    },
  ];
  return (
    <footer className="text-white">
      <div className="bg-greenish p-10 grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-10">
        <div>
          <div className=" text-2xl mb-3">About Yaeger CPA Review</div>
          <div className="text-base">
            We strive to get to the heart of what CPA candidates really need to
            know to sit for the exam with confidence - and earn their CPAs
          </div>
        </div>
        <div>
          <div className="text-2xl mb-3">Navigation</div>
          <ul className="flex flex-col gap-y-3">
            {footerNavLinks.map((link, i) => (
              <Link key={link.url} href={link.url}>
                <li className="group transition duration-300">{link.text}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-2xl mb-3">Get in Touch</div>
          <ul className="flex flex-col gap-y-3">
            <li className="group transition duration-300">
              10211 Daphney House Way Rockville, MD 20850
            </li>
            <li className="group transition duration-300">
              <a href="tel:1-301-717-1968">(301) 717-1968</a>
            </li>
            <li className="group transition duration-300">
              <a href="mailto:info@yaegercpareview.com">
                info@yaegercpareview.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-darkish p-10 flex flex-col justify-between items-center lg:flex-row gap-y-5 gap-x-10">
        <div>Copyright © 2023 Yaeger CPA Review</div>
        <ul className="flex gap-x-3 sm:gap-x-5 text-white text-lg">
          {footerSocialIcons.map((icon, i) => (
            <Link href={icon.url} key={`footer-icon-${icon.url}`}>
              <li>{icon.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
