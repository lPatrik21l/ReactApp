import { useState } from "react";
import CountryPicker from "./components/CountryPicker";
import TableHead from "./components/TableHead";
import Header from "./components/Header";
import EconomicSearch from "./components/EconomicSearch";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table";

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
    ],
  },
]);
const App = () => {
  return (
    <>
      <Header />

      <EconomicSearch />
    </>
  );
};

export default App;
