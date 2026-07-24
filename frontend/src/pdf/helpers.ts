import jsPDF from "jspdf";
import { COLORS } from "./colors";

export function addReportInfo(doc: jsPDF) {
  const today = new Date().toLocaleDateString();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);

  doc.text("Resume Analysis Report", 20, 42);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  doc.text(`Generated: ${today}`, 20, 50);

  doc.setDrawColor(
    COLORS.primary.r,
    COLORS.primary.g,
    COLORS.primary.b
  );

  doc.line(20, 56, 190, 56);
}