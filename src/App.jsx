import { useState } from 'react';
import jsPDF from 'jspdf';
import { consolaFont } from './consolaFont';

import { PROGRAMS } from './programs';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    enrollmentNo: ''
  });

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
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);

    const title = "DSA Lab Record";
    doc.text(title, pageWidth / 2, 40, { align: "center" });

    // Underline
    doc.setLineWidth(0.5);
    const textWidth = doc.getTextWidth(title);
    doc.line((pageWidth - textWidth) / 2, 42, (pageWidth + textWidth) / 2, 42);

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");

    let yPos = 80;
    doc.setFont("helvetica", "bold");
    doc.text("Student Details:", margin, yPos);

    doc.setFont("helvetica", "normal");
    yPos += 15;
    doc.text(`Name:             ${formData.name}`, 30, yPos);
    
    yPos += 10;
    doc.text(`Roll Number:      ${formData.rollNo}`, 30, yPos);
    
    yPos += 10;
    doc.text(`Enrollment Number: ${formData.enrollmentNo}`, 30, yPos);

    // Function to handle multi-page text rendering smoothly
    const renderBlock = (titleBlock, contentBlock, isCode = true, isTerminal = false) => {
      // Add a little block padding conceptually
      doc.setFont("helvetica", "bold");
      yPos += 10;
      if (yPos > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }
      doc.text(titleBlock, margin, yPos);
      yPos += 7;

      doc.setFont(isCode ? "Consolas" : "helvetica", "normal");
      doc.setFontSize(10);
      
      const splitContent = doc.splitTextToSize(contentBlock, pageWidth - (margin * 2));
      
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
    PROGRAMS.forEach(prog => {
      // Force every code to start on a new page
      doc.addPage();
      yPos = margin + 10;

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(prog.title, margin, yPos);
      yPos += 5;

      // Draw Code
      renderBlock("Source Code:", prog.code, true);

      // Draw Output
      // Requirement 4: The terminal output should include a dynamic file path based on the user's name
      const safeName = formData.name ? formData.name.trim() : "User";
      const baseFilename = prog.filename.replace('.exe', '');
      const psPath = `PS C:\\Users\\${safeName}\\OneDrive\\Desktop\\DSA with C\\Arrays> `;
      
      const fullOutput = `${psPath}gcc .\\${baseFilename}.c\n${psPath}.\\a.exe\n${prog.output}`;
      
      yPos += 5;
      renderBlock("Output:", fullOutput, true, true);
    });

    // Apply Global Border to All Pages
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setDrawColor(0, 0, 0); // Solid black
      doc.setLineWidth(0.5);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20); // 10 margin
    }

    // Save
    const safeOutputName = formData.name ? formData.name.replace(/\s+/g, '_') : "Student";
    const fileName = `${safeOutputName}_DSA_Record.pdf`;
    doc.save(fileName);
  };

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
