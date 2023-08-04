/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';

import NavLinkWrapper from './components/NavLinkWrapper';
import BackButton from './components/BackButton';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl m-auto">
        <header className="flex items-center justify-between px-8 border-b-2 border-white">
          <nav className="flex">
            <NavLinkWrapper to="/">HomePage</NavLinkWrapper>
            <NavLinkWrapper to="/characters">Characters</NavLinkWrapper>
            <NavLinkWrapper to="/episodes">Episodes</NavLinkWrapper>
            <NavLinkWrapper to="/locations">Locations</NavLinkWrapper>
          </nav>
          <BackButton />
        </header>

        <main className="px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path=":category" element={<CategoryPage />} />
            <Route path=":category/:name" element={<DetailPage />} />

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
      <App />
    </BrowserRouter>
  );
}
export default AppContainer;
