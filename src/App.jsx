import EconomicSearch from "./components/EconomicSearch/EconomicSearch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table/Table";
import EconomicDetails from "./components/EconomicSearch/EconomicDetails";

//loaders
import { loader as economicLoader } from "./components/EconomicSearch/EconomicSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "economicSearch",
        element: <EconomicSearch />,
        loader: economicLoader,
      },
      {
        path: "economicSearch/:id",
        element: <EconomicDetails />,
        loader: economicLoader,
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <div>Trading Economics</div>
    </RouterProvider>
  );
};

export default App;
