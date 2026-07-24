import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { ResumeAnalysisResponse } from "../types/resume";
import { COLORS } from "./colors";

export function addSectionScores(
  doc: jsPDF,
  analysis: ResumeAnalysisResponse
) {
  autoTable(doc, {
    startY: 160,
    head: [["Section", "Score"]],
    body: Object.entries(
      analysis.analysis.section_scores
    ).map(([section, score]) => [
      section,
      `${score}/10`,
    ]),
    theme: "striped",
    headStyles: {
      fillColor: [
        COLORS.primary.r,
        COLORS.primary.g,
        COLORS.primary.b,
      ],
      textColor: 255,
    },
  });
}