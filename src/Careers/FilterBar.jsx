import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, LayoutGrid, List, SlidersHorizontal, X } from "lucide-react";

export default function FilterBar({ 
  search, 
  setSearch, 
  filters, 
  setFilters, 
  view, 
  setView, 
  sort, 
  setSort,
  availableFilters 
}) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const currentCategory = prev[category] || [];
      if (currentCategory.includes(value)) {
        return { ...prev, [category]: currentCategory.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...currentCategory, value] };
      }
    });
  };

  const clearFilters = () => {
    setFilters({ location: [], type: [], level: [] });
    setSearch("");
  };

  const activeFiltersCount = Object.values(filters).flat().length;

  return (
    <div className="sticky top-[78px] z-[40] bg-primary/80 backdrop-blur-3xl border-b border-white/5 py-8 px-6 font-outfit">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Search */}
        <div className="relative flex-grow w-full md:w-auto overflow-hidden rounded-2xl">
          <div className="absolute inset-px bg-white/5 rounded-[15px]" />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-accent" size={20} />
          <input
            type="text"
            placeholder="Search roles, skills, or levels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="relative w-full bg-transparent border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium font-dm-sans"
          />
        </div>

        {/* Filters & Actions */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          <div className="hidden lg:flex items-center gap-3">
            {Object.keys(availableFilters).map((category) => (
              <FilterDropdown
                key={category}
                label={category}
                options={availableFilters[category]}
                selected={filters[category]}
                onChange={(val) => handleFilterChange(category, val)}
              />
            ))}
          </div>

          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-accent backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <SlidersHorizontal size={18} />
            Filters {activeFiltersCount > 0 && `[${activeFiltersCount}]`}
          </button>
 
          <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setView("grid")}
              className={`p-2.5 rounded-xl transition-all duration-300 ${view === "grid" ? "bg-accent text-primary shadow-[0_0_15px_rgba(0,191,255,0.3)]" : "text-white/40 hover:text-white"}`}
              title="Grid View"
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2.5 rounded-xl transition-all duration-300 ${view === "list" ? "bg-accent text-primary shadow-[0_0_15px_rgba(0,191,255,0.3)]" : "text-white/40 hover:text-white"}`}
              title="List View"
            >
              <List size={20} />
            </button>
          </div>

          <div className="relative group/sort">
             <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white/5 border border-white/10 px-6 py-4 pr-12 rounded-2xl text-xs font-black uppercase tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer backdrop-blur-md hover:bg-white/10 transition-all font-outfit"
              >
                <option value="latest" className="bg-secondary text-white">LATEST</option>
                <option value="alpha" className="bg-secondary text-white">A-Z</option>
                <option value="level" className="bg-secondary text-white">RANK</option>
              </select>
              <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/sort:text-accent transition-colors" />
          </div>
        </div>
      </div>

      {/* Active Filter Tags */}
      <AnimatePresence>
        {activeFiltersCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-2.5 items-center"
          >
            <span className="text-[10px] font-black uppercase text-text-secondary tracking-[0.2em] mr-2">Applied Filters:</span>
            {Object.entries(filters).map(([cat, vals]) => 
              vals.map(val => (
                <button 
                  key={`${cat}-${val}`} 
                  onClick={() => handleFilterChange(cat, val)}
                  className="group flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-wider rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  {val}
                  <X size={12} className="opacity-60 group-hover:opacity-100" />
                </button>
              ))
            )}
            <button 
              onClick={clearFilters}
              className="text-[10px] font-black text-white/40 hover:text-accent transition-colors border-b border-white/10 pb-0.5 ml-2"
            >
              CLEAR ALL
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-primary p-8 lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <h3 className="text-4xl font-black text-white tracking-tighter">FILTERS</h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            
            <div className="space-y-12 flex-grow overflow-y-auto pr-4">
               {Object.keys(availableFilters).map((category) => (
                  <div key={category}>
                    <h4 className="text-text-secondary font-black mb-6 uppercase tracking-[0.3em] text-[10px]">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {availableFilters[category].map(option => (
                        <button
                          key={option}
                          onClick={() => handleFilterChange(category, option)}
                          className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${
                            filters[category].includes(option)
                              ? "bg-accent text-primary shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                              : "bg-white/5 text-white/40 border border-white/10"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
               ))}
            </div>
            
            <button 
              onClick={() => setShowMobileFilters(false)}
              className="w-full mt-12 py-6 bg-accent text-primary font-black uppercase text-xs tracking-widest rounded-3xl shadow-[0_20px_40px_rgba(0,191,255,0.2)]"
            >
              APPLY FILTERS
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterDropdown({ label, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md ${
          selected.length > 0 
            ? "bg-accent/10 border-accent text-accent" 
            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20"
        }`}
      >
        {label} {selected.length > 0 && <span className="opacity-50">[{selected.length}]</span>}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {open && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-10" 
               onClick={() => setOpen(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 mt-3 w-64 bg-secondary border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] p-5 z-20 backdrop-blur-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              <div className="relative space-y-3">
                {options.map(option => (
                  <label key={option} className="flex items-center gap-4 cursor-pointer group py-1">
                    <input
                      type="checkbox"
                      checked={selected.includes(option)}
                      onChange={() => onChange(option)}
                      className="hidden"
                    />
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                      selected.includes(option) 
                        ? "bg-accent border-accent shadow-[0_0_10px_rgba(0,191,255,0.3)]" 
                        : "border-white/10 group-hover:border-accent/30"
                    }`}>
                      {selected.includes(option) && <X size={14} strokeWidth={4} className="text-primary" />}
                    </div>
                    <span className={`text-[11px] font-bold tracking-wide transition-colors ${selected.includes(option) ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
