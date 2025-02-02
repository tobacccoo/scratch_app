import "./index.css";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
// import Fashion from './components/Fashion';

const Fashion = lazy(() => import("./components/Fashion"));

export const App = () => {
  const d = Header();
  console.log(d);
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/fashion",
        element: (
          <Suspense fallback={<h1>Loading......Your internet sucks...</h1>}>
            <Fashion />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
