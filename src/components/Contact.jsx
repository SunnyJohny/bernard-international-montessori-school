// src/components/Contact.jsx

import React from "react";
import {
  BsGeoAltFill,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsArrowRight,
} from "react-icons/bs";

const Contact = () => {
  // ======================================================
  // SCHOOL CONTACT DETAILS
  // Add the official phone and email once confirmed.
  // ======================================================

  const schoolName =
    "Bernard International Montessori School";

  const address =
    "SA 8 Idika Street, Apata Jenta, Jos, Plateau State.";

  // Replace these when Bernard provides the official details
  const phone = "";
  const email = "";

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-[#f0f9fd] to-white py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#279dd3]">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#155b9a] leading-tight">
            Bernard International
            <span className="block">
              Montessori School
            </span>
          </h2>

          <div className="mt-5 w-24 h-1 bg-[#53bce8] mx-auto rounded-full" />

          <p className="mt-5 text-slate-600 text-sm md:text-base leading-relaxed">
            We are here to help with admissions,
            academic enquiries, school activities, and
            general information.
          </p>
        </div>

        {/* =================================================
            CONTACT CARD
        ================================================= */}

        <div className="bg-white border border-[#d7eef8] shadow-xl rounded-3xl overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* =============================================
                LEFT SIDE
            ============================================= */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#123f72] via-[#155b9a] to-[#197bb8] text-white p-8 md:p-10 lg:p-12">

              {/* DECORATIVE ELEMENTS */}

              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full" />

              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />

              <div className="relative z-10">

                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#9bdcf5] font-semibold">
                  Our Details
                </p>

                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold leading-snug">
                  BERNARD INTERNATIONAL
                  <span className="block">
                    MONTESSORI SCHOOL
                  </span>
                </h3>

                <p className="mt-3 text-sm text-white/70 italic">
                  Equipping Tomorrow&apos;s Leaders Today
                </p>

                {/* =========================================
                    CONTACT INFORMATION
                ========================================= */}

                <div className="mt-9 space-y-7">

                  {/* ADDRESS */}

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <BsGeoAltFill className="text-[#9bdcf5] text-lg" />
                    </div>

                    <div>
                      <p className="text-[#9bdcf5] text-xs uppercase tracking-[0.2em] font-semibold">
                        Address
                      </p>

                      <p className="mt-2 text-sm md:text-base leading-relaxed text-white/90">
                        {address}
                      </p>
                    </div>
                  </div>

                  {/* TELEPHONE */}

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <BsTelephoneFill className="text-[#9bdcf5] text-lg" />
                    </div>

                    <div>
                      <p className="text-[#9bdcf5] text-xs uppercase tracking-[0.2em] font-semibold">
                        Telephone
                      </p>

                      {phone ? (
                        <a
                          href={`tel:${phone}`}
                          className="mt-2 block text-sm md:text-base text-white/90 hover:text-[#9bdcf5] transition"
                        >
                          {phone}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-white/60">
                          Official number will be added
                          shortly.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <BsEnvelopeFill className="text-[#9bdcf5] text-lg" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[#9bdcf5] text-xs uppercase tracking-[0.2em] font-semibold">
                        Email
                      </p>

                      {email ? (
                        <a
                          href={`mailto:${email}`}
                          className="mt-2 block text-sm md:text-base text-white/90 break-all hover:text-[#9bdcf5] transition"
                        >
                          {email}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-white/60">
                          Official email will be added
                          shortly.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =============================================
                RIGHT SIDE
            ============================================= */}

            <div className="p-8 md:p-10 lg:p-12 flex items-center bg-white">

              <div className="w-full">

                {/* SMALL LABEL */}

                <div className="inline-flex items-center gap-2 bg-[#eaf7fd] text-[#155b9a] border border-[#ccecf9] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]">
                  Reach Out Anytime
                </div>

                {/* TITLE */}

                <h3 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#155b9a] leading-snug">
                  We would love to hear from you
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  For enquiries about admission,
                  academics, school activities, or any
                  other information, please get in touch
                  with {schoolName}.
                </p>

                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  You can also visit the school at our
                  location in Apata Jenta, Jos, and our
                  team will be happy to assist you.
                </p>

                {/* =========================================
                    LOCATION BOX
                ========================================= */}

                <div className="mt-7 rounded-2xl bg-slate-50 border border-slate-100 p-5">

                  <div className="flex items-start gap-3">

                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#155b9a] text-white flex items-center justify-center">
                      <BsGeoAltFill />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#279dd3] font-bold">
                        Visit Our School
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#155b9a] leading-relaxed">
                        SA 8 Idika Street,
                        <br />
                        Apata Jenta, Jos,
                        <br />
                        Plateau State.
                      </p>
                    </div>
                  </div>
                </div>

                {/* =========================================
                    CONTACT BUTTONS
                ========================================= */}

                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  {phone ? (
                    <a
                      href={`tel:${phone}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#155b9a] text-white font-semibold hover:bg-[#123f72] transition shadow-md"
                    >
                      Call School

                      <BsArrowRight />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-200 text-slate-500 font-semibold cursor-not-allowed"
                    >
                      Call School
                    </button>
                  )}

                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#155b9a] text-[#155b9a] font-semibold hover:bg-[#155b9a] hover:text-white transition"
                    >
                      Send Email

                      <BsArrowRight />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-slate-200 text-slate-400 font-semibold cursor-not-allowed"
                    >
                      Send Email
                    </button>
                  )}
                </div>

                {/* MOTTO */}

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
                    Our Motto
                  </p>

                  <p className="mt-2 text-[#279dd3] font-semibold italic">
                    “Equipping Tomorrow&apos;s Leaders
                    Today”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Bernard International Montessori School •
            Jos, Plateau State
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;