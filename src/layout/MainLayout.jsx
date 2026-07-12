import { Outlet } from "react-router-dom";
import { Header } from "../components/Index";

const MainLayout = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
