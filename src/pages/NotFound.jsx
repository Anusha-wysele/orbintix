import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 font-outfit">
      <div className="max-w-md w-full text-center">
        <div className="relative">
          <h1 className="text-9xl font-black text-white/5 select-none tracking-tighter">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Oops!</h2>
          </div>
        </div>
        
        <p className="mt-8 text-xl text-text-secondary font-medium font-dm-sans">
          The page you're looking for seems to have wandered off into the digital void.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-primary rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
