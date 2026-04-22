import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes/config";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      // Ensure preloader stays for at least 1.5s but doesn't block if load is slow
      const minimumTime = 1500;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumTime - elapsedTime);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    const startTime = Date.now();

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback for safety
      const fallback = setTimeout(handleLoad, 4000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  // Professional Title Updater
  useEffect(() => {
    const currentRoute = findRoute(routes, location.pathname);
    if (currentRoute?.title) {
      document.title = currentRoute.title;
    }
  }, [location]);

  // Helper to find route (including nested)
  function findRoute(routeList, path) {
    for (const route of routeList) {
      if (route.path === path) return route;
      // Handle dynamic routes like /careers/:id
      if (route.path.includes(':')) {
        const regex = new RegExp('^' + route.path.replace(/:\w+/g, '[^/]+') + '$');
        if (regex.test(path)) return route;
      }
      if (route.children) {
        const found = findRoute(route.children, path);
        if (found) return found;
      }
    }
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <Suspense fallback={
        <div className="fixed inset-0 z-[9998] bg-primary flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary">
              Loading Experience
            </span>
          </div>
        </div>
      }>
        <Routes>
          <Route element={<MainLayout />}>
            {routes.map((route) => {
              if (route.children) {
                return route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={<child.element />}
                  />
                ));
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
