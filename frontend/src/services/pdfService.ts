import jsPDF from "jspdf";

import type { ResumeAnalysisResponse } from "../types/resume";

import { addHeader } from "../pdf/header";
import { addFooter } from "../pdf/footer";
import { addReportInfo } from "../pdf/helpers";
import { addScoreCard } from "../pdf/scoreCards";

import { addSectionScores } from "../pdf/sections";

import {
  addSkills,
  addMissingSkills,
  addStrengths,
  addWeaknesses,
  addSuggestions,
} from "../pdf/lists";

export const generateResumePDF = (
  analysis: ResumeAnalysisResponse
) => {
  const doc = new jsPDF();

  // Header
  addHeader(doc);

  // Report Information
  addReportInfo(doc);

  // Resume Score Card
  addScoreCard(
    doc,
    "Resume Score",
    analysis.analysis.resume_score,
    65
  );

  // ATS Score Card
  addScoreCard(
    doc,
    "ATS Score",
    analysis.analysis.ats_score,
    112
  );

  // Section Scores
  addSectionScores(doc, analysis);

  // Skills
  addSkills(
    doc,
    analysis.analysis.skills
  );

  // Missing Skills
  addMissingSkills(
    doc,
    analysis.analysis.missing_skills
  );

  // Strengths
  addStrengths(
    doc,
    analysis.analysis.strengths
  );

  // Weaknesses
  addWeaknesses(
    doc,
    analysis.analysis.weaknesses
  );

  // AI Suggestions
  addSuggestions(
    doc,
    analysis.analysis.improvement_suggestions
  );

  // Footer
  addFooter(doc);

  doc.save("Resume_Analysis_Report.pdf");
};