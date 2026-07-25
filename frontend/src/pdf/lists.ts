import jsPDF from "jspdf";
import { COLORS } from "./colors";

function drawBadge(
  doc: jsPDF,
  text: string,
  x: number,
  y: number
) {
  const paddingX = 4;

  const width =
    doc.getTextWidth(text) + paddingX * 2;

  doc.setFillColor(
    COLORS.primary.r,
    COLORS.primary.g,
    COLORS.primary.b
  );

  doc.roundedRect(
    x,
    y,
    width,
    8,
    3,
    3,
    "F"
  );

  doc.setTextColor(255);
  doc.setFontSize(10);

  doc.text(
    text,
    x + paddingX,
    y + 5.5
  );

  return width;
}

export function addSkills(
  doc: jsPDF,
  skills: string[],
  startY: number
): number {

  let y = startY;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");

  doc.setTextColor(
    COLORS.dark.r,
    COLORS.dark.g,
    COLORS.dark.b
  );

  doc.text("Skills", 20, y);

  y += 10;

  let x = 20;

  skills.forEach(skill => {

    const width =
      doc.getTextWidth(skill) + 8;

    if (x + width > 180) {

      x = 20;

      y += 12;
    }

    drawBadge(doc, skill, x, y);

    x += width + 4;
  });

  return y + 20;
}

export function addMissingSkills(
  doc: jsPDF,
  skills: string[],
  startY: number
): number {

  let y = startY;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");

  doc.setTextColor(
    COLORS.dark.r,
    COLORS.dark.g,
    COLORS.dark.b
  );

  doc.text("Missing Skills", 20, y);

  y += 10;

  let x = 20;

  skills.forEach(skill => {

    const width =
      doc.getTextWidth(skill) + 8;

    if (x + width > 180) {

      x = 20;

      y += 12;
    }

    doc.setFillColor(255, 236, 179);

    doc.roundedRect(
      x,
      y,
      width,
      8,
      3,
      3,
      "F"
    );

    doc.setTextColor(120, 90, 0);

    doc.setFontSize(10);

    doc.text(
      skill,
      x + 4,
      y + 5.5
    );

    x += width + 4;
  });

  return y + 20;
}

export function addStrengths(
  doc: jsPDF,
  strengths: string[],
  startY: number
): number {

  // Temporary placeholder
  return startY;
}

export function addWeaknesses(
  doc: jsPDF,
  weaknesses: string[],
  startY: number
): number {

  // Temporary placeholder
  return startY;
}

export function addSuggestions(
  doc: jsPDF,
  suggestions: string[],
  startY: number
): number {

  // Temporary placeholder
  return startY;
}