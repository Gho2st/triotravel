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
      className={`p-4 shadow-2xl ${isCover ? "bg-gray-800" : "bg-white"}`}
    >
      {children}
      {isCover ? (
        <p className="text-center text-lg mt-2 font-bold text-white">Okładka</p>
      ) : (
        <p className="text-center text-sm mt-2">Strona {number}</p>
      )}
    </div>
  );
});

Pages.displayName = "Pages";

export default function Flipbook() {
  const [numPages, setNumPages] = useState(null);
  const [bookSize, setBookSize] = useState({ width: 630, height: 870 });
  const [pageSize, setPageSize] = useState({ width: 600 });
  const flipBookRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const updateSize = () => {
    const screenWidth = window.innerWidth;

    // Dostosuj proporcjonalnie do szerokości ekranu
    if (screenWidth < 640) {
      setBookSize({ width: 300, height: 420 }); // Mały ekran
      setPageSize({ width: 270 }); // Mały ekran
    } else if (screenWidth < 1024) {
      setBookSize({ width: 450, height: 600 }); // Średni ekran
      setPageSize({ width: 420 }); // Mały ekran
    } else if (screenWidth < 1600) {
      setBookSize({ width: 520, height: 700 }); // Średni ekran
      setPageSize({ width: 470 }); // Mały ekran
    } else {
      setBookSize({ width: 630, height: 870 }); // Duży ekran
      setPageSize({ width: 600 }); // Mały ekran
    }
  };

  useEffect(() => {
    updateSize(); // Ustaw początkowy rozmiar
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="">
      <Document
        className="flex justify-center items-center bg-red-500 min-h-screen overflow-hidden"
        file="/oferta.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {numPages && (
          <HTMLFlipBook
            width={bookSize.width}
            height={bookSize.height}
            // className="bg-amber-600"
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
