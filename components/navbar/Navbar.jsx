import React from "react";
import { useRouter } from "next/router";
import useMediaQuery from "./../../hooks/useMediaQuery";
import Link from "next/link";
import Image from "next/image";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isTopofPage, setIsTopofPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTopofPage(true);
      }
      if (window.pageYOffset !== 0) {
        setIsTopofPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const flexBetween = "flex items-center justify-content-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopofPage
    ? "bg-transparent text-white font-bold"
    : "bg-white z-40 text-black font-bold drop-shadow-xl";

  const isActiveMenuItem = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <nav>
        <div
          className={`${navbarBackground} ${flexBetween} fixed top-0 z-20 h-20 w-full py-5`}
        >
          <div className={`${flexBetween} w-10/11 mx-auto`}>
            <div className={`${flexBetween} w-full gap-16 `}>
              <Image
                src={"/logo/logo.png"}
                width={200}
                height={50}
                alt="logo"
                className={"absolute left-20 "}
              />

              {isAboveMediumScreens ? (
                <>
                  <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-base `}>
                      <nav className={`${flexBetween} gap-8 mt-2 text-base`}>
                        <Link
                          className={`hover:text-sky-600 ${
                            isActiveMenuItem("/") && "underline "
                          }`}
                          href="/"
                        >
                          Home
                        </Link>
                        <Link
                          className={`hover:text-sky-600 ${
                            isActiveMenuItem("/about") && "underline"
                          }`}
                          href="/about"
                        >
                          About
                        </Link>
                        <Link
                          className={`hover:text-sky-600 ${
                            isActiveMenuItem("/services") && "underline"
                          }`}
                          href="/services"
                        >
                          Services
                        </Link>
                        <Link
                          className={`hover:text-sky-600 ${
                            isActiveMenuItem("/photo-gallery") && "underline"
                          }`}
                          href="/photo-gallery"
                        >
                          Gallery
                        </Link>
                        <Link
                          className={`hover:text-sky-600 ${
                            isActiveMenuItem("/blogs") && "underline"
                          }`}
                          href="/blogs"
                        >
                          Blogs
                        </Link>
                      </nav>
                    </div>
                  </div>
                  <div className="absolute right-20 -mt-16">
                    <button
                      className={
                        "bg-gradient-to-r from-cyan-500 to-blue-500 py-4 text-lg font-extrabold px-8 hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500 mt-16 text-white rounded-md"
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <SlMenu className="h-6 w-6 absolute right-10 text-black" />
                </button>
              )}
            </div>
          </div>
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <>
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-900 opacity-70 text-white drop-shadow-xl">
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <RxCross1 className="h-6 w-6 absolute right-10 " />
                </button>
              </div>

              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <nav className="gap-8 text-lg font-bold">
                  <div className="mb-6">
                    <Link href="/">Home</Link>
                  </div>
                  <div className="mb-6">
                    <Link href="/about">About</Link>
                  </div>
                  <div className="mb-6">
                    <Link href="/services">Services</Link>
                  </div>
                  <div className="mb-6">
                    <Link href="/gallery">Gallery</Link>
                  </div>
                  <div className="mb-6">
                    <Link href="/blogs">Blogs</Link>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
