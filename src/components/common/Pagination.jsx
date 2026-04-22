import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-12 pb-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous Page"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 ${currentPage === page
                                ? "bg-[#D4AF37] text-[#0B1C2C] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                : "text-gray-400 hover:bg-gray-900 hover:text-white border border-transparent hover:border-gray-800"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next Page"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}
