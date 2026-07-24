import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}
