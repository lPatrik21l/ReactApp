import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2>Pick a Topic</h2>
      <Link to={"table"}>
        <button>Table</button>
      </Link>
      <br />
      <Link to={"economicSearch"}>
        <button>Economic Search</button>
      </Link>
    </>
  );
};

export default Dashboard;
