// src/components/Hero.jsx

import React, { useEffect, useMemo, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAuth, signOut } from "firebase/auth";

import "swiper/css";
import "swiper/css/autoplay";

import schoolLogo from "../assets/bernard-logo.png";

import AuthModal from "./AuthModal";
import { useMyContext } from "../Context/MyContext";

// ======================================================
// NAVIGATION
// ======================================================

const navLinks = [
  { label: "Home", to: "home" },
  { label: "News", to: "news" },
  { label: "Gallery", to: "gallery" },
  { label: "Academics", to: "academics" },

  // ====================================================
  // STUDENT RESULTS
  // ====================================================
  { label: "Results", to: "results" },

  { label: "About Us", to: "about" },
  { label: "FAQs", to: "faqs" },
  { label: "Contact", to: "contact" },
];

// ======================================================
// FALLBACK HERO IMAGES
// These will only display when no gallery images exist.
// Put the images inside public/images/
// ======================================================

const fallbackSlides = [
  {
    image: "/images/bernard-school-1.jpg",
    title: "Bernard International Montessori School",
    subtitle: "Equipping Tomorrow's Leaders Today",
  },
  {
    image: "/images/bernard-school-2.jpg",
    title: "Bernard International Montessori School",
    subtitle: "Learning, Growing and Achieving Together",
  },
  {
    image: "/images/bernard-school-3.jpg",
    title: "Bernard International Montessori School",
    subtitle: "Building a Strong Foundation for the Future",
  },
];

// ======================================================
// WHATSAPP
// IMPORTANT:
// Replace this number when we have Bernard School's
// official WhatsApp number.
// ======================================================

const WHATSAPP_NUMBER = "2340000000000";

const WHATSAPP_MESSAGE =
  "Hello Bernard International Montessori School, Jos. I would like to make an enquiry about admission.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// ======================================================
