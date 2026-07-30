import jsPDF from "jspdf";
import { COLORS } from "./colors";

const PAGE_HEIGHT = 297;
const TOP_MARGIN = 20;
const BOTTOM_MARGIN = 25;

/**
 * Prevents content from entering the footer area.
 */
function ensurePageSpace(
  doc: jsPDF,
  currentY: number,
  requiredHeight: number
): number {
  if (currentY + requiredHeight > PAGE_HEIGHT - BOTTOM_MARGIN) {
    doc.addPage();
    return TOP_MARGIN;
  }

  return currentY;
}

function drawSectionTitle(
  doc: jsPDF,
  title: string,
  y: number
): number {
  y = ensurePageSpace(doc, y, 18);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);

  doc.setTextColor(
    COLORS.dark.r,
    COLORS.dark.g,
    COLORS.dark.b
  );

  doc.text(title, 20, y);

  return y + 10;
}

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

  doc.setFont(
    "helvetica",
    "normal"
  );

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

  let y = drawSectionTitle(
    doc,
    "Skills",
    startY
  );

  let x = 20;

  skills.forEach((skill) => {

    y = ensurePageSpace(doc, y, 15);

    const width =
      doc.getTextWidth(skill) + 8;

    if (x + width > 180) {

      x = 20;

      y += 12;

      y = ensurePageSpace(doc, y, 15);
    }

    drawBadge(
      doc,
      skill,
      x,
      y
    );

    x += width + 4;
  });

  return y + 20;
}

export function addMissingSkills(
  doc: jsPDF,
  skills: string[],
  startY: number
): number {

  let y = drawSectionTitle(
    doc,
    "Missing Skills",
    startY
  );

  let x = 20;

  skills.forEach((skill) => {

    y = ensurePageSpace(doc, y, 15);

    const width =
      doc.getTextWidth(skill) + 8;

    if (x + width > 180) {

      x = 20;

      y += 12;

      y = ensurePageSpace(doc, y, 15);
    }

    doc.setFillColor(
      255,
      236,
      179
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

    doc.setTextColor(
      120,
      90,
      0
    );

    doc.setFontSize(10);

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.text(
      skill,
      x + 4,
      y + 5.5
    );

    x += width + 4;
  });

  return y + 20;
}

function drawBulletList(
  doc: jsPDF,
  title: string,
  items: string[],
  startY: number,
  bulletColor: {
    r: number;
    g: number;
    b: number;
  }
): number {

  let y = drawSectionTitle(
    doc,
    title,
    startY
  );

  if (items.length === 0) {

    doc.setFont(
      "helvetica",
      "italic"
    );

    doc.setFontSize(11);

    doc.setTextColor(
      COLORS.gray.r,
      COLORS.gray.g,
      COLORS.gray.b
    );

    doc.text(
      "No data available.",
      24,
      y
    );

    return y + 15;
  }

  items.forEach((item) => {

    y = ensurePageSpace(
      doc,
      y,
      12
    );

    doc.setFillColor(
      bulletColor.r,
      bulletColor.g,
      bulletColor.b
    );

    doc.circle(
      22,
      y - 1,
      1.4,
      "F"
    );

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(11);

    doc.setTextColor(
      COLORS.dark.r,
      COLORS.dark.g,
      COLORS.dark.b
    );

    const lines = doc.splitTextToSize(
      item,
      160
    );

    doc.text(
      lines,
      28,
      y
    );

    y +=
      lines.length * 6 + 4;
  });

  return y + 10;
}

export function addStrengths(
  doc: jsPDF,
  strengths: string[],
  startY: number
): number {

  return drawBulletList(
    doc,
    "Strengths",
    strengths,
    startY,
    COLORS.success
  );
}

export function addWeaknesses(
  doc: jsPDF,
  weaknesses: string[],
  startY: number
): number {

  return drawBulletList(
    doc,
    "Weaknesses",
    weaknesses,
    startY,
    COLORS.danger
  );
}

export function addSuggestions(
  doc: jsPDF,
  suggestions: string[],
  startY: number
): number {

  return drawBulletList(
    doc,
    "Improvement Suggestions",
    suggestions,
    startY,
    COLORS.warning
  );
}