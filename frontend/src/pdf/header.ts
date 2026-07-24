import jsPDF from "jspdf";
import { COLORS } from "./colors";

export function addHeader(doc: jsPDF) {
  // Top Banner
  doc.setFillColor(
    COLORS.primary.r,
    COLORS.primary.g,
    COLORS.primary.b
  );

  doc.rect(0, 0, 210, 28, "F");

  // White Title
  doc.setTextColor(
    COLORS.white.r,
    COLORS.white.g,
    COLORS.white.b
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("AI Career Copilot", 20, 16);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Professional Resume Analysis Report", 20, 23);

  // Reset color
  doc.setTextColor(
    COLORS.black.r,
    COLORS.black.g,
    COLORS.black.b
  );
}