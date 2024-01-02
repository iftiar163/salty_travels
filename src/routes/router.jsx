import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRoute";
import privateRouter from "./privateRoute";

const router = createBrowserRouter([...publicRouter, ...privateRouter]);

export default router;
