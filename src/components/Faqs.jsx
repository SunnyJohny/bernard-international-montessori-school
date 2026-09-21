// src/components/Faqs.jsx

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question:
      "Which curriculum does Bernard International Montessori School use?",
    answer:
      "Bernard International Montessori School provides a child-centred learning experience designed to build strong academic foundations, creativity, confidence, independence, and practical skills. Parents can contact the school for more information about the curriculum offered at each class level.",
  },
  {
    question:
      "Where is Bernard International Montessori School located?",
    answer:
      "Bernard International Montessori School is located at SA 8 Idika Street, Apata Jenta, Jos, Plateau State, Nigeria.",
  },
  {
    question:
      "What age is considered suitable for admission?",
    answer:
      "Admission is based on the appropriate age requirement for each class level. Parents can contact the school for guidance on the best placement for their child.",
  },
  {
    question:
      "Is transportation available for students?",
    answer:
      "Parents can contact the school administration for current information about transportation services, available routes, and any related costs.",
  },
  {
    question:
      "What is the school’s approach to student discipline?",
    answer:
      "Bernard International Montessori School promotes a respectful, supportive, and disciplined learning environment that encourages responsibility, good character, positive behaviour, and respect for others.",
  },
  {
    question:
      "Are your teachers professionally qualified?",
    answer:
      "The school is committed to providing learners with capable and supportive educators who help children develop academically, socially, creatively, and personally.",
  },
  {
    question:
      "What does the school fee structure look like?",
    answer:
      "School fees may vary depending on the class level and services required. Parents are encouraged to contact or visit the school for the current fee structure and payment information.",
  },
  {
    question:
      "How can parents begin the admission process?",
    answer:
      "Parents can begin the admission process by visiting Bernard International Montessori School at SA 8 Idika Street, Apata Jenta, Jos, to make enquiries and obtain the necessary admission information.",
  },
  {
    question:
      "Are extracurricular activities part of the learning experience?",
    answer:
      "Learners are encouraged to participate in educational and extracurricular activities that support creativity, confidence, teamwork, physical development, and all-round growth.",
  },
  {
    question:
      "How does the school keep children safe?",
    answer:
      "The school is committed to providing a caring, supportive, and well-supervised environment where children can learn, interact, and grow with confidence.",
  },
  {
    question:
      "Do parents receive updates about their child’s progress?",
    answer:
      "Bernard International Montessori School values communication between the school and parents. Parents can receive information about their child’s progress, school activities, and important announcements.",
  },
  {
    question:
      "Do you accept transfer students?",
    answer:
      "Parents seeking admission for transfer students can contact the school for information about available classes, placement requirements, and the admission process.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-container">
        {/* =================================================
            FAQ HEADER
        ================================================= */}

        <div className="faq-header">
          <p className="faq-subtitle">
            Frequently Asked Questions
          </p>

          <h2 className="faq-title">
            FAQs
          </h2>

          <p className="faq-description">
            Find quick answers to common questions about Bernard International
            Montessori School, our learning environment, admission process,
            and student experience.
          </p>
        </div>

        {/* =================================================
            FAQ LIST
        ================================================= */}

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? "300px"
                      : "0px",

                  opacity:
                    activeIndex === index
                      ? 1
                      : 0,

                  padding:
                    activeIndex === index
                      ? "0 18px 18px 18px"
                      : "0 18px",
                }}
              >
                <p className="faq-answer">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================
          COMPONENT STYLES
      =================================================== */}

      <style>{`
        .faq-section {
          padding: 80px 20px;
          background: #f8fbfd;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* ================================================
           HEADER
        ================================================ */

        .faq-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-subtitle {
          color: #279dd3;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        .faq-title {
          font-size: 2.2rem;
          color: #123f72;
          margin-bottom: 12px;
          font-weight: 800;
        }

        .faq-description {
          color: #64748b;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ================================================
           FAQ LIST
        ================================================ */

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(15, 42, 102, 0.06);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #e5edf5;
        }

        .faq-item:hover {
          box-shadow: 0 8px 28px rgba(15, 42, 102, 0.1);
          transform: translateY(-1px);
        }

        .faq-item.active {
          border-color: #279dd3;
          box-shadow: 0 8px 28px rgba(39, 157, 211, 0.12);
        }

        /* ================================================
           QUESTION
        ================================================ */

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          outline: none;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding: 20px 18px;

          font-size: 1rem;
          font-weight: 600;

          color: #123f72;

          cursor: pointer;
          text-align: left;

          transition:
            color 0.3s ease,
            background 0.3s ease;
        }

        .faq-question:hover {
          color: #155b9a;
          background: #f7fbfe;
        }

        .faq-item.active .faq-question {
          color: #155b9a;
        }

        .faq-question svg {
          flex-shrink: 0;
          color: #279dd3;
          font-size: 0.95rem;
        }

        /* ================================================
           ANSWER
        ================================================ */

        .faq-answer-wrapper {
          overflow: hidden;

          transition:
            max-height 0.35s ease,
            opacity 0.35s ease,
            padding 0.35s ease;
        }

        .faq-answer {
          color: #4b5563;
          line-height: 1.8;
          margin: 0;
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 15px;
          }

          .faq-header {
            margin-bottom: 32px;
          }

          .faq-subtitle {
            font-size: 0.78rem;
          }

          .faq-title {
            font-size: 1.8rem;
          }

          .faq-description {
            font-size: 0.95rem;
          }

          .faq-question {
            font-size: 0.95rem;
            padding: 18px 16px;
          }

          .faq-answer {
            font-size: 0.94rem;
          }
        }

        /* ================================================
           SMALL MOBILE
        ================================================ */

        @media (max-width: 480px) {
          .faq-section {
            padding: 50px 12px;
          }

          .faq-title {
            font-size: 1.65rem;
          }

          .faq-question {
            padding: 17px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Faqs;