import React, { useContext, useState } from "react";
import Link from "next/link";
import { navLinks } from "../../data";
import {
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlinePlus,
  AiOutlineLogin,
} from "react-icons/ai";
import Button from "../../subcomponents/btns/Button";
import { useRouter } from "next/router";
import Search from "../../subcomponents/Search";
import { DexContext } from "../../context/DexContext";
import { BiLogOutCircle } from "react-icons/bi";

export default function Navbar() {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
  const router = useRouter();
  const {connectWallet, logout, shortAccountAddress, isAuthenticated, currentAccount} = useContext(DexContext)

  //   If button is there
  const handleClick = async () => {
    if (isMobileNavOpen) {
      setisMobileNavOpen(false);
    }

    await connectWallet();
  };
  const handleLogout = async () => {
    if (isMobileNavOpen) {
      setisMobileNavOpen(false);
    }

    await logout();
  };
  return (
    <div>
      <div className="flex flex-wrap sys-app-notCollapsed ">
        <div className="w-full ">
          <div className="pb-0 py-2 px-2 mx-auto ">
            <div className="w-full flex justify-between items-center p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
              {/* Logo */}
              <div>
                <span className="px-2 mr-2 md:border-r border-gray-800">
                  <img
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="alt placeholder"
                    className="w-8 h-8 -mt-1 inline mx-auto"
                  />
                </span>
              </div>
              <div className="px-2 md:flex gap-x-5 items-center flex-1 text-gray-900 bg-white font-medium capitalize hidden">
                {/* Links */}
                {navLinks?.map(({ title, link, icon }, id) => (
                  <Link key={id} href={link}>
                    <a
                      id={id}
                      className={`px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded ${
                        router.pathname == link
                          ? "text-gray-700 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="p-2 bg-gray-200 rounded-full">
                        {icon}
                      </span>
                      <span className="mx-1">{title}</span>
                    </a>
                  </Link>
                ))}
                <Search placeholder="Search.." />
              </div>

              {/* After all nav links if you want any button in right then it will come here */}
              <div>
                {
                  isAuthenticated ?  <Button
                  text="Logout"
                  icon={<BiLogOutCircle className="text-2xl" />}
                  className="className"
                  onClick={handleLogout}
                  disabled={false}
                  fullWidth={false}
                /> :  <Button
                  text="Login"
                  icon={<AiOutlineLogin className="text-2xl" />}
                  className="className"
                  onClick={handleClick}
                  disabled={false}
                  fullWidth={false}
                />
                }
               
              </div>

              {/* Hamberger Menu  */}
              <div className="md:hidden transition-all mr-3 my-3 cursor-pointer hover:text-gray-700">
                {isMobileNavOpen ? (
                  <AiOutlineMenuFold
                    onClick={() => setisMobileNavOpen(false)}
                    className="rounded text-2xl"
                  />
                ) : (
                  <AiOutlineMenuUnfold
                    onClick={() => setisMobileNavOpen(true)}
                    className="rounded text-2xl"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div
            id="navbar"
            className={`pt-0 absolute top-2 z-100 mx-auto ${
              isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
            } transition-all flex-wrap md:hidden`}
          >
            <div className="py-[.5px] w-64">
              <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-white rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
                {/* Logo */}
                <img
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                  alt="alt placeholder"
                  className="w-8 h-8 mx-auto mb-5 "
                />

                {/* Links */}
                {navLinks?.map(({ title, link, icon }, id) => (
                  <Link key={id} href={link}>
                    <a
                      id={id}
                      className={`px-2 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded ${
                        router.pathname == link
                          ? "text-gray-700 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="p-2 bg-gray-200 rounded-full">
                        {icon}
                      </span>
                      <span className="mx-1">{title}</span>
                    </a>
                  </Link>
                ))}

                {/* After all nav links if you want any button or link then it will come here */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
