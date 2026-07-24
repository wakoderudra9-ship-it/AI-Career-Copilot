import jsPDF from "jspdf";
import { COLORS } from "./colors";

function getScoreColor(score: number) {
  if (score >= 80) return COLORS.success;
  if (score >= 60) return COLORS.warning;
  return COLORS.danger;
}

export function addScoreCard(
  doc: jsPDF,
  title: string,
  score: number,
  startY: number
) {
  const color = getScoreColor(score);

  // Card Background
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(20, startY, 170, 40, 4, 4, "F");

  // Border
  doc.setDrawColor(color.r, color.g, color.b);
  doc.roundedRect(20, startY, 170, 40, 4, 4);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);

  doc.setTextColor(30, 41, 59);

  doc.text(title, 105, startY + 10, {
    align: "center",
  });

  // Score
  doc.setFontSize(28);

  doc.setTextColor(
    color.r,
    color.g,
    color.b
  );

  doc.text(
    `${score}`,
    105,
    startY + 27,
    {
      align: "center",
    }
  );

  // Label
  doc.setFontSize(10);

  doc.setTextColor(100, 116, 139);

  let label = "Needs Improvement";

  if (score >= 80) label = "Excellent";
  else if (score >= 60) label = "Good";

  doc.text(
    label,
    105,
    startY + 35,
    {
      align: "center",
    }
  );

  doc.setTextColor(0, 0, 0);
}