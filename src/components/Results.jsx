// src/components/Results.jsx

import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaDownload,
  FaPrint,
  FaTimes,
  FaUserGraduate,
  FaFileAlt,
} from "react-icons/fa";

import bernardLogo from "../assets/bernard-logo.png";

// ============================================================
// SCHOOL INFORMATION
// ============================================================

const SCHOOL_INFO = {
  name: "Bernard International Montessori School",
  motto: "Equipping Tomorrow's Leaders Today",
  address: "SA 8 Idika Street, Apata Jenta, Jos, Plateau State, Nigeria",
};

// ============================================================
// SUBJECT TEMPLATE
// ============================================================

const createSubjects = (scores) => {
  const subjectNames = [
    "English Language",
    "Mathematics",
    "Basic Science",
    "Social Studies",
    "Computer Studies",
    "Civic Education",
    "Creative Arts",
    "Physical & Health Education",
  ];

  return subjectNames.map((subject, index) => {
    const score = scores[index] || 0;

    return {
      subject,
      ca: Math.round(score * 0.4),
      exam: score - Math.round(score * 0.4),
      total: score,
    };
  });
};

// ============================================================
// HARDCODED STUDENT RESULTS
// Temporary prototype data.
// Later this will come from Firebase / Firestore.
// ============================================================

const hardcodedResults = [
  {
    id: 1,
    admissionNumber: "BIMS/2026/001",
    studentName: "Daniel James",
    gender: "Male",
    className: "Primary 5",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 62,
      absent: 3,
    },
    subjects: createSubjects([82, 91, 78, 74, 88, 80, 76, 85]),
    teacherRemark:
      "Daniel is an intelligent and hardworking learner. Keep up the excellent performance.",
    principalRemark:
      "Excellent performance. Continue to aim higher.",
  },

  {
    id: 2,
    admissionNumber: "BIMS/2026/002",
    studentName: "Grace Emmanuel",
    gender: "Female",
    className: "Primary 5",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 64,
      absent: 1,
    },
    subjects: createSubjects([89, 86, 84, 80, 92, 85, 90, 88]),
    teacherRemark:
      "Grace demonstrates excellent understanding and participates actively in class.",
    principalRemark:
      "An outstanding result. Maintain this standard.",
  },

  {
    id: 3,
    admissionNumber: "BIMS/2026/003",
    studentName: "Joshua Peter",
    gender: "Male",
    className: "Primary 4",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 60,
      absent: 5,
    },
    subjects: createSubjects([75, 79, 72, 80, 70, 77, 74, 81]),
    teacherRemark:
      "Joshua has shown good progress and should continue working consistently.",
    principalRemark:
      "Good performance. More effort will produce even better results.",
  },

  {
    id: 4,
    admissionNumber: "BIMS/2026/004",
    studentName: "Esther Sunday",
    gender: "Female",
    className: "Primary 4",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 63,
      absent: 2,
    },
    subjects: createSubjects([85, 88, 82, 79, 91, 86, 84, 87]),
    teacherRemark:
      "Esther is focused, responsible, and performs very well across her subjects.",
    principalRemark:
      "Very impressive performance. Keep it up.",
  },

  {
    id: 5,
    admissionNumber: "BIMS/2026/005",
    studentName: "Michael Joseph",
    gender: "Male",
    className: "Primary 3",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 59,
      absent: 6,
    },
    subjects: createSubjects([68, 73, 70, 65, 76, 72, 69, 74]),
    teacherRemark:
      "Michael is making steady progress but should pay more attention during lessons.",
    principalRemark:
      "A fair performance. Greater effort is encouraged.",
  },

  {
    id: 6,
    admissionNumber: "BIMS/2026/006",
    studentName: "Precious John",
    gender: "Female",
    className: "Primary 3",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 65,
      absent: 0,
    },
    subjects: createSubjects([92, 90, 89, 86, 94, 88, 91, 90]),
    teacherRemark:
      "Precious is highly dedicated, attentive, and consistently produces excellent work.",
    principalRemark:
      "Exceptional result. Keep striving for excellence.",
  },

  {
    id: 7,
    admissionNumber: "BIMS/2026/007",
    studentName: "Samuel David",
    gender: "Male",
    className: "Primary 2",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 61,
      absent: 4,
    },
    subjects: createSubjects([77, 83, 75, 72, 80, 76, 78, 82]),
    teacherRemark:
      "Samuel is enthusiastic about learning and continues to improve.",
    principalRemark:
      "Good result. Keep working hard.",
  },

  {
    id: 8,
    admissionNumber: "BIMS/2026/008",
    studentName: "Blessing Musa",
    gender: "Female",
    className: "Primary 2",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 62,
      absent: 3,
    },
    subjects: createSubjects([81, 78, 83, 79, 85, 80, 88, 84]),
    teacherRemark:
      "Blessing demonstrates good academic ability and positive classroom behaviour.",
    principalRemark:
      "Very good performance. Continue the good work.",
  },

  {
    id: 9,
    admissionNumber: "BIMS/2026/009",
    studentName: "Divine Paul",
    gender: "Male",
    className: "Primary 1",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 60,
      absent: 5,
    },
    subjects: createSubjects([74, 80, 76, 73, 79, 75, 82, 78]),
    teacherRemark:
      "Divine is developing well and shows a positive attitude towards learning.",
    principalRemark:
      "Good progress. Keep improving.",
  },

  {
    id: 10,
    admissionNumber: "BIMS/2026/010",
    studentName: "Faith Andrew",
    gender: "Female",
    className: "Primary 1",
    term: "First Term",
    session: "2026/2027",
    attendance: {
      schoolOpened: 65,
      present: 64,
      absent: 1,
    },
    subjects: createSubjects([88, 84, 86, 82, 90, 87, 89, 85]),
    teacherRemark:
      "Faith is confident, attentive, and consistently demonstrates strong academic ability.",
    principalRemark:
      "Excellent performance. Well done.",
  },
];

// ============================================================
// HELPERS
// ============================================================

const getStudentTotal = (subjects = []) => {
  return subjects.reduce((sum, subject) => sum + subject.total, 0);
};

const getStudentAverage = (subjects = []) => {
  if (!subjects.length) return 0;

  return getStudentTotal(subjects) / subjects.length;
};

const getGrade = (score) => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";

  return "F";
};

const getRemark = (score) => {
  if (score >= 80) return "Excellent";
  if (score >= 70) return "Very Good";
  if (score >= 60) return "Good";
  if (score >= 50) return "Fair";

  return "Needs Improvement";
};

// ============================================================
// RESULT COMPONENT
// ============================================================

const Results = () => {
  const [results, setResults] = useState(hardcodedResults);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedResult, setSelectedResult] = useState(null);

  // ==========================================================
  // SEARCH
  // ==========================================================

  const filteredResults = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return results;
    }

    return results.filter((result) => {
      return (
        result.studentName.toLowerCase().includes(search) ||
        result.admissionNumber.toLowerCase().includes(search) ||
        result.className.toLowerCase().includes(search) ||
        result.term.toLowerCase().includes(search) ||
        result.session.toLowerCase().includes(search)
      );
    });
  }, [results, searchTerm]);

  // ==========================================================
  // VIEW RESULT
  // ==========================================================

  const handleOpenResult = (result) => {
    setSelectedResult(result);

    document.body.style.overflow = "hidden";
  };

  const handleCloseResult = () => {
    setSelectedResult(null);

    document.body.style.overflow = "";
  };

  // ==========================================================
  // PROTOTYPE CRUD BUTTONS
  // These are intentionally visible.
  // Firestore functionality will be added later.
  // ==========================================================

  const handleAddResult = () => {
    alert(
      "Add Result form will be connected when we implement the result CRUD functionality."
    );
  };

  const handleEditResult = (event, result) => {
    event.stopPropagation();

    alert(`Edit result for ${result.studentName}`);
  };

  const handleDeleteResult = (event, result) => {
    event.stopPropagation();

    const confirmed = window.confirm(
      `Delete the result for ${result.studentName}?`
    );

    if (!confirmed) return;

    // Prototype-only deletion from local state.
    setResults((currentResults) =>
      currentResults.filter((item) => item.id !== result.id)
    );
  };

  // ==========================================================
  // PRINT / SAVE AS PDF
  //
  // Browser print dialog allows:
  // Destination -> Save as PDF
  // ==========================================================

  const handlePrintResult = () => {
    window.print();
  };

  // ==========================================================
  // RESULT MODAL CALCULATIONS
  // ==========================================================

  const selectedTotal = selectedResult
    ? getStudentTotal(selectedResult.subjects)
    : 0;

  const selectedAverage = selectedResult
    ? getStudentAverage(selectedResult.subjects)
    : 0;

  const selectedMaximum = selectedResult
    ? selectedResult.subjects.length * 100
    : 0;

  return (
    <>
      {/* ======================================================
          RESULTS PAGE
      ====================================================== */}

      <section
        id="results"
        className="min-h-screen bg-slate-50 py-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-sky-600">
                Academic Records
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-blue-950">
                Student Results
              </h2>

              <p className="mt-3 text-slate-600 max-w-2xl leading-7">
                Search for a student&apos;s academic result using the
                student&apos;s name, admission number, class, term, or
                academic session.
              </p>
            </div>

            {/* ADD RESULT */}

            <button
              type="button"
              onClick={handleAddResult}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition shadow-md"
            >
              <FaPlus />

              <span>Add Result</span>
            </button>
          </div>

          {/* ==================================================
              SEARCH BAR
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5 mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search name, admission number, class, term or session..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-blue-900">
                  {filteredResults.length}
                </span>{" "}
                result{filteredResults.length !== 1 ? "s" : ""}
              </p>

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-sm font-semibold text-blue-800 hover:text-blue-950"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>

          {/* ==================================================
              RESULTS TABLE
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px]">
                <thead className="bg-blue-950 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      #
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Admission No.
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Student
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Class
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Term
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Session
                    </th>

                    <th className="px-5 py-4 text-left text-xs uppercase tracking-wider">
                      Average
                    </th>

                    <th className="px-5 py-4 text-center text-xs uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredResults.map((result, index) => {
                    const average = getStudentAverage(result.subjects);

                    return (
                      <tr
                        key={result.id}
                        onClick={() => handleOpenResult(result)}
                        className="hover:bg-sky-50 cursor-pointer transition group"
                      >
                        <td className="px-5 py-4 text-sm text-slate-500">
                          {index + 1}
                        </td>

                        <td className="px-5 py-4">
                          <span className="text-sm font-bold text-blue-900">
                            {result.admissionNumber}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-sky-100 text-blue-900 flex items-center justify-center shrink-0">
                              <FaUserGraduate />
                            </div>

                            <div>
                              <p className="font-semibold text-slate-900">
                                {result.studentName}
                              </p>

                              <p className="text-xs text-slate-500">
                                {result.gender}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-700">
                          {result.className}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-700">
                          {result.term}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-700">
                          {result.session}
                        </td>

                        <td className="px-5 py-4">
                          <span className="inline-flex px-3 py-1 rounded-full bg-sky-100 text-blue-900 text-sm font-bold">
                            {average.toFixed(1)}%
                          </span>
                        </td>

                        <td
                          className="px-5 py-4"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {/* VIEW */}

                            <button
                              type="button"
                              onClick={() => handleOpenResult(result)}
                              title="View Result"
                              className="h-9 w-9 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white flex items-center justify-center transition"
                            >
                              <FaEye />
                            </button>

                            {/* EDIT */}

                            <button
                              type="button"
                              onClick={(event) =>
                                handleEditResult(event, result)
                              }
                              title="Edit Result"
                              className="h-9 w-9 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition"
                            >
                              <FaEdit />
                            </button>

                            {/* DELETE */}

                            <button
                              type="button"
                              onClick={(event) =>
                                handleDeleteResult(event, result)
                              }
                              title="Delete Result"
                              className="h-9 w-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ================================================
                NO RESULT
            ================================================ */}

            {filteredResults.length === 0 && (
              <div className="py-16 px-4 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl">
                  <FaSearch />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-800">
                  No Result Found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try searching with another student name, admission number,
                  class, term, or session.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          RESULT MODAL
      ====================================================== */}

      {selectedResult && (
        <div
          className="result-modal-overlay fixed inset-0 z-[9999] bg-black/70 p-3 md:p-6 overflow-y-auto"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseResult();
            }
          }}
        >
          <div className="result-modal-container max-w-5xl mx-auto">
            {/* =================================================
                MODAL ACTION BAR
            ================================================= */}

            <div className="result-action-bar bg-white rounded-t-2xl border-b border-slate-200 px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-sky-100 text-blue-900 flex items-center justify-center">
                  <FaFileAlt />
                </div>

                <div>
                  <p className="font-bold text-blue-950">
                    Student Result
                  </p>

                  <p className="text-xs text-slate-500">
                    {selectedResult.studentName}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* PRINT */}

                <button
                  type="button"
                  onClick={handlePrintResult}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition"
                >
                  <FaPrint />

                  <span>Print</span>
                </button>

                {/* DOWNLOAD PDF */}

                <button
                  type="button"
                  onClick={handlePrintResult}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition"
                >
                  <FaDownload />

                  <span>Download PDF</span>
                </button>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={handleCloseResult}
                  className="h-10 w-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition"
                  aria-label="Close Result"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* =================================================
                PRINTABLE RESULT
            ================================================= */}

            <div
              id="printable-result"
              className="result-sheet bg-white px-4 sm:px-7 md:px-10 py-8 md:py-10 rounded-b-2xl"
            >
              {/* ===============================================
                  SCHOOL HEADER
              =============================================== */}

              <div className="result-school-header flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left border-b-[3px] border-blue-900 pb-6">
                {/* LOGO */}

                <div className="shrink-0">
                  <img
                    src={bernardLogo}
                    alt="Bernard International Montessori School Logo"
                    className="result-logo w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>

                {/* SCHOOL INFORMATION */}

                <div>
                  <h1 className="result-school-name text-2xl md:text-3xl lg:text-4xl font-black uppercase text-blue-950 leading-tight">
                    {SCHOOL_INFO.name}
                  </h1>

                  <p className="mt-2 text-sm md:text-base font-bold italic text-sky-600">
                    “{SCHOOL_INFO.motto}”
                  </p>

                  <p className="mt-2 text-xs md:text-sm text-slate-600">
                    {SCHOOL_INFO.address}
                  </p>
                </div>
              </div>

              {/* ===============================================
                  RESULT TITLE
              =============================================== */}

              <div className="text-center my-6">
                <h2 className="inline-block px-7 py-2 bg-blue-950 text-white text-sm md:text-base font-extrabold uppercase tracking-[0.15em] rounded-md">
                  Student Academic Result
                </h2>
              </div>

              {/* ===============================================
                  STUDENT INFORMATION
              =============================================== */}

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-lg overflow-hidden mb-7">
                <ResultInfo
                  label="Student Name"
                  value={selectedResult.studentName}
                />

                <ResultInfo
                  label="Admission Number"
                  value={selectedResult.admissionNumber}
                />

                <ResultInfo
                  label="Class"
                  value={selectedResult.className}
                />

                <ResultInfo
                  label="Gender"
                  value={selectedResult.gender}
                />

                <ResultInfo
                  label="Term"
                  value={selectedResult.term}
                />

                <ResultInfo
                  label="Academic Session"
                  value={selectedResult.session}
                />

                <ResultInfo
                  label="Days School Opened"
                  value={selectedResult.attendance.schoolOpened}
                />

                <ResultInfo
                  label="Days Present"
                  value={selectedResult.attendance.present}
                />
              </div>

              {/* ===============================================
                  SUBJECT RESULT TABLE
              =============================================== */}

              <div className="overflow-x-auto">
                <table className="result-subject-table w-full border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="border border-blue-950 px-3 py-3 text-left text-xs uppercase">
                        S/N
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-left text-xs uppercase">
                        Subject
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-center text-xs uppercase">
                        C.A.
                        <span className="block text-[10px] font-normal">
                          40
                        </span>
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-center text-xs uppercase">
                        Exam
                        <span className="block text-[10px] font-normal">
                          60
                        </span>
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-center text-xs uppercase">
                        Total
                        <span className="block text-[10px] font-normal">
                          100
                        </span>
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-center text-xs uppercase">
                        Grade
                      </th>

                      <th className="border border-blue-950 px-3 py-3 text-left text-xs uppercase">
                        Remark
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {selectedResult.subjects.map((subject, index) => (
                      <tr
                        key={subject.subject}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="border border-slate-300 px-3 py-3 text-sm text-center">
                          {index + 1}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-800">
                          {subject.subject}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm text-center">
                          {subject.ca}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm text-center">
                          {subject.exam}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm text-center font-bold text-blue-950">
                          {subject.total}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm text-center font-bold">
                          {getGrade(subject.total)}
                        </td>

                        <td className="border border-slate-300 px-3 py-3 text-sm">
                          {getRemark(subject.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ===============================================
                  PERFORMANCE SUMMARY
              =============================================== */}

              <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 border border-slate-300 rounded-lg overflow-hidden">
                <ResultSummary
                  label="Total Score"
                  value={`${selectedTotal}/${selectedMaximum}`}
                />

                <ResultSummary
                  label="Average"
                  value={`${selectedAverage.toFixed(1)}%`}
                />

                <ResultSummary
                  label="Overall Grade"
                  value={getGrade(selectedAverage)}
                />

                <ResultSummary
                  label="Overall Remark"
                  value={getRemark(selectedAverage)}
                />
              </div>

              {/* ===============================================
                  ATTENDANCE
              =============================================== */}

              <div className="mt-7">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-blue-950 mb-3">
                  Attendance
                </h3>

                <div className="grid grid-cols-3 border border-slate-300 rounded-lg overflow-hidden">
                  <ResultSummary
                    label="School Opened"
                    value={selectedResult.attendance.schoolOpened}
                  />

                  <ResultSummary
                    label="Present"
                    value={selectedResult.attendance.present}
                  />

                  <ResultSummary
                    label="Absent"
                    value={selectedResult.attendance.absent}
                  />
                </div>
              </div>

              {/* ===============================================
                  REMARKS
              =============================================== */}

              <div className="mt-7 grid md:grid-cols-2 gap-4">
                <div className="border border-slate-300 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    Class Teacher&apos;s Remark
                  </p>

                  <p className="mt-2 text-sm text-slate-800 leading-6">
                    {selectedResult.teacherRemark}
                  </p>

                  <div className="mt-8 border-t border-slate-400 pt-2 text-xs text-slate-500">
                    Class Teacher&apos;s Signature
                  </div>
                </div>

                <div className="border border-slate-300 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    Head Teacher&apos;s Remark
                  </p>

                  <p className="mt-2 text-sm text-slate-800 leading-6">
                    {selectedResult.principalRemark}
                  </p>

                  <div className="mt-8 border-t border-slate-400 pt-2 text-xs text-slate-500">
                    Head Teacher&apos;s Signature / Stamp
                  </div>
                </div>
              </div>

              {/* ===============================================
                  GRADING SYSTEM
              =============================================== */}

              <div className="mt-7 border border-slate-300 rounded-lg p-4">
                <p className="text-xs uppercase tracking-wider font-bold text-blue-950 mb-2">
                  Grading System
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600">
                  <span>
                    <strong>A:</strong> 80 - 100
                  </span>

                  <span>
                    <strong>B:</strong> 70 - 79
                  </span>

                  <span>
                    <strong>C:</strong> 60 - 69
                  </span>

                  <span>
                    <strong>D:</strong> 50 - 59
                  </span>

                  <span>
                    <strong>F:</strong> 0 - 49
                  </span>
                </div>
              </div>

              {/* ===============================================
                  RESULT FOOTER
              =============================================== */}

              <div className="mt-8 pt-5 border-t-2 border-blue-900 text-center">
                <p className="text-sm font-bold text-blue-950">
                  {SCHOOL_INFO.name}
                </p>

                <p className="mt-1 text-xs italic text-sky-600">
                  {SCHOOL_INFO.motto}
                </p>

                <p className="mt-2 text-[11px] text-slate-500">
                  This result sheet is generated from the school academic
                  records system.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          PRINT STYLES
      ====================================================== */}

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm;
          }

          body * {
            visibility: hidden !important;
          }

          #printable-result,
          #printable-result * {
            visibility: visible !important;
          }

          #printable-result {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 5mm !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: white !important;
          }

          .result-action-bar {
            display: none !important;
          }

          .result-modal-overlay {
            position: static !important;
            background: white !important;
            padding: 0 !important;
            overflow: visible !important;
          }

          .result-modal-container {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
          }

          .result-school-header {
            display: flex !important;
            flex-direction: row !important;
            text-align: left !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .result-logo {
            width: 80px !important;
            height: 80px !important;
          }

          .result-school-name {
            font-size: 22px !important;
          }

          .result-subject-table {
            min-width: 0 !important;
            width: 100% !important;
            font-size: 10px !important;
          }

          .result-subject-table th,
          .result-subject-table td {
            padding: 5px !important;
          }

          button {
            display: none !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
};

// ============================================================
// STUDENT INFORMATION BOX
// ============================================================

const ResultInfo = ({ label, value }) => {
  return (
    <div className="px-4 py-3 border-b sm:border-r border-slate-300 last:border-r-0">
      <p className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
};

// ============================================================
// RESULT SUMMARY BOX
// ============================================================

const ResultSummary = ({ label, value }) => {
  return (
    <div className="px-3 py-4 text-center border-r last:border-r-0 border-slate-300">
      <p className="text-[10px] md:text-xs uppercase tracking-wider font-bold text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-base md:text-lg font-extrabold text-blue-950">
        {value}
      </p>
    </div>
  );
};

export default Results;