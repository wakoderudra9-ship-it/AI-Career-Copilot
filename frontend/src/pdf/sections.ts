import jsPDF from "jspdf";
import type { ResumeAnalysisResponse } from "../types/resume";
import { COLORS } from "./colors";

const PAGE_HEIGHT = 297;
const TOP_MARGIN = 20;
const BOTTOM_MARGIN = 25;

function getBarColor(score: number) {
  if (score >= 8) return COLORS.success;
  if (score >= 6) return COLORS.warning;
  return COLORS.danger;
}

function ensurePageSpace(
  doc: jsPDF,
  currentY: number,
  requiredHeight: number
): number {
  if (currentY + requiredHeight > PAGE_HEIGHT - BOTTOM_MARGIN) {
    doc.addPage();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    doc.setTextColor(
      COLORS.dark.r,
      COLORS.dark.g,
      COLORS.dark.b
    );

    doc.text("Section Performance (Continued)", 20, TOP_MARGIN);

    return TOP_MARGIN + 12;
  }

  return currentY;
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

    y = ensurePageSpace(doc, y, 24);

    const color = getBarColor(Number(score));

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);

    doc.setTextColor(
      COLORS.dark.r,
      COLORS.dark.g,
      COLORS.dark.b
    );

    doc.text(String(section), 20, y);

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

    doc.setFillColor(
      color.r,
      color.g,
      color.b
    );

    doc.roundedRect(
      20,
      y + 3,
      Number(score) * 12,
      6,
      2,
      2,
      "F"
    );

    doc.setFont("helvetica", "bold");

    doc.text(
      `${Number(score)}/10`,
      150,
      y + 8
    );

    y += 20;
  });

  return y;
}