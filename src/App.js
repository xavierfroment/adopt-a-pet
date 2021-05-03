import React, { lazy, Suspense } from 'react'
import './App.css';
import Loader from './components/error/Loader';
import Signature from './components/data/Signature';

const Routes = lazy(() => import("./components/RoutePaths"));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes/>
      <Signature/>
    </Suspense>
  );
}

export default App;