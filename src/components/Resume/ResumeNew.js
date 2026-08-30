import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/Yash Baruah Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const getViewportWidth = () =>
  typeof window === "undefined" ? 1200 : window.innerWidth;

function ResumeNew() {
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(getViewportWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale =
    viewportWidth > 1400 ? 1.5 : viewportWidth > 992 ? 1.2 : viewportWidth > 768 ? 0.9 : 0.55;

  return (
    <section className="section" id="resume">
      <div className="wrap">
        <div className="resume-header">
          <div>
            <p className="section-label">Resume</p>
            <h1 className="section-title">The one-pager</h1>
            <p className="section-intro">
              Everything on this site, condensed to a single page. Last updated August 2026.
            </p>
          </div>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn-solid">
            <AiOutlineDownload /> Download PDF
          </a>
        </div>
        <div className="resume-preview">
          <Document file={pdf} className="resume-preview-document">
            <Page
              pageNumber={1}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    </section>
  );
}

export default ResumeNew;
