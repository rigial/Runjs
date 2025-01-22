import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, memo, Suspense, useEffect } from "react";
import AppLoading from "./components/AppLoading";
import { loadTypscript } from "./utils/commonFunction";

const HomePage = lazy(() => import("./page/HomePage"));
const AboutPage = lazy(() => import("./page/AboutPage"));
const JSPlayground = lazy(() => import("./page/JSPlayground"));
const TSPlayground = lazy(() => import("./page/TSPlayground"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Bin = lazy(() => import("./page/Bin"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));
const JSsaved = lazy(() => import("./page/JSsaved"));
const TSsaved = lazy(() => import("./page/TSsaved"));

function AppRouter() {

    useEffect(() => {
        async function asyncFunctionCall() {
            await loadTypscript();
        }
        asyncFunctionCall()
    }, [])

    return (
        <BrowserRouter>
            <Suspense fallback={<AppLoading />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/js" element={<JSPlayground />} />
                    <Route path="/js/:id" element={<JSsaved />} />
                    <Route path="/ts" element={<TSPlayground />} />
                    <Route path="/ts/:id" element={<TSsaved />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bin" element={<Bin />} />
                    <Route path="/404" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default memo(AppRouter);
