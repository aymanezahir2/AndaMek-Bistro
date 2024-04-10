import "./index.css";


import { createRoot } from "react-dom/client";

import Home from "./App";
import Menu from "./pages/menu"
import Boissons from "./pages/boissons"
import Special from "./pages/special"
import Notfond from "./notfound"

import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";


import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RootLayout from "./components/shared/layout";
import Contact, { action as LoginActionReserve } from "./pages/contact";

const theRouter = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/specials" element={<Special />} />
        <Route path="/réserve" action={LoginActionReserve} element={<Contact />} />
        <Route path="*" element={<Notfond />} />
      </Route>
    </>
  )
);
// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (

    <HelmetProvider>
      <Provider store={store}>

        <RouterProvider router={theRouter} />
      </Provider>
    </HelmetProvider>

  );
}
const root = createRoot(document.getElementById("root")!);

// Render your component using the root
root.render(<App />);
