import { RouterProvider } from "react-router-dom";
import router from "./routes";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer />
    </div>
  );
};

export default App;
