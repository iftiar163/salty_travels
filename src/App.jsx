import { RouterProvider } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
