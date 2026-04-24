import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-3 mt-16 pb-12 font-outfit">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-primary/10 text-primary/40 hover:bg-primary hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-sm"
                aria-label="Previous Page"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-12 h-12 rounded-xl text-xs font-black transition-all duration-300 ${currentPage === page
                                ? "bg-accent text-primary shadow-lg scale-110"
                                : "text-primary/40 hover:bg-primary/5 hover:text-primary border border-primary/5"
                            }`}
                    >
                        {String(page).padStart(2, '0')}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-primary/10 text-primary/40 hover:bg-primary hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-sm"
                aria-label="Next Page"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

