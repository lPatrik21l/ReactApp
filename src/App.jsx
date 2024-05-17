import { lazy, Suspense } from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const EconomicSearch = lazy(() =>
  import("./components/EconomicSearch/EconomicSearch")
);
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Table = lazy(() => import("./components/Table/Table"));
const EconomicDetails = lazy(() =>
  import("./components/EconomicSearch/EconomicDetails")
);

//loaders
// import { loader as economicLoader } from "./components/EconomicSearch/EconomicSearch";

import { Loader as Loading } from "./Loader/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "table",
        element: (
          <Suspense fallback={<Loading />}>
            <Table />
          </Suspense>
        ),
      },
      {
        path: "economicSearch",
        element: (
          <Suspense fallback={<Loading />}>
            <EconomicSearch />
          </Suspense>
        ),
        // loader: economicLoader,
      },
      {
        path: "economicSearch/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <EconomicDetails />
          </Suspense>
        ),
        // loader: economicLoader,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <div>Trading Economics</div>
      </RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
