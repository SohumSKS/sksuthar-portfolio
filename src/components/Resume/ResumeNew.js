import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/sohumsuthar/VRC-2360-SIngularity-22-23/5f86b1f253ec3f3d23558572147a6288ef953506/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        
      <Container>
          <h1 className="project-heading">
      
            
            resume
          </h1>
        <Row >
          <Button
            variant="primare"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "150px" }}

          >
            <AiOutlineDownload />
            &nbsp; download
          </Button>
        </Row>
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
