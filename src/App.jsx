import { useState } from 'react';
import jsPDF from 'jspdf';
import { consolaFont } from './consolaFont';
import { manuuLogo } from './manuuLogo';

import { PROGRAMS } from './programs';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    enrollmentNo: ''
  });

  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
  const [pdfFileName, setPdfFileName] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = (e) => {
    e.preventDefault();

    const doc = new jsPDF();

    // Add custom VS Code standard font (Consolas)
    doc.addFileToVFS('Consolas.ttf', consolaFont);
    doc.addFont('Consolas.ttf', 'Consolas', 'normal');

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;

    // --- Front Page --- //
    let currentY = 25;

    const centerText = (text, size, weight, color, yOffset, underline = false) => {
      doc.setFont("helvetica", weight);
      doc.setFontSize(size);
      if (color) doc.setTextColor(color[0], color[1], color[2]);
      else doc.setTextColor(0, 0, 0);

      const width = doc.getTextWidth(text);
      const x = (pageWidth - width) / 2;
      doc.text(text, x, currentY);

      if (underline) {
        doc.setLineWidth(0.5);
        if (color) doc.setDrawColor(color[0], color[1], color[2]);
        else doc.setDrawColor(0, 0, 0);
        doc.line(x, currentY + 1.5, x + width, currentY + 1.5);
      }

      currentY += yOffset;
    };

    centerText("A Lab Manual For", 14, "bold", null, 12);
    centerText("DATA STRUCTURE & ALGORITHM LAB", 18, "bold", [65, 105, 225], 12);

    if (formData.rollNo) {
      centerText(formData.rollNo, 14, "bold", [65, 105, 225], 15);
    } else {
      currentY += 15;
    }

    centerText("A RECORD SUBMITTED IN PARTIAL FULFILLMENT OF THE REQUIREMENTS", 10, "bold", null, 6);
    centerText("FOR \"DATA STRUCTURE & ALGORITHM LAB\" OF", 10, "bold", null, 15);

    centerText("MASTER OF COMPUTER APPLICATION", 14, "bold", [192, 0, 0], 12);
    centerText("1ST Year / 2ND Semester", 12, "bold", null, 8);
    centerText("2024-2025", 12, "bold", null, 15);

    centerText("By", 12, "bold", null, 10);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    const nameText = formData.name || "Student Name";
    const nameWidth = doc.getTextWidth(nameText);
    const nameX = (pageWidth - nameWidth) / 2;
    doc.setFillColor(255, 244, 153);
    doc.rect(nameX - 5, currentY - 5.5, nameWidth + 10, 7.5, "F");
    doc.setTextColor(0, 0, 0);
    doc.text(nameText, nameX, currentY);
    currentY += 15;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const rollLabel = "Roll Number:  ";
    const rollLabelWidth = doc.getTextWidth(rollLabel);

    doc.setFont("helvetica", "bold");
    const rollValText = formData.rollNo || "Roll No";
    const rollValWidth = doc.getTextWidth(rollValText);

    const totalRollWidth = rollLabelWidth + rollValWidth + 6;
    const startX = (pageWidth - totalRollWidth) / 2;

    doc.setFont("helvetica", "normal");
    doc.text(rollLabel, startX, currentY);

    doc.setFillColor(255, 244, 153);
    doc.rect(startX + rollLabelWidth - 2, currentY - 4.5, rollValWidth + 10, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.text(rollValText, startX + rollLabelWidth + 3, currentY);
    currentY += 10;

    const enLabel = "Enrolment Number:  ";
    doc.setFont("helvetica", "normal");
    const enLabelWidth = doc.getTextWidth(enLabel);
    const enValText = formData.enrollmentNo || "Enrolment No";
    doc.setFont("helvetica", "bold");
    const enValWidth = doc.getTextWidth(enValText);

    const totalEnWidth = enLabelWidth + enValWidth + 6;
    const startXEn = (pageWidth - totalEnWidth) / 2;

    doc.setFont("helvetica", "normal");
    doc.text(enLabel, startXEn, currentY);

    doc.setFillColor(255, 244, 153);
    doc.rect(startXEn + enLabelWidth - 2, currentY - 4.5, enValWidth + 10, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.text(enValText, startXEn + enLabelWidth + 3, currentY);
    currentY += 15;

    centerText("Submitted to", 12, "bold", null, 12);
    centerText("Dr. A Satya Sai Kumar", 14, "bold", null, 6);
    centerText("Assistant Professor", 12, "normal", null, 10);

    centerText("Department of CS & IT, MANUU", 12, "normal", null, 6);

    const logoSize = 24;
    const logoX = (pageWidth - logoSize) / 2;
    doc.addImage(manuuLogo, 'PNG', logoX, currentY, logoSize, logoSize);
    currentY += logoSize + 6;

    centerText("SCHOOL OF TECHNOLOGY", 14, "bold", [200, 50, 50], 8, true);
    centerText("DEPARTMENT OF COMPUTER SCIENCE & INFORMATION TECHNOLOGY", 10, "bold", null, 7);
    centerText("MAULANA AZAD NATIONAL URDU UNIVERSITY", 15, "bold", [31, 73, 125], 7);
    centerText("(A Central University established by an Act of Parliament in 1998)", 10, "normal", null, 6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    const p1 = "Accredited Grade \"A";
    const p2 = "+";
    const p3 = "\" by NAAC";

    const w1 = doc.getTextWidth(p1);
    doc.setFontSize(6);
    const w2 = doc.getTextWidth(p2);
    doc.setFontSize(10);
    const w3 = doc.getTextWidth(p3);

    const totalW = w1 + w2 + w3;
    let startXX = (pageWidth - totalW) / 2;

    doc.text(p1, startXX, currentY);
    startXX += w1 + 0.2; // Add tiny horizontal gap
    doc.setFontSize(6);
    doc.text(p2, startXX, currentY - 2); // Standard superscript height relative to baseline
    startXX += w2 + 0.2;
    doc.setFontSize(10);
    doc.text(p3, startXX, currentY);

    currentY += 15;

    // --- Certificate Page --- //
    doc.addPage();
    currentY = 40;

    const certLogoSize = 25;
    const certLogoX = (pageWidth - certLogoSize) / 2;
    doc.addImage(manuuLogo, 'PNG', certLogoX, currentY, certLogoSize, certLogoSize);
    currentY += certLogoSize + 10;

    centerText("DEPARTMENT OF", 12, "bold", [0, 32, 96], 6);
    centerText("COMPUTER SCIENCE & INFORMATION TECHNOLOGY", 12, "bold", [0, 32, 96], 20);

    centerText("Certificate", 24, "normal", null, 25);

    // Helper function to render a seamlessly centered line combining multiple styled parts
    const renderCenteredLine = (y, parts) => {
      let totalWidth = 0;
      parts.forEach(p => {
        doc.setFont("helvetica", p.style);
        totalWidth += doc.getTextWidth(p.text);
      });

      let x = (pageWidth - totalWidth) / 2;
      parts.forEach(p => {
        doc.setFont("helvetica", p.style);
        const w = doc.getTextWidth(p.text);
        if (p.bg) {
          doc.setFillColor(255, 244, 153);
          doc.rect(x - 2, y - 4.5, w + 4, 6, "F");
        }
        doc.text(p.text, x, y);
        x += w;
      });
    };

    currentY += 5;
    doc.setFontSize(11);

    // Paragraph Line 1
    renderCenteredLine(currentY, [
      { text: "Certified that this is the Bonafide ", style: "italic" },
      { text: "Data Structure & Algorithm Lab ", style: "bolditalic" }
    ]);

    currentY += 10;
    // Line 2
    const certName = formData.name ? formData.name : "Student Name";
    renderCenteredLine(currentY, [
      { text: "(25MMCA012HY) ", style: "bolditalic" },
      { text: "Record of Mr./Ms. ", style: "italic" },
      { text: certName, style: "bolditalic", bg: true },
      { text: " , Roll No ", style: "italic" }
    ]);

    currentY += 10;
    // Line 3
    const certRoll = formData.rollNo ? formData.rollNo : "Roll No";
    renderCenteredLine(currentY, [
      { text: certRoll, style: "bolditalic", bg: true },
      { text: " , MCA I Year, II Semester, ", style: "bolditalic" },
      { text: "of the academic year 2025-26.", style: "italic" }
    ]);

    currentY += 60;

    // Head, Dept
    centerText("Head,", 11, "bolditalic", null, 6);
    centerText("Department of CS & IT", 11, "bolditalic", null, 40);

    // Bottom signatures
    doc.setFont("helvetica", "bolditalic");
    doc.text("Internal", margin + 5, currentY);
    doc.text("External", pageWidth - margin - 5 - doc.getTextWidth("External"), currentY);
    currentY += 6;
    doc.text("Examiner", margin + 5, currentY);
    doc.text("Examiner", pageWidth - margin - 5 - doc.getTextWidth("Examiner"), currentY);

    let yPos = margin + 10;

    // Calculate Index Pages and pre-allocate them
    let indexPagesNeeded = 1;
    let idxY = margin + 40; // 30 for INDEX headers + 10 for table header

    const progColWidth = (pageWidth - (margin * 2)) * 0.57; // ~57% width for title
    const indexRowHeights = [];

    // Process titles to format: "Write a program of..."
    const processedPrograms = PROGRAMS.map((prog, index) => {
      const cleanTitle = prog.title.replace(/^\d+\.\s*/, '');
      const newTitle = `${index + 1}. Write a program of ${cleanTitle}`;
      return { ...prog, printTitle: newTitle, cleanTitle };
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    processedPrograms.forEach(prog => {
      const lines = doc.splitTextToSize(prog.printTitle, progColWidth - 4);
      const rowH = Math.max(10, lines.length * 5 + 4);
      if (idxY + rowH > pageHeight - margin) {
        indexPagesNeeded++;
        idxY = margin + 10; // new page table header
      }
      idxY += rowH;
      indexRowHeights.push({ lines, rowH });
    });

    const indexStartPageNum = doc.internal.getNumberOfPages() + 1;
    for (let i = 0; i < indexPagesNeeded; i++) {
      doc.addPage();
    }

    // Function to handle multi-page text rendering smoothly
    const renderBlock = (titleBlock, contentBlock, isCode = true, isTerminal = false) => {
      // Add a little block padding conceptually
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const splitContent = doc.splitTextToSize(contentBlock, pageWidth - (margin * 2));

      const estimatedHeight = 17 + (splitContent.length * 5); // 10 padding + 7 title gap + total text lines height

      // If terminal output block can fit on a single page, enforce it to start on a new page if it doesn't fit on the current page
      if (isTerminal && estimatedHeight < (pageHeight - (margin * 2)) && (yPos + estimatedHeight > pageHeight - margin)) {
        doc.addPage();
        yPos = margin;
      } else {
        yPos += 10;
        if (yPos > pageHeight - margin) {
          doc.addPage();
          yPos = margin;
        }
      }

      // Restore title formatting
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(titleBlock, margin, yPos);
      yPos += 7;

      doc.setFont(isCode ? "Consolas" : "helvetica", "normal");
      doc.setFontSize(10);

      for (let i = 0; i < splitContent.length; i++) {
        if (yPos > pageHeight - margin) {
          doc.addPage();
          yPos = margin;
          doc.setFont(isCode ? "Consolas" : "helvetica", "normal");
          doc.setFontSize(10);
        }

        // Draw background for terminal output seamlessly line-by-line
        if (isTerminal) {
          doc.setFillColor(235, 235, 235); // A nice light-grey for depth
          doc.rect(margin - 2, yPos - 4.5, pageWidth - (margin * 2) + 4, 5.5, "F");
        }

        // Draw text
        doc.setTextColor(0, 0, 0);
        doc.text(splitContent[i], margin, yPos);
        yPos += 5; // standard line height for 10pt
      }
    };

    // --- Programs Pages --- //
    const progStartPages = [];

    processedPrograms.forEach((prog, index) => {
      // Force every code to start on a new page
      doc.addPage();
      progStartPages.push(doc.internal.getNumberOfPages());
      yPos = margin + 10;

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);

      const titleLines = doc.splitTextToSize(prog.printTitle, pageWidth - (margin * 2));
      doc.text(titleLines, margin, yPos);
      yPos += (titleLines.length * 6);

      // Draw Code
      // Remove any unnecessary blank lines and trailing spaces to save PDF space
      const cleanCode = prog.code.replace(/\n\s*\n+/g, '\n').replace(/[ \t]+$/gm, '').trim();
      renderBlock("Source Code:", cleanCode, true);

      // Draw Output
      // Requirement 4: The terminal output should include a dynamic file path based on the user's name
      let safeName = "User";
      if (formData.name) {
        const nameParts = formData.name.trim().split(/\s+/);
        safeName = nameParts.length > 1 ? nameParts[1] : nameParts[0];
      }

      let folderName = "Arrays";
      const lowerTitle = prog.cleanTitle.toLowerCase();
      if (lowerTitle.includes("queue")) folderName = "Queue";
      else if (lowerTitle.includes("stack")) folderName = "Stack";
      else if (lowerTitle.includes("tree")) folderName = "Tree";
      else if (lowerTitle.includes("graph")) folderName = "Graph";
      else if (lowerTitle.includes("list")) folderName = "LinkedList";
      else if (lowerTitle.includes("sort")) folderName = "Sorting";
      else if (lowerTitle.includes("search")) folderName = "Searching";

      const baseFilename = prog.filename.replace('.exe', '');
      const psPath = `PS C:\\Users\\${safeName}\\OneDrive\\Desktop\\DSA with C\\${folderName}> `;

      const fullOutput = `${psPath}gcc .\\${baseFilename}.c\n${psPath}.\\a.exe\n${prog.output}`;

      yPos += 5;
      renderBlock("Output:", fullOutput, true, true);
    });
    // --- Draw Index Page --- //
    let currentIdxPage = indexStartPageNum;
    doc.setPage(currentIdxPage);

    // widths: S.No (10%), Date (15%), Title (57%), Remarks (18%)
    const innerW = pageWidth - (margin * 2);
    const colW = [innerW * 0.10, innerW * 0.15, innerW * 0.57, innerW * 0.18];
    const colX = [
      margin,
      margin + colW[0],
      margin + colW[0] + colW[1],
      margin + colW[0] + colW[1] + colW[2]
    ];

    const drawIndexHeader = (isFirstPage) => {
      let currentHeaderY = margin;
      if (isFirstPage) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        const title1 = "INDEX";
        doc.text(title1, (pageWidth - doc.getTextWidth(title1)) / 2, margin + 10);

        doc.setFontSize(14);
        doc.setTextColor(31, 73, 125);
        const title2 = "LAB PRACTICE RECORD";
        doc.text(title2, (pageWidth - doc.getTextWidth(title2)) / 2, margin + 20);

        currentHeaderY = margin + 30;
      }

      // Table Header Row
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFillColor(240, 240, 240);
      doc.setDrawColor(0, 0, 0);
      doc.rect(margin, currentHeaderY, innerW, 10, "F");
      doc.rect(margin, currentHeaderY, innerW, 10, "S");

      // Vertical lines for header
      for (let i = 1; i < colX.length; i++) {
        doc.line(colX[i], currentHeaderY, colX[i], currentHeaderY + 10);
      }

      // Headers
      doc.text("S.No", colX[0] + (colW[0] / 2), currentHeaderY + 6, { align: "center" });
      doc.text("Date", colX[1] + (colW[1] / 2), currentHeaderY + 6, { align: "center" });
      doc.text("Program Name", colX[2] + (colW[2] / 2), currentHeaderY + 6, { align: "center" });
      doc.text("Remarks", colX[3] + (colW[3] / 2), currentHeaderY + 6, { align: "center" });

      return currentHeaderY + 10;
    };

    idxY = drawIndexHeader(true);

    processedPrograms.forEach((prog, i) => {
      const { lines, rowH } = indexRowHeights[i];

      if (idxY + rowH > pageHeight - margin) {
        currentIdxPage++;
        doc.setPage(currentIdxPage);
        idxY = drawIndexHeader(false);
      }

      // Draw Row
      doc.setDrawColor(0, 0, 0);
      doc.rect(margin, idxY, innerW, rowH, "S"); // outer border
      // Vertical lines
      for (let j = 1; j < colX.length; j++) {
        doc.line(colX[j], idxY, colX[j], idxY + rowH);
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);

      // S.No
      doc.text((i + 1).toString(), colX[0] + (colW[0] / 2), idxY + (rowH / 2) + 2, { align: "center" });

      // Title
      doc.text(lines, colX[2] + 2, idxY + 6);

      // Remarks (No value needed natively)

      idxY += rowH;
    });

    // Apply Global Border to All Pages
    const totalPages = doc.internal.getNumberOfPages();
    const globalProgStartPage = indexStartPageNum + indexPagesNeeded - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(0, 0, 0); // Solid black
      doc.setLineWidth(0.5);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20); // 10 margin

      if (i > globalProgStartPage) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text(i.toString(), pageWidth - 15, pageHeight - 13);
      }
    }

    // Save
    const safeOutputName = formData.name ? formData.name.replace(/\s+/g, '_') : "Student";
    const fileName = `${safeOutputName}_DSA_Record.pdf`;

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfPreviewUrl(pdfUrl);
    setPdfFileName(fileName);
  };

  if (pdfPreviewUrl) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#111b22',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        zIndex: 1000,
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', maxWidth: '1200px', marginBottom: '15px' }}>
          <button onClick={() => setPdfPreviewUrl(null)} className="submit-btn" style={{ width: 'auto', backgroundColor: '#ef4444', margin: 0 }}>
            ← Back to form
          </button>
          <a href={pdfPreviewUrl} download={pdfFileName} className="submit-btn" style={{ width: 'auto', textDecoration: 'none', display: 'flex', alignItems: 'center', margin: 0 }}>
            Download PDF ↓
          </a>
        </div>
        <div style={{ width: '95%', maxWidth: '1200px', height: 'calc(100vh - 100px)', marginBottom: '20px', backgroundColor: '#525659', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          <embed
            src={pdfPreviewUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="glass-card">
        <div className="form-header">
          <h1>DSA Lab Record Generator</h1>
          <p>Enter your details and instantly download your complete Lab Record PDF.</p>
        </div>

        <form onSubmit={generatePDF} className="section-card">
          <h2>Student Details</h2>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="e.g. Anas"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="rollNo">Roll Number</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleFormChange}
              placeholder="e.g. 21BCS001"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="enrollmentNo">Enrollment Number</label>
            <input
              type="text"
              id="enrollmentNo"
              name="enrollmentNo"
              value={formData.enrollmentNo}
              onChange={handleFormChange}
              placeholder="e.g. 2021/CS/123"
              required
            />
          </div>

          <button type="submit" className="submit-btn" aria-label="Generate and Download Full Record PDF">
            Generate Lab Record (.pdf)
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
