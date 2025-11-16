import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/Yash Baruah Resume.pdf";
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

  const scale = viewportWidth > 1400 ? 1.6 : viewportWidth > 992 ? 1.25 : viewportWidth > 768 ? 0.95 : 0.6;

  return (
    <section className="resume-section">
      <Container>
        <Row className="align-items-start g-4">
          <Col lg={7}>
            <p className="section-eyebrow">Resume</p>
            <h1 className="section-heading">
              A closer <span className="imp-text-color">look</span>
            </h1>
            <p className="section-description">
              Download my resume to see my latest experience, projects, and the impact I&apos;m delivering today.
            </p>
          </Col>
          <Col lg={5} className="text-lg-end">
            <Button href={pdf} target="_blank" variant="primary" className="cta-btn">
              <AiOutlineDownload /> Download resume
            </Button>
          </Col>
        </Row>
        <Row className="resume-preview justify-content-center">
          <Col md={10} className="d-flex justify-content-center">
            <Document file={pdf} className="resume-preview-document">
              <Page pageNumber={1} scale={scale} renderAnnotationLayer={false} renderTextLayer={false} />
            </Document>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;
