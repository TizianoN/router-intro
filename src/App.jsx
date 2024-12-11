import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layout
import DefaultLayout from './layouts/DefaultLayout';
import AlternativeLayout from './layouts/AlternativeLayout';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PizzasIndexPage from './pages/PizzasIndexPage';
import PizzasShowPage from './pages/PizzasShowPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotte con layout classico */}
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="*" Component={NotFoundPage} />
        </Route>

        {/* Rotte con layout alternativo */}
        <Route Component={AlternativeLayout}>{/*  */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