// HERO COMPONENT
// ======================================================

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [authOpen, setAuthOpen] = useState(false);
  const [mode, setMode] = useState("signin");

  const [loggingOut, setLoggingOut] = useState(false);

  // ====================================================
  // CONTEXT
  // ====================================================

  const {
    gallery,
    news,
    newsLoading,
    newsError,
    currentUser,
  } = useMyContext();

  // ====================================================
  // MOBILE MENU
  // ====================================================

  const closeMobile = () => {
    setMobileOpen(false);
  };

  // ====================================================
  // AUTH MODAL
  // ====================================================

  const openAuth = (which = "signin") => {
    setMode(which);
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
  };

  // ====================================================
  // STICKY NAVIGATION
  // ====================================================

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ====================================================
  // CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  // ====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ====================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // ====================================================

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ====================================================
  // DISABLE HERO INTERACTION WHEN AUTH MODAL IS OPEN
  // ====================================================

  const swiperPointerEvents = authOpen ? "none" : "auto";

  // ====================================================
  // HERO SLIDES
  // Uses gallery images from context when available.
  // Otherwise fallback images are displayed.
  // ====================================================

  const heroSlides = useMemo(() => {
    const items = Array.isArray(gallery) ? gallery : [];

    const clean = items
      .filter((item) => !!item?.src)
      .slice(0, 12)
      .map((item) => ({
        image: item.src,
        title:
          item.alt ||
          "Bernard International Montessori School",
        subtitle:
          item.category ||
          "Equipping Tomorrow's Leaders Today",
      }));

    if (clean.length > 0) {
      return clean;
    }

    return fallbackSlides;
  }, [gallery]);

  // ====================================================
  // NEWS
  // ====================================================

  const newsPairs = useMemo(() => {
    const items = Array.isArray(news) ? news : [];

    return items
      .map((item) => {
        const title = (item?.title || "").trim();
        const highlight = (item?.highlight || "").trim();

        if (!title && !highlight) {
          return null;
        }

        return {
          title,
          highlight,
        };
      })
      .filter(Boolean)
      .slice(0, 10);
  }, [news]);

  // ====================================================
  // NEWS TICKER
  // ====================================================

  const tickerText = useMemo(() => {
    if (newsPairs.length === 0) {
      return "";
    }

    const singleRun = newsPairs
      .map((item) => {
        if (item.title && item.highlight) {
          return `${item.title} — ${item.highlight}`;
        }

        if (item.title) {
          return item.title;
        }

        return item.highlight;
      })
      .join("   •   ");

    // Duplicate content so ticker transition looks continuous
    return `${singleRun}   •   ${singleRun}`;
  }, [newsPairs]);

  // ====================================================
  // SWIPER AUTOPLAY
  // ====================================================

  const autoplayConfig = authOpen
    ? false
    : {
        delay: 4500,
        disableOnInteraction: false,
      };

  // ====================================================
  // CURRENT USER NAME
  // ====================================================

  const loggedInName = useMemo(() => {
    if (!currentUser) {
      return "";
    }

    return (
      currentUser.displayName ||
      currentUser.email ||
      currentUser.phoneNumber ||
      "User"
    );
  }, [currentUser]);

  // ====================================================
  // LOGOUT
  // ====================================================

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      closeMobile();
      closeAuth();

      const auth = getAuth();

      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);

      alert("Logout failed. Please try again.");
    } finally {
      setLoggingOut(false);
    }
  };

  // ====================================================
  // JSX
  // ====================================================

  return (
    <header
      id="home"
      className="relative bg-white"
    >
      {/* =================================================
          NEWS TICKER ANIMATION
      ================================================= */}

      <style>
        {`
          @keyframes heroMarquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      {/* =================================================
          STICKY NAVBAR PLACEHOLDER
      ================================================= */}

      <div
        className={
          isSticky
            ? "h-[118px] md:h-[110px]"
            : "h-0"
        }
      />

      {/* =================================================
          HEADER / NAVIGATION
      ================================================= */}

      <div
        className={[
          "w-full z-50 transition-all duration-300",
          isSticky
            ? "fixed top-0 left-0 right-0"
            : "relative",
        ].join(" ")}
      >
        {/* ===============================================
            TOP INFORMATION BAR
        =============================================== */}

        <div className="w-full bg-[#155b9a] text-white text-xs md:text-sm shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 py-2 px-4 sm:px-6 lg:px-8">
            {/* CONTACT INFORMATION */}

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1">
              <span className="font-semibold tracking-wide uppercase text-[#bce5f8]">
                Questions?
              </span>

              {/* Replace when official phone is available */}

              <span>
                Contact Bernard International Montessori School
              </span>

              <span className="hidden lg:inline text-white/40">
                |
              </span>

              <span>
                SA 8 Idika Street, Apata Jenta, Jos
              </span>
            </div>

            {/* AUTH STATUS */}

            <div className="flex flex-wrap items-center justify-center gap-2">
              {currentUser ? (
                <>
                  <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold">
                    <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />

                    Logged in
                  </span>

                  <span className="bg-white/10 px-3 py-1 rounded-full text-[11px] md:text-xs font-medium max-w-[220px] truncate">
                    {loggedInName}
                  </span>

                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="bg-red-500 text-white text-xs font-semibold tracking-wide px-4 py-1 rounded-sm uppercase hover:bg-red-600 transition disabled:opacity-70"
                    type="button"
                  >
                    {loggingOut
                      ? "Logging out..."
                      : "Logout"}
                  </button>
                </>
              ) : (
                <>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[11px] md:text-xs font-medium">
                    Welcome
                  </span>

                  <button
                    onClick={() => openAuth("signin")}
                    className="bg-[#9bdcf5] text-[#123f72] text-xs font-bold tracking-wide px-4 py-1 rounded-sm uppercase hover:bg-white transition"
                    type="button"
                  >
                    Apply / Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ===============================================
            MAIN NAVIGATION
        =============================================== */}

        <div className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
            {/* LOGO / SCHOOL NAME */}

            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="flex items-center gap-3 min-w-0 cursor-pointer"
            >
              <img
                src={schoolLogo}
                alt="Bernard International Montessori School Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain flex-shrink-0"
              />

              <div className="leading-tight min-w-0">
                <p className="text-[9px] sm:text-[10px] md:text-xs text-[#279dd3] tracking-[0.18em] md:tracking-[0.25em] uppercase font-semibold">
                  Bernard International
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-wide text-[#155b9a] truncate">
                  Montessori School
                </p>

                <p className="hidden sm:block text-[9px] md:text-[10px] text-gray-500 italic mt-0.5">
                  Equipping Tomorrow&apos;s Leaders Today
                </p>
              </div>
            </ScrollLink>

            {/* DESKTOP NAVIGATION */}

            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-semibold text-[#155b9a]">
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.label}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  activeClass="text-[#279dd3]"
                  className="cursor-pointer hover:text-[#279dd3] transition-colors duration-300"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </nav>

            {/* DESKTOP AUTH */}

            <div className="hidden xl:flex items-center gap-3">
              {currentUser ? (
                <>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-3 py-2 rounded-full">
                    Signed in
                  </span>

                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="text-sm font-semibold text-red-600 hover:text-red-700 transition disabled:opacity-70"
                    type="button"
                  >
                    {loggingOut
                      ? "Logging out..."
                      : "Logout"}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => openAuth("signin")}
                  className="text-sm font-semibold text-[#155b9a] hover:text-[#279dd3] transition"
                  type="button"
                >
                  Sign in
                </button>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[#279dd3] text-[#155b9a] text-2xl"
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              type="button"
            >
              {mobileOpen ? <BsX /> : <BsList />}
            </button>
          </div>

          {/* =============================================
              MOBILE NAVIGATION
          ============================================= */}

          {mobileOpen && (
            <div className="md:hidden fixed inset-0 top-0 w-full h-screen bg-[#123f72] z-[100] overflow-y-auto">
              {/* MOBILE HEADER */}

              <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
                <ScrollLink
                  to="home"
                  smooth={true}
                  offset={-120}
                  duration={500}
                  onClick={closeMobile}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="bg-white rounded-full p-1">
                    <img
                      src={schoolLogo}
                      alt="Bernard International Montessori School Logo"
                      className="h-11 w-11 object-contain"
                    />
                  </div>

                  <div className="leading-tight">
                    <p className="text-[#9bdcf5] text-[10px] uppercase tracking-wider">
                      Bernard International
                    </p>

                    <p className="text-white text-sm font-bold">
                      Montessori School
                    </p>
                  </div>
                </ScrollLink>

                <button
                  onClick={closeMobile}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-white/40 text-white text-2xl"
                  aria-label="Close navigation"
                  type="button"
                >
                  <BsX />
                </button>
              </div>

              {/* MOBILE LINKS */}

              <nav className="flex flex-col px-6 pt-8 text-base font-semibold text-white">
                {navLinks.map((item) => (
                  <ScrollLink
                    key={item.label}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    onClick={closeMobile}
                    className="py-4 border-b border-white/10 cursor-pointer hover:text-[#9bdcf5] transition"
                  >
                    {item.label}
                  </ScrollLink>
                ))}

                {/* USER STATUS */}

                <div className="mt-6 mb-3">
                  {currentUser ? (
                    <div className="flex items-center gap-2 text-xs text-white bg-white/10 border border-white/20 rounded-lg px-3 py-3">
                      <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />

                      <span className="font-semibold">
                        Logged in:
                      </span>

                      <span className="truncate">
                        {loggedInName}
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs text-[#bce5f8] bg-white/10 border border-white/20 rounded-lg px-3 py-3">
                      Parent / Student Portal
                    </div>
                  )}
                </div>

                {/* AUTH BUTTON */}

                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="mt-2 w-full bg-red-500 text-white py-3 rounded-md text-xs font-semibold uppercase hover:bg-red-600 transition disabled:opacity-70"
                    type="button"
                  >
                    {loggingOut
                      ? "Logging out..."
                      : "Logout"}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      openAuth("signin");
                      closeMobile();
                    }}
                    className="mt-2 w-full bg-[#9bdcf5] text-[#123f72] py-3 rounded-md text-xs font-bold uppercase hover:bg-white transition"
                    type="button"
                  >
                    Apply / Login
                  </button>
                )}

                {/* MOTTO */}

                <p className="text-center text-[#9bdcf5] italic text-xs mt-10">
                  “Equipping Tomorrow&apos;s Leaders Today”
                </p>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* =================================================
          HERO SLIDER
      ================================================= */}

      <section className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          autoplay={autoplayConfig}
          allowTouchMove={!authOpen}
          style={{
            pointerEvents: swiperPointerEvents,
          }}
          speed={1200}
          loop={true}
          className="h-[85vh] min-h-[540px] max-h-[900px]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide
              key={`${slide.image}-${index}`}
              className="relative"
            >
              <img
                src={slide.image}
                alt={
                  slide.title ||
                  "Bernard International Montessori School"
                }
                className="w-full h-full object-cover"
              />

              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-black/50" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="absolute inset-0 z-10 flex items-start justify-center px-4 pt-10 md:pt-8 lg:pt-10 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center pointer-events-auto">
            {/* CREST */}

            <div className="inline-flex flex-col items-center">
              <div className="bg-white/95 rounded-full p-3 md:p-4 shadow-2xl border-4 border-white/30">
                <img
                  src={schoolLogo}
                  alt="Bernard International Montessori School Crest"
                  className="h-20 w-20 md:h-24 md:w-24 object-contain"
                />
              </div>

              {/* SCHOOL NAME */}

              <p className="mt-4 text-[#9bdcf5] text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] drop-shadow-lg">
                Welcome to
              </p>

              <h1 className="mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] drop-shadow-2xl">
                Bernard International
                <span className="block">
                  Montessori School
                </span>
              </h1>

              {/* MOTTO */}

              <p className="mt-4 text-[#bce5f8] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold italic tracking-wide drop-shadow-lg">
                Equipping Tomorrow&apos;s Leaders Today
              </p>

              <p className="mt-3 text-white/90 text-sm md:text-base font-medium">
                Jos, Plateau State
              </p>
            </div>

            {/* CTA */}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className="min-w-[150px] px-7 py-3 bg-[#9bdcf5] text-[#123f72] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl"
                  type="button"
                >
                  Apply Now
                </button>
              </a>

              <ScrollLink
                to="about"
                smooth={true}
                offset={-120}
                duration={500}
                className="min-w-[150px] px-7 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#155b9a] transition-all duration-300 shadow-xl cursor-pointer"
              >
                Discover More
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* =================================================
            NEWS TICKER
        ================================================= */}

        <div className="absolute left-0 right-0 bottom-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-xl border border-white/60 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                {/* LATEST LABEL */}

                <span className="flex-shrink-0 text-[10px] sm:text-[11px] font-extrabold tracking-[0.20em] uppercase text-[#155b9a]">
                  Latest
                </span>

                <span className="h-4 w-[1px] bg-gray-300 flex-shrink-0" />

                {/* LOADING */}

                {newsLoading && (
                  <span className="text-[11px] font-semibold text-slate-500">
                    Loading news…
                  </span>
                )}

                {/* ERROR */}

                {newsError && !newsLoading && (
                  <span className="text-[11px] font-semibold text-red-600">
                    News load failed
                  </span>
                )}

                {/* TICKER */}

                {!newsLoading &&
                  !newsError &&
                  tickerText && (
                    <div className="relative flex-1 overflow-hidden">
                      <div
                        className="whitespace-nowrap text-xs sm:text-sm text-slate-700 font-semibold"
                        style={{
                          display: "inline-block",
                          paddingLeft: "100%",
                          animation:
                            "heroMarquee 38s linear infinite",
                        }}
                        title="News highlights"
                      >
                        {tickerText}
                      </div>
                    </div>
                  )}

                {/* NO NEWS */}

                {!newsLoading &&
                  !newsError &&
                  !tickerText && (
                    <span className="text-[11px] font-semibold text-slate-500">
                      Welcome to Bernard International
                      Montessori School, Jos.
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          AUTHENTICATION MODAL
      ================================================= */}

      <AuthModal
        open={authOpen}
        mode={mode}
        setMode={setMode}
        onClose={closeAuth}
        onOpenChange={() => {}}
      />
    </header>
  );
};

export default Hero;