"use client";

import { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Ustaw lokalnego workera
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const Pages = React.forwardRef(({ number, children, isCover }, ref) => {
  return (
    <div
      ref={ref}
      className={`shadow-2xl xl:p-4 ${isCover ? "bg-gray-800" : "bg-white"}`}
    >
      {children}
    </div>
  );
});

Pages.displayName = "Pages";

export default function FlipBook() {
  const [numPages, setNumPages] = useState(null);
  const [bookSize, setBookSize] = useState({ width: 630, height: 850 });
  const [pageSize, setPageSize] = useState({ width: 610 });

  const flipBookRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const updateSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      setBookSize({ width: 350, height: 500 });
      setPageSize({ width: 350 });
    } else if (screenWidth < 1600) {
      setBookSize({ width: 550, height: 750 });
      setPageSize({ width: 510 });
    } else {
      setBookSize({ width: 650, height: 900 });
      setPageSize({ width: 610 });
    }
  };

  useEffect(() => {
    updateSize(); // Ustaw początkowy rozmiar

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <Document
        className="flex justify-center items-center bg-slate-300 min-h-screen overflow-hidden"
        file="/oferta.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="text-xl xl:text-2xl text-center flex justify-center items-center">
            Wczytywanie książki z ofertą...
          </div>
        }
      >
        {numPages && (
          <HTMLFlipBook
            key={`${bookSize.width}-${bookSize.height}`} // <=== to kluczowe!
            width={bookSize.width}
            height={bookSize.height}
            ref={flipBookRef}
            startPage={0}
            showCover={true}
          >
            <Pages isCover={true}>
              <Page pageNumber={1} width={pageSize.width} />
            </Pages>

            {[...Array(numPages - 1).keys()].map((index) => (
              <Pages key={index} number={index + 1}>
                <Page pageNumber={index + 2} width={pageSize.width} />
              </Pages>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
}
