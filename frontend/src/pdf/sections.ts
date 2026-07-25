import jsPDF from "jspdf";
import type { ResumeAnalysisResponse } from "../types/resume";
import { COLORS } from "./colors";

function getBarColor(score: number) {
  if (score >= 8) return COLORS.success;
  if (score >= 6) return COLORS.warning;
  return COLORS.danger;
}

export function addSectionScores(
  doc: jsPDF,
  analysis: ResumeAnalysisResponse,
  startY: number
): number {

  let y = startY;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);

  doc.setTextColor(
    COLORS.dark.r,
    COLORS.dark.g,
    COLORS.dark.b
  );

  doc.text("Section Performance", 20, y);

  y += 12;

  Object.entries(
    analysis.analysis.section_scores
  ).forEach(([section, score]) => {

    const color = getBarColor(score);

    // Section Name
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(section, 20, y);

    // Background Bar
    doc.setFillColor(
      COLORS.lightGray.r,
      COLORS.lightGray.g,
      COLORS.lightGray.b
    );

    doc.roundedRect(
      20,
      y + 3,
      120,
      6,
      2,
      2,
      "F"
    );

    // Filled Bar
    doc.setFillColor(
      color.r,
      color.g,
      color.b
    );

    doc.roundedRect(
      20,
      y + 3,
      score * 12,
      6,
      2,
      2,
      "F"
    );

    // Score
    doc.setFont("helvetica", "bold");

    doc.text(
      `${score}/10`,
      150,
      y + 8
    );

    y += 20;
  });

  return y;
}