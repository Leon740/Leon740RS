import React, { useRef, useEffect, Ref } from 'react';
import { BrowserRouter, Route, Routes, matchPath, useLocation } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';

import LinkWrapper from './components/LinkWrapper';
import BackButton from './components/BackButton';

import CHARACTERS_DATA from './data/characters.json';
import EPISODES_DATA from './data/episodes.json';
import LOCATIONS_DATA from './data/locations.json';
import AuthProvider from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

interface DataItemI {
  id: number | string;
  name: string;
  image?: string;
  species?: string;
  status?: string;
  gender?: string;
}

const DATA: { [key: string]: { name: string; items: DataItemI[] } } = {
  characters: { name: 'characters', items: CHARACTERS_DATA },
  episodes: { name: 'episodes', items: EPISODES_DATA },
  locations: { name: 'locations', items: LOCATIONS_DATA }
};

interface CategoriesItemI {
  key: string;
  to: string;
  label: string;
}

const CATEGORIES_DATA: CategoriesItemI[] = [
  {
    key: 'characters',
    to: '/characters',
    label: 'Characters'
  },
  {
    key: 'episodes',
    to: '/episodes',
    label: 'Episodes'
  },
  {
    key: 'locations',
    to: '/locations',
    label: 'Locations'
  }
];

function App() {
  const location = useLocation();
  // console.log(location);

  const isActive = (path: string) => !!matchPath(location.pathname, path);

  const mainRf: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scroll page to top on page change
    if (mainRf?.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl m-auto">
        <header className="flex items-center justify-between border-b-2 border-white sticky top-0 bg-slate-900">
          <nav className="flex">
            <LinkWrapper to="/" className={isActive('/') ? 'bg-slate-800' : ''}>
              Sign In
            </LinkWrapper>

            {CATEGORIES_DATA.map(({ key, to, label }) => (
              <LinkWrapper
                key={key}
                to={to}
                className={isActive(to) ? 'bg-slate-800' : ''}
                state={DATA[key]}
              >
                {label}
              </LinkWrapper>
            ))}
          </nav>
          <BackButton />
        </header>

        <main className="px-8" ref={mainRf}>
          <Routes>
            <Route path="/" element={<SignInPage charactersData={DATA.characters} />} />

            <Route path=":category" element={<CategoryPage />} />
            <Route
              path=":category/:name"
              element={
                <PrivateRoute>
                  <DetailPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFoundPage isRedirect to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function AppContainer() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}
export default AppContainer;
