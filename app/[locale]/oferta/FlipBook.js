'use client'
import { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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
  const [currentPage, setCurrentPage] = useState(0); // Śledzenie aktualnej strony
  const [visiblePages, setVisiblePages] = useState([]); // Strony do renderowania
  const flipBookRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setVisiblePages([1, 2, 3]); // Wczytaj początkowo tylko kilka stron
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
    updateSize();
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      const resizeTimeout = setTimeout(updateSize, 200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funkcja do aktualizacji widocznych stron
  const updateVisiblePages = (page) => {
    const buffer = 4; // Wczytuj 2 strony przed i po aktualnej
    const newVisiblePages = [];
    for (
      let i = Math.max(1, page - buffer);
      i <= Math.min(numPages, page + buffer);
      i++
    ) {
      newVisiblePages.push(i);
    }
    setVisiblePages([...new Set([...visiblePages, ...newVisiblePages])]); // Unikaj duplikatów
  };

  // Obsługa zmiany strony w HTMLFlipBook
  const onPageFlip = (e) => {
    setCurrentPage(e.data);
    updateVisiblePages(e.data);
  };

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
            key={`${bookSize.width}-${bookSize.height}`}
            width={bookSize.width}
            height={bookSize.height}
            ref={flipBookRef}
            startPage={0}
            showCover={true}
            onFlip={onPageFlip} // Dodaj obsługę zmiany strony
          >
            <Pages isCover={true}>
              <Page pageNumber={1} width={pageSize.width} />
            </Pages>

            {[...Array(numPages - 1).keys()].map((index) => {
              const pageNumber = index + 2;
              // Renderuj tylko strony z visiblePages
              return visiblePages.includes(pageNumber) ? (
                <Pages key={index} number={index + 1}>
                  <Page pageNumber={pageNumber} width={pageSize.width} />
                </Pages>
              ) : (
                <Pages key={index} number={index + 1}>
                  <div className="text-center">Wczytywanie...</div>
                </Pages>
              );
            })}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
}
