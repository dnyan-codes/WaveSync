import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}
