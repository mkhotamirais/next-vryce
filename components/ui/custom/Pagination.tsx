"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  path: string;
}

export default function Pagination({ totalPages, currentPage, path }: PaginationProps) {
  const [inputPage, setInputPage] = useState(String(currentPage));

  // Sinkronkan state input dengan currentPage dari URL
  useEffect(() => {
    setInputPage(String(currentPage));
  }, [currentPage]);

  const handleInputJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const pageNum = parseInt(inputPage);
      if (!isNaN(pageNum) && pageNum > 0 && pageNum <= totalPages) {
        // Navigasi menggunakan Next.js Link
        window.location.href = `${path}/${pageNum}`;
      } else {
        // Reset input jika tidak valid
        setInputPage(String(currentPage));
      }
    }
  };

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  return (
    <div className="flex items-center gap-2 py-4">
      <Button
        size={"icon"}
        variant={"outline"}
        aria-label="prev-page"
        type="button"
        disabled={currentPage <= 1}
        asChild
      >
        <Link href={`${path}/${prevPage}`}>
          <ChevronLeft />
        </Link>
      </Button>
      <div className="border border-gray-200 py-1.5 px-2.5 rounded-lg">
        <label htmlFor="page" className="sr-only">
          page
        </label>
        <input
          type="number"
          id="page"
          name="page"
          value={inputPage}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setInputPage(e.target.value)}
          onKeyDown={handleInputJump}
          className="w-12 text-center rounded-md disabled:opacity-50"
          min="1"
          max={totalPages}
          disabled={totalPages <= 1}
        />
        <span className="text-gray-400"> / {totalPages}</span>
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        aria-label="next-page"
        type="button"
        disabled={currentPage >= totalPages}
        asChild
      >
        <Link href={`${path}/${nextPage}`}>
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
