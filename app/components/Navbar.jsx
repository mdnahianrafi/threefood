import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="py-5 container mx-auto ">
        <div className="navbar  w-full  rounded-2xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" lg:hidden mr-10">
                <IoIosMenu className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content  bg-gradient-to-b  from-white from-10% via-[#dfe4d3b2]  via-34% to-[#dbdfd394] to-100rounded-box z-10 mt-3 w-52 p-2 rounded-3xl shadow text-base font-medium font-inter"
              >
                <li className="hover:font-semibold hover:transition-all hover:ease-in-out duration-300 ">
                <Link href="/">Home</Link>
                </li>
                <li className="hover:font-semibold hover:transition-all hover:ease-in-out duration-300">
                <Link href="#ti">Recipes</Link>
                </li>
                <li className="hover:font-semibold hover:transition-all hover:ease-in-out duration-300">
                <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:font-semibold hover:transition-all hover:ease-in-out duration-300">
                  <Link href="">Contacts</Link>
                </li>
              </ul>
            </div>

            <Link href="/" className=" text-xl bg-white rounded-3xl p-1">
              {" "}
              <Image src={Logo} alt="logo.png" width={100} height={30} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 text-base  font-inter">
              <li className="hover:font-semibold  ease-in-out duration-300 lg:pr-12 ">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:font-semibold  ease-in-out duration-300 lg:pr-12 ">
                <Link href="#ti">Recipes</Link>
              </li>
              <li className=" hover:font-semibold  ease-in-out duration-300 lg:pr-12 ">
                <Link href="/blog">Blog</Link>
              </li>
              <li className=" hover:font-semibold  ease-in-out duration-300 lg:pr-12 ">
                <Link href="/contact">Contact</Link>
              </li>

            </ul>
          </div>
          <div className="navbar-end">
            <a href="">
              {" "}
              <FaFacebookF className="text-base lg:text-xl mr-10" />
            </a>
            <a href="">
              {" "}
              <FaTwitter className="text-base lg:text-xl mr-10" />
            </a>
            <a href="">
              {" "}
              <FaInstagram className="text-base lg:text-xl mr-10" />
            </a>
          </div>
        </div>
      </nav>
      <hr className="pb-10" />
    </>
  );
};

export default Navbar;
