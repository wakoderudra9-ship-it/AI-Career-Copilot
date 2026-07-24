import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { COLORS } from "./colors";

function createListTable(
  doc: jsPDF,
  title: string,
  items: string[],
  emptyMessage?: string
) {
  autoTable(doc, {
    head: [[title]],
    body:
      items.length > 0
        ? items.map(item => [item])
        : [[emptyMessage ?? "No data available."]],
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

export function addSkills(
  doc: jsPDF,
  skills: string[]
) {
  createListTable(doc, "Skills", skills);
}

export function addMissingSkills(
  doc: jsPDF,
  skills: string[]
) {
  createListTable(
    doc,
    "Missing Skills",
    skills
  );
}

export function addStrengths(
  doc: jsPDF,
  strengths: string[]
) {
  createListTable(
    doc,
    "Strengths",
    strengths,
    "No strengths identified yet."
  );
}

export function addWeaknesses(
  doc: jsPDF,
  weaknesses: string[]
) {
  createListTable(
    doc,
    "Weaknesses",
    weaknesses
  );
}

export function addSuggestions(
  doc: jsPDF,
  suggestions: string[]
) {
  createListTable(
    doc,
    "AI Suggestions",
    suggestions
  );
}