// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import schoolLogo from "../assets/bernard-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // ==========================================
  // TOGGLE MOBILE MENU
  // ==========================================
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // ==========================================
  // STICKY NAVBAR
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU OPENS
  // ==========================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ==========================================
  // SMOOTH SCROLL
  // ==========================================
  const handleScrollAdjust = (e, path) => {
    e.preventDefault();

    const target = document.getElementById(path);

    if (target) {
      const offset = 100;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  // ==========================================
  // NAVIGATION ITEMS
  // ==========================================
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Academics",
      path: "academics",
    },
    {
      link: "Admissions",
      path: "admissions",
    },
    {
      link: "Results",
      path: "results",
    },
    {
      link: "Gallery",
      path: "gallery",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className={`
            w-full
            transition-all
            duration-300
            ${
              isSticky
                ? "bg-white shadow-lg py-2"
                : "bg-white py-3"
            }
          `}
        >
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="flex justify-between items-center">
              {/* ======================================
                  LOGO + SCHOOL NAME
              ====================================== */}

              <a
                href="#home"
                onClick={(e) =>
                  handleScrollAdjust(e, "home")
                }
                className="flex items-center gap-3 flex-shrink-0"
              >
                <img
                  src={schoolLogo}
                  alt="Bernard International Montessori School Logo"
                  className={`
                    object-contain
                    transition-all
                    duration-300
                    ${
                      isSticky
                        ? "h-12 md:h-14"
                        : "h-14 md:h-16"
                    }
                  `}
                />

                <div className="leading-tight">
                  <h1 className="text-[12px] sm:text-sm lg:text-base font-extrabold text-[#164f91] uppercase tracking-wide">
                    Bernard International
                  </h1>

                  <h2 className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#38a9df] uppercase tracking-wide">
                    Montessori School, Jos
                  </h2>

                  <p className="hidden sm:block text-[9px] lg:text-[11px] text-gray-500 italic mt-1">
                    Equipping Tomorrow&apos;s Leaders Today
                  </p>
                </div>
              </a>

              {/* ======================================
                  DESKTOP NAVIGATION
              ====================================== */}

              <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-5 lg:gap-7 xl:gap-8">
                  {navItems.map(({ link, path }) => (
                    <li key={link}>
                      <a
                        href={`#${path}`}
                        onClick={(e) =>
                          handleScrollAdjust(e, path)
                        }
                        className="
                          relative
                          text-[13px]
                          lg:text-sm
                          uppercase
                          text-gray-700
                          hover:text-[#168bc4]
                          cursor-pointer
                          font-semibold
                          transition-colors
                          duration-300
                          group
                        "
                      >
                        {link}

                        {/* Animated underline */}

                        <span
                          className="
                            absolute
                            left-0
                            -bottom-2
                            w-0
                            h-[2px]
                            bg-[#38a9df]
                            transition-all
                            duration-300
                            group-hover:w-full
                          "
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ======================================
                  MOBILE MENU BUTTON
              ====================================== */}

              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    border
                    border-[#38a9df]
                    rounded-full
                    hover:bg-[#38a9df]
                    group
                    transition
                    duration-300
                  "
                  aria-label="Open navigation menu"
                >
                  {isMenuOpen ? (
                    <FaXmark
                      className="
                        h-5
                        w-5
                        text-[#164f91]
                        group-hover:text-white
                      "
                    />
                  ) : (
                    <FaBarsStaggered
                      className="
                        h-5
                        w-5
                        text-[#164f91]
                        group-hover:text-white
                      "
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ==========================================
              MOBILE FULLSCREEN MENU
          ========================================== */}

          <div
            className={`
              md:hidden
              fixed
              top-0
              left-0
              w-full
              h-screen
              bg-[#123f72]
              z-[100]
              transition-transform
              duration-500
              ease-in-out
              ${
                isMenuOpen
                  ? "translate-y-0"
                  : "-translate-y-full"
              }
            `}
          >
            {/* ======================================
                MOBILE MENU HEADER
            ====================================== */}

            <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
              <a
                href="#home"
                onClick={(e) =>
                  handleScrollAdjust(e, "home")
                }
                className="flex items-center gap-3"
              >
                <div className="bg-white rounded-full p-1">
                  <img
                    src={schoolLogo}
                    alt="Bernard International Montessori School Logo"
                    className="h-11 w-11 object-contain"
                  />
                </div>

                <div className="leading-tight">
                  <h2 className="text-white text-xs font-bold uppercase">
                    Bernard International
                  </h2>

                  <p className="text-[#8ed8f8] text-[10px] uppercase">
                    Montessori School, Jos
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={toggleMenu}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  text-white
                  border
                  border-white/50
                  rounded-full
                  hover:bg-white
                  hover:text-[#164f91]
                  transition
                "
                aria-label="Close navigation menu"
              >
                <FaXmark className="h-6 w-6" />
              </button>
            </div>

            {/* ======================================
                MOBILE LINKS
            ====================================== */}

            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
              <ul className="flex flex-col items-center space-y-7">
                {navItems.map(({ link, path }) => (
                  <li key={link}>
                    <a
                      href={`#${path}`}
                      onClick={(e) =>
                        handleScrollAdjust(e, path)
                      }
                      className="
                        text-lg
                        uppercase
                        text-white
                        hover:text-[#8ed8f8]
                        cursor-pointer
                        font-semibold
                        tracking-wide
                        transition
                        duration-300
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ======================================
                  MOTTO
              ====================================== */}

              <div className="absolute bottom-10 text-center px-4">
                <p className="text-[#8ed8f8] text-sm italic">
                  “Equipping Tomorrow&apos;s Leaders Today”
                </p>

                <p className="text-white/60 text-xs mt-2">
                  Bernard International Montessori School, Jos
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;