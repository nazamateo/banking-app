import Table from "./components/displayUserTable";
import SideBar from "./components/SideBar/SideBar";
import "./App.scss";

function App() {
  return (
    <div className="main-layout">
      <SideBar />
      <Table />
    </div>
  );
}

export default App;
