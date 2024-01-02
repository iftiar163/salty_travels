import Layouts from "../components/Layouts/Layouts";
import Admin from "../pages/Admin/Admin";

const privateRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];

export default privateRouter;
