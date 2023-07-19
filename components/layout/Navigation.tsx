import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, SyntheticEvent } from "react";
import styles from "./Navigation.module.scss";
const nightwind = require("nightwind/helper");
//@ts-ignore-next-line
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Loading from "../common/Loading";
import Image from "next/image";

export default function Navigation() {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  const [sunColor, setSunColor] = useState("");

  const [isDarkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    if (window.scrollY > 140) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const router = useRouter();

  const menuItems = [
    { title: "O mnie", url: "/omnie" },
    { title: "Blog", url: "/blog" },
    { title: "Współpraca", url: "/wspolpraca" },
    { title: "Kontakt", url: "/kontakt" },
  ];

  const useOutsideMenu = (ref: React.RefObject<HTMLInputElement>) => {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        const target = e.target as Node;
        if (ref.current && !ref.current.contains(target)) {
          toggleMenuVisibility(false);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideMenu(menuRef);

  useEffect(() => {
    const isDarkSet = localStorage["nightwind-mode"] === "dark";
    setDarkMode(isDarkSet);
    const isThemeStored = "nightwind-mode" in localStorage;

    const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    if (isDarkSet || (!isThemeStored && isDarkPreferred)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleNightMode = () => {
    setDarkMode(!isDarkMode);
    nightwind.toggle(true);
  };

  useEffect(() => {
    if (typeof window !== undefined && window.innerWidth > 768) {
      if (router.pathname === "/") {
        if (animateHeader) {
          setSunColor("black");
        } else {
          setSunColor("white");
        }
      } else {
        setSunColor("black");
      }
    } else {
      setSunColor("black");
    }
  }, [router, animateHeader]);

  return (
    <div
      className={`px-4 sm:px-6 lg:px-8 w-full fixed top-0 z-50 ease-in-out duration-500  ${animateHeader &&
        "md:py-4 bg-gray-50 shadow-xl"}`}
    >
      <div className="flex h-16 items-center justify-between" ref={menuRef}>
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <span className="sr-only">Strona główna</span>
          <Link
            className="block text-red-600 hover:dark:text-red-500/75 dark:text-red-200"
            href="/"
          >
            <Image
              alt="Radek Trener"
              src="/images/logoShort.svg"
              width={150}
              height={50}
            />
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <nav
            aria-label="Global"
            className={`${
              isMenuVisible ? styles.menu : styles.menu__hidden
            } bg-gray-50 md:bg-inherit md:dark:bg-inherit md:block duration-500 pt-16 md:pt-0`}
          >
            <ul className="flex items-center gap-6 text-sm ">
              <li className="md:hidden">
                <Link
                  className={` dark:text-gray-900 dark:hover:text-white/75 font-bold ease-in-out duration-500 
                  ${
                    router.pathname === "/"
                      ? animateHeader
                        ? "text-gray-700 hover:text-gray-700/75 "
                        : "md:text-white md:hover:text-white/75 "
                      : "text-gray-700 hover:text-gray-700/75 "
                  }`}
                  href="/"
                  onClick={() => toggleMenuVisibility(false)}
                >
                  Strona główna
                </Link>
              </li>
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    className={`font-bold ease-in-out duration-50 dark: dark:text-gray-900 dark:hover:text-white/75
                     ${
                       router.pathname === "/"
                         ? animateHeader
                           ? "text-gray-700 hover:text-gray-700/75 "
                           : "md:text-white md:hover:text-white/75 "
                         : "text-gray-700 hover:text-gray-700/75 "
                     }`}
                    href={item.url}
                    onClick={() => toggleMenuVisibility(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleNightMode}
                  sunColor={sunColor}
                />
              </li>
            </ul>
          </nav>
          <button
            onClick={() => toggleMenuVisibility(!isMenuVisible)}
            className="block rounded bg-gray-50 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden z-10"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
