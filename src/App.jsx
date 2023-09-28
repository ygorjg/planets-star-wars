import { RouterProvider } from "react-router-dom";
import router from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <GlobalStyles />
    </div>
  );
};

export default App;
