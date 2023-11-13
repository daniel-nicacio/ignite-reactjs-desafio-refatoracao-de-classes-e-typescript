import { RouterProvider } from "react-router-dom";

import router from "./routes";

import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
