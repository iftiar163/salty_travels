import Layouts from "../components/Layouts/Layouts";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Booking from "../pages/Booking/Booking";
import Destination from "../pages/Destination/Destination";
import Home from "../pages/Home/Home";

const publicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/tours",
        element: <Destination />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book-now",
        element: <Booking />,
      },
    ],
  },
];

export default publicRouter;
