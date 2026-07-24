import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-200/70 bg-white/80 p-10 text-center shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <Compass size={24} />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">The route you requested could not be located. Return to the live monitoring console to continue.</p>
        <Link to="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:brightness-105">
          <ArrowLeft size={16} /> Go back home
        </Link>
      </div>
    </div>
  );
}
