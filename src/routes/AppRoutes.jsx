import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { routes } from "./routes";
import { NotFound } from "../pages/Index";
import { Suspense } from "react";

const AppRoutes = () => {
  const routesRender = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route?.path} element={route?.element}>
        {route?.children && routesRender(route?.children)}
      </Route>
    ));
  };

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route element={<MainLayout />}>{routesRender(routes)}</Route>
        <Route path="*" element={NotFound}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
