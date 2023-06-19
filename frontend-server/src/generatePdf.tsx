import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
export const exportMultipleChartsToPdf=async()=> {
    const doc = new jsPDF("p", "px");
  
    const elements = document.getElementsByClassName("custom-chart"); 
  
    await creatPdf({ doc, elements }); 
    doc.save(`ESG_Readings.pdf`); 
  }

  const creatPdf=async({
    doc,
    elements,
  }: {
    doc: jsPDF;
    elements: HTMLCollectionOf<Element>;
  })=> {
    let top = 20;
    const padding = 10;
  
    for (let i = 0; i < elements.length; i++) {
      const el = elements.item(i) as HTMLElement;
      const imgData = await htmlToImage.toPng(el);
  
      let elHeight = el.offsetHeight;
      let elWidth = el.offsetWidth;
  
      const pageWidth = doc.internal.pageSize.getWidth();
  
      if (elWidth > pageWidth) {
        const ratio = pageWidth / elWidth;
        elHeight = elHeight * ratio - padding;
        elWidth = elWidth * ratio - padding;
      }
  
      const pageHeight = doc.internal.pageSize.getHeight();
  
      if (top + elHeight > pageHeight) {
        doc.addPage();
        top = 20;
      }
  
      doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
      top += elHeight;
    }
  }
  