import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { lazy, memo, Suspense, useEffect } from 'react';
import AppLoading from './components/AppLoading';
import { loadTypscript } from './utils/commonFunction';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

const HomePage = lazy(() => import('./page/HomePage'));
const AboutPage = lazy(() => import('./page/AboutPage'));
const JSPlayground = lazy(() => import('./page/JSPlayground'));
const ReactPlayground = lazy(() => import('./page/ReactPlayground'));
const TSPlayground = lazy(() => import('./page/TSPlayground'));
const Dashboard = lazy(() => import('./page/Dashboard'));
const Interview = lazy(() => import('./page/InterviewQuestion'));
const Bin = lazy(() => import('./page/Bin'));
const PageNotFound = lazy(() => import('./page/PageNotFound'));
const JSsaved = lazy(() => import('./page/JSsaved'));
const TSsaved = lazy(() => import('./page/TSsaved'));
const HTMLPlayground = lazy(() => import('./page/HTMLPlayground'));
const HTMLStandalonePreview = lazy(
  () => import('./page/HTMLStandalonePreview')
);

const Problemset = lazy(() => import('./page/Problemset'));
const ProblemSolving = lazy(() => import('./page/ProblemSolving'));

const LearnHomePage = lazy(() => import('./page/LearnHomePage'));
const LearnLessonPage = lazy(() => import('./page/LearnLessonPage'));

function AppRouter() {
  useEffect(() => {
    async function asyncFunctionCall() {
      await loadTypscript();
    }
    asyncFunctionCall();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<AppLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/problems" element={<Problemset />} />
          <Route path="/problems/:slug" element={<ProblemSolving />} />
          <Route path="/learn" element={<LearnHomePage />} />
          <Route path="/learn/:slug" element={<LearnLessonPage />} />
          <Route path="/js" element={<JSPlayground />} />
          <Route path="/react" element={<ReactPlayground />} />
          <Route path="/react/:id" element={<ReactPlayground />} />
          <Route path="/js/:id" element={<JSsaved />} />
          <Route path="/ts" element={<TSPlayground />} />
          <Route path="/ts/:id" element={<TSsaved />} />
          <Route path="/html" element={<HTMLPlayground />} />
          <Route path="/html/:id" element={<HTMLPlayground />} />
          <Route path="/html-preview" element={<HTMLStandalonePreview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default memo(AppRouter);
