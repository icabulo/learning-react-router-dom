import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty, Pokemon } from "../pages";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/rickandmorty",
    element: <RickAndMorty />,
  },
]);

const CustomRouter = () => (
  <RouterProvider router={routerConfig}></RouterProvider>
);

export { CustomRouter };

/* import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter }; */
