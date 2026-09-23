// src/components/Footer.jsx

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "home" },
  { label: "News", to: "news" },
  { label: "Gallery", to: "gallery" },
  { label: "Academics", to: "academics" },
  { label: "About Us", to: "about" },
  { label: "FAQs", to: "faqs" },
  { label: "Contact", to: "contact" },
];

const Footer = () => {
  // =====================================================
  // SCHOOL CONTACT DETAILS
  // =====================================================

  const phone = "09028678282";

  const email = "";

  const facebookUrl =
    "https://www.facebook.com/BISMjos/";

  // =====================================================
  // WHATSAPP NUMBER
  // Nigerian international format:
  // 09028678282 -> 2349028678282
  // =====================================================

  const whatsappNumber =
    "2349028678282";

  const whatsappMessage =
    "Hello Bernard International Montessori School";

  return (
    <footer className="bg-blue-950 text-white">
      {/* =================================================
          TOP BRAND ACCENT
      ================================================= */}

      <div className="border-t-4 border-sky-400" />

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ===============================================
              SCHOOL BRAND
          =============================================== */}

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300 font-semibold">
              Bernard International
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-snug text-white">
              Montessori School
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/80">
              Equipping Tomorrow&apos;s Leaders Today.
            </p>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Providing a nurturing learning environment where children can
              learn, grow, explore, and develop the confidence to succeed.
            </p>
          </div>

          {/* ===============================================
              QUICK LINKS
          =============================================== */}

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-300">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <ScrollLink
                  key={item.label}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="cursor-pointer text-sm text-white/80 hover:text-sky-300 transition"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* ===============================================
              CONTACT
          =============================================== */}

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-300">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/80 leading-7">
              {/* ADDRESS */}

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-sky-300 shrink-0 mt-1.5" />

                <p>
                  SA 8 Idika Street,
                  <br />
                  Apata Jenta,
                  <br />
                  Jos, Plateau State,
                  <br />
                  Nigeria.
                </p>
              </div>

              {/* PHONE */}

              {phone ? (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 hover:text-sky-300 transition"
                >
                  <FaPhoneAlt className="text-sky-300 shrink-0" />

                  <span>{phone}</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/50">
                  <FaPhoneAlt className="text-sky-300 shrink-0" />

                  <span>
                    Official phone number coming soon
                  </span>
                </div>
              )}

              {/* EMAIL */}

              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 break-all hover:text-sky-300 transition"
                >
                  <FaEnvelope className="text-sky-300 shrink-0" />

                  <span>{email}</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/50">
                  <FaEnvelope className="text-sky-300 shrink-0" />

                  <span>
                    Official email coming soon
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ===============================================
              CONNECT WITH US
          =============================================== */}

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-300">
              Connect With Us
            </h4>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Stay connected with Bernard International Montessori School for
              school news, announcements, admissions, and upcoming events.
            </p>

            <div className="mt-5 flex items-center gap-4">
              {/* FACEBOOK */}

              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                  className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-sky-400 hover:text-blue-950 transition"
                >
                  <FaFacebookF className="text-lg" />
                </a>
              ) : (
                <div
                  aria-label="Facebook coming soon"
                  title="Facebook coming soon"
                  className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 cursor-not-allowed"
                >
                  <FaFacebookF className="text-lg" />
                </div>
              )}

              {/* WHATSAPP */}

              {whatsappNumber ? (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Chat with us on WhatsApp"
                  className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-sky-400 hover:text-blue-950 transition"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              ) : (
                <div
                  aria-label="WhatsApp coming soon"
                  title="WhatsApp coming soon"
                  className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 cursor-not-allowed"
                >
                  <FaWhatsapp className="text-xl" />
                </div>
              )}

              {/* EMAIL */}

              {email ? (
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  title="Send us an email"
                  className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-sky-400 hover:text-blue-950 transition"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              ) : (
                <div
                  aria-label="Email coming soon"
                  title="Email coming soon"
                  className="h-11 w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 cursor-not-allowed"
                >
                  <FaEnvelope className="text-lg" />
                </div>
              )}
            </div>

            {/* =============================================
                WHATSAPP BUTTON
            ============================================= */}

            <div className="mt-6">
              {whatsappNumber ? (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sky-400 text-blue-950 font-semibold hover:bg-sky-300 transition shadow-md"
                >
                  <FaWhatsapp />

                  <span>
                    Chat on WhatsApp
                  </span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white/50 font-semibold cursor-not-allowed"
                >
                  <FaWhatsapp />

                  <span>
                    WhatsApp Coming Soon
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            COPYRIGHT
        ================================================= */}

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/70 text-center md:text-left">
            © {new Date().getFullYear()} Bernard International Montessori
            School. All rights reserved.
          </p>

          <p className="text-sm text-white/70 text-center md:text-right">
            Equipping Tomorrow&apos;s Leaders Today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;