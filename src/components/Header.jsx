import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center bg-blue-700 text-white px-8 py-3">
        <div>
          <h1 className="text-2xl font-bold">flipkart</h1>
        </div>
        <div className="flex gap-4 items-center">
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                {routes
                  .filter((route) => route.showInNavBar === true)
                  .map((route, index) => (
                    <NavLink
                      key={index}
                      to={route?.path}
                      className={`mx-2 cursor-pointer hover:scale-95 hover:font-semibold hover:text-gray-200 transition-colors`}
                    >
                      {route?.name}
                    </NavLink>
                  ))}
              </li>
            </ul>
          </nav>
          <AddToCart />
        </div>
      </header>
    </>
  );
};

export default Header;
