// src/components/AboutUs.jsx

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsShieldCheck,
  BsGlobe2,
  BsHeartPulse,
  BsStars,
  BsCheck2Circle,
  BsMusicNoteBeamed,
  BsTrophy,
  BsSun,
  BsController,
  BsBrush,
  BsPalette,
  BsBook,
  BsPeople,
  BsMortarboard,
} from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

import schoolLogo from "../assets/bernard-logo.png";

// ======================================================
// ANIMATIONS
// ======================================================

const container = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVar = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

// ======================================================
// CORE VALUES
// ======================================================

const values = [
  {
    letter: "E",
    word: "Excellence",
  },
  {
    letter: "D",
    word: "Discipline",
  },
  {
    letter: "I",
    word: "Integrity",
  },
  {
    letter: "R",
    word: "Respect",
  },
  {
    letter: "C",
    word: "Creativity",
  },
  {
    letter: "L",
    word: "Leadership",
  },
];

// ======================================================
// TEACHING / CO-CURRICULAR ACTIVITIES
// ======================================================

const paradigms = [
  {
    label: "Music",
    icon: <BsMusicNoteBeamed />,
  },
  {
    label: "Sports",
    icon: <BsTrophy />,
  },
  {
    label: "Outdoor Games",
    icon: <BsSun />,
  },
  {
    label: "Indoor Games",
    icon: <BsController />,
  },
  {
    label: "Art & Craft",
    icon: <BsBrush />,
  },
  {
    label: "Painting",
    icon: <BsPalette />,
  },
];

// ======================================================
// ABOUT COMPONENT
// ======================================================

const AboutUs = ({
  schoolName = "Bernard International Montessori School",
  tagline = "Equipping Tomorrow's Leaders Today",
}) => {
  const breadcrumbs = useMemo(
    () => ["Home", "About Us"],
    []
  );

  return (
    <section
      id="about"
      className="bg-white py-16 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#279dd3] mb-2">
            About Us
          </p>

          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            {breadcrumbs.map((breadcrumb, index) => (
              <span
                key={breadcrumb}
                className="inline-flex items-center gap-2"
              >
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "text-[#155b9a] font-semibold"
                      : ""
                  }
                >
                  {breadcrumb}
                </span>

                {index !== breadcrumbs.length - 1 && (
                  <span className="text-slate-300">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#155b9a] leading-tight">
            Building Tomorrow&apos;s Leaders Today
          </h2>

          <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-600 leading-relaxed">
            At Bernard International Montessori School,
            we believe that every child deserves a strong
            foundation for learning, character development,
            creativity, and lifelong success.
          </p>
        </motion.div>

        {/* =================================================
            MAIN ABOUT INTRODUCTION
        ================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-6 lg:grid-cols-5 items-stretch mb-10"
        >

          {/* ===============================================
              LEFT - SCHOOL IDENTITY
          =============================================== */}

          <motion.div
            variants={itemVar}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#155b9a] via-[#197bb8] to-[#53bce8] shadow-lg"
          >
            <div className="relative h-full min-h-[440px] p-8 md:p-10 flex flex-col items-center justify-center text-center">

              {/* DECORATIVE CIRCLES */}

              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-white/10" />

              {/* LOGO */}

              <div className="relative z-10 bg-white rounded-full p-4 shadow-2xl">
                <img
                  src={schoolLogo}
                  alt="Bernard International Montessori School Logo"
                  className="w-36 h-36 md:w-44 md:h-44 object-contain"
                />
              </div>

              {/* SCHOOL NAME */}

              <h3 className="relative z-10 mt-6 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Bernard International
                <span className="block">
                  Montessori School
                </span>
              </h3>

              <p className="relative z-10 mt-3 text-[#d9f2fc] text-base md:text-lg font-semibold">
                Jos, Plateau State
              </p>

              {/* MOTTO */}

              <div className="relative z-10 mt-6 border-t border-white/20 pt-5 w-full">
                <p className="text-white/70 text-xs uppercase tracking-[0.3em]">
                  Our Motto
                </p>

                <p className="mt-2 text-white text-lg md:text-xl italic font-semibold">
                  “{tagline}”
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT - WHO WE ARE
          =============================================== */}

          <motion.div
            variants={itemVar}
            className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-9"
          >
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-[#eaf7fd] text-[#155b9a] flex items-center justify-center border border-[#ccecf9]">
                <BsStars className="text-xl" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#279dd3] font-bold">
                  Discover Bernard
                </p>

                <h3 className="text-xl md:text-2xl font-extrabold text-[#155b9a]">
                  Who We Are
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
              {schoolName} is a learning community
              committed to providing children with a
              strong educational foundation in an
              environment where they can learn, explore,
              grow, and develop confidence.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Our approach recognizes that the early
              years of a child&apos;s education play an
              important role in shaping future learning.
              We therefore seek to provide meaningful
              learning experiences that encourage
              curiosity, independence, creativity,
              discipline, and positive social development.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Through classroom learning, Montessori
              activities, play, creativity, and
              interaction, pupils are encouraged to
              discover their abilities and gradually
              develop the knowledge and confidence needed
              for the next stages of their education.
            </p>

            {/* FEATURE TAGS */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-[#eaf7fd] text-[#155b9a] border border-[#ccecf9]">
                Montessori Learning
              </span>

              <span className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                Academic Development
              </span>

              <span className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                Child-Centred Education
              </span>

              <span className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-red-50 text-red-700 border border-red-100">
                Leadership
              </span>
            </div>

            {/* QUICK FEATURES */}

            <div className="mt-8 grid sm:grid-cols-3 gap-3">

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                <BsBook className="text-2xl text-[#279dd3]" />

                <p className="mt-3 text-sm font-extrabold text-[#155b9a]">
                  Quality Learning
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Building strong foundations for
                  continued education.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                <BsPeople className="text-2xl text-[#279dd3]" />

                <p className="mt-3 text-sm font-extrabold text-[#155b9a]">
                  Child Focused
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Supporting each learner&apos;s growth
                  and development.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
                <BsMortarboard className="text-2xl text-[#279dd3]" />

                <p className="mt-3 text-sm font-extrabold text-[#155b9a]">
                  Future Ready
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Preparing children for tomorrow&apos;s
                  opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            LOGO + CORE VALUES / MISSION / VISION
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ===============================================
              LOGO / CORE VALUES
          =============================================== */}

          <motion.div
            variants={itemVar}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2">
              <img
                src={schoolLogo}
                alt="Bernard International Montessori School Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-[#155b9a]">
              {schoolName}
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#279dd3] italic">
              {tagline}
            </p>

            {/* CORE VALUES */}

            <div className="mt-6 w-full rounded-2xl bg-white border border-slate-200 p-4">

              <div className="flex items-center justify-center gap-2 text-[#155b9a] font-extrabold">
                <BsStars />

                <span>
                  Core Values
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {values.map((value) => (
                  <div
                    key={`${value.letter}-${value.word}`}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-[#155b9a] text-white flex items-center justify-center font-extrabold">
                      {value.letter}
                    </div>

                    <div className="text-left min-w-0">
                      <p className="text-xs sm:text-sm font-extrabold text-[#155b9a]">
                        {value.word}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT SIDE
          =============================================== */}

          <div className="lg:col-span-2 grid gap-6">

            {/* =============================================
                MISSION + VISION
            ============================================= */}

            <motion.div
              variants={itemVar}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-6 md:grid-cols-2"
            >

              {/* MISSION */}

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-[#eaf7fd] text-[#155b9a] flex items-center justify-center text-xl border border-[#ccecf9]">
                    <BsShieldCheck />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#155b9a]">
                      Our Mission
                    </h3>

                    <p className="text-sm text-slate-600 mt-1">
                      What we seek to achieve.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                  To provide a nurturing and stimulating
                  learning environment that supports the
                  academic, social, emotional, creative,
                  and character development of every
                  child while laying a strong foundation
                  for lifelong learning.
                </p>
              </div>

              {/* VISION */}

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#279dd3] flex items-center justify-center text-xl border border-blue-100">
                    <BsGlobe2 />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#155b9a]">
                      Our Vision
                    </h3>

                    <p className="text-sm text-slate-600 mt-1">
                      Where we are headed.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                  To nurture confident, responsible,
                  knowledgeable, and capable young
                  learners who are equipped with the
                  foundation needed to become
                  tomorrow&apos;s leaders.
                </p>
              </div>
            </motion.div>

            {/* =============================================
                WHY BERNARD?
            ============================================= */}

            <motion.div
              variants={itemVar}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8"
            >
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#eaf7fd] text-[#155b9a] flex items-center justify-center text-2xl border border-[#ccecf9]">
                  <BsHeartPulse />
                </div>

                <div className="min-w-0">

                  <h3 className="text-xl md:text-2xl font-extrabold text-[#155b9a]">
                    Why {schoolName}?
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                    We understand that children learn
                    best when they feel safe, supported,
                    encouraged, and actively involved in
                    the learning process.
                  </p>

                  <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                    Our learning environment is designed
                    to encourage participation,
                    exploration, creativity, independence,
                    cooperation, and confidence while
                    helping pupils develop strong
                    academic foundations.
                  </p>

                  {/* WHY US LIST */}

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">

                    {[
                      "Child-centred learning environment",
                      "Strong academic foundation",
                      "Montessori-inspired learning experiences",
                      "Creativity and practical learning",
                      "Social and character development",
                      "Confidence and leadership development",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-1 text-[#279dd3] flex-shrink-0">
                          <BsCheck2Circle />
                        </span>

                        <span className="leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* =============================================
                TEACHING PARADIGM
            ============================================= */}

            <motion.div
              variants={itemVar}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8"
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#279dd3]">
                Beyond The Classroom
              </p>

              <h3 className="mt-2 text-xl md:text-2xl font-extrabold text-[#155b9a]">
                Learning Through Experience
              </h3>

              <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
                Education extends beyond books and
                classrooms. Activities that encourage
                movement, creativity, teamwork, and
                self-expression contribute to the
                overall development of a child.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {paradigms.map((activity) => (
                  <div
                    key={activity.label}
                    className="group rounded-2xl bg-white border border-slate-200 p-4 flex items-center gap-3 hover:border-[#53bce8] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#155b9a] text-white flex items-center justify-center text-lg group-hover:bg-[#279dd3] transition">
                      {activity.icon}
                    </div>

                    <p className="text-sm font-extrabold text-[#155b9a]">
                      {activity.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* =============================================
                CALL TO ACTION
            ============================================= */}

            <motion.div
              variants={itemVar}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="rounded-3xl overflow-hidden border border-[#53bce8]/30 shadow-lg bg-gradient-to-r from-[#123f72] via-[#155b9a] to-[#279dd3]"
            >
              <div className="p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="max-w-2xl">

                  <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#bce5f8]">
                    Join Our School Community
                  </p>

                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight">
                    Give your child a strong foundation
                    for tomorrow.
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
                    Discover a learning environment
                    designed to encourage knowledge,
                    creativity, confidence, character,
                    and growth.
                  </p>
                </div>

                {/* CTA BUTTONS */}

                <div className="flex gap-3 flex-wrap flex-shrink-0">

                  <ScrollLink
                    to="academics"
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-white text-[#155b9a] font-extrabold hover:bg-[#eaf7fd] transition inline-flex items-center gap-2"
                    >
                      Explore Academics

                      <BsArrowRight />
                    </button>
                  </ScrollLink>

                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border-2 border-white text-white font-extrabold hover:bg-white hover:text-[#155b9a] transition"
                    >
                      Contact Us
                    </button>
                  </ScrollLink>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            SCHOOL ADDRESS
        ================================================= */}

        <motion.div
          variants={itemVar}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Bernard International Montessori School
          </p>

          <p className="mt-1 text-sm font-semibold text-[#155b9a]">
            SA 8 Idika Street, Apata Jenta, Jos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;