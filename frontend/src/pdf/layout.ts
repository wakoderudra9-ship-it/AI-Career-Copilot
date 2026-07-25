import jsPDF from "jspdf";

export const PAGE = {
  TOP: 20,
  BOTTOM: 270,
  LEFT: 20,
};

export class PDFLayout {

  private y: number;

  constructor(startY: number) {
    this.y = startY;
  }

  getY() {
    return this.y;
  }

  setY(y: number) {
    this.y = y;
  }

  move(space: number) {
    this.y += space;
  }

  ensureSpace(
    doc: jsPDF,
    requiredHeight: number
  ) {

    if (this.y + requiredHeight > PAGE.BOTTOM) {

      doc.addPage();

      this.y = PAGE.TOP;
    }
  }
}