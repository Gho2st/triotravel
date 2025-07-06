"use client";

import { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslations, useLocale } from "next-intl";

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
  const t = useTranslations("offer");
  const locale = useLocale();

  const [numPages, setNumPages] = useState(null);
  const [bookSize, setBookSize] = useState({ width: 630, height: 850 });
  const [pageSize, setPageSize] = useState({ width: 610 });
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePages, setVisiblePages] = useState([]);
  const flipBookRef = useRef(null);

  const getPdfFile = () => {
    return locale === "pl" ? "/oferta_pol.pdf" : "/oferta_eng.pdf";
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setVisiblePages([1, 2, 3]);
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

  const updateVisiblePages = (page) => {
    const buffer = 4;
    const newVisiblePages = [];
    for (
      let i = Math.max(1, page - buffer);
      i <= Math.min(numPages, page + buffer);
      i++
    ) {
      newVisiblePages.push(i);
    }
    setVisiblePages((prev) => [...new Set([...prev, ...newVisiblePages])]);
  };

  const onPageFlip = (e) => {
    const page = e.data;
    setCurrentPage(page);
    updateVisiblePages(page + 1); // bo Page numeruje od 1
  };

  const handleItemClick = ({ pageNumber }) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().turnToPage(pageNumber - 1);
      setVisiblePages((prev) => [...new Set([...prev, pageNumber])]);
    }
  };

  return (
    <div className="">
      <Document
        className="flex justify-center items-center bg-slate-300 min-h-screen overflow-hidden"
        file={getPdfFile()}
        onLoadSuccess={onDocumentLoadSuccess}
        onItemClick={handleItemClick}
        loading={
          <div className="text-xl xl:text-2xl text-center flex justify-center items-center">
            {t("text")}
          </div>
        }
      >
        {numPages && (
          <HTMLFlipBook
            key={`${bookSize.width}-${bookSize.height}-${locale}`}
            width={bookSize.width}
            height={bookSize.height}
            ref={flipBookRef}
            startPage={0}
            showCover={true}
            onFlip={onPageFlip}
          >
            <Pages isCover={true}>
              <Page pageNumber={1} width={pageSize.width} />
            </Pages>

            {[...Array(numPages - 1).keys()].map((index) => {
              const pageNumber = index + 2;
              return visiblePages.includes(pageNumber) ? (
                <Pages key={index} number={pageNumber}>
                  <Page pageNumber={pageNumber} width={pageSize.width} />
                </Pages>
              ) : (
                <Pages key={index} number={pageNumber}>
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
