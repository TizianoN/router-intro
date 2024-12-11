import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function AlternativeLayout() {
  return (
    <div data-bs-theme="dark">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
