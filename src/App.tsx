import MonthsPicker from "./components/months/MonthsPicker";
import Balance from "./components/balance/Balance";
import "./App.css";
import Layout from "./common/layout";
import TransactionsList from "./components/transactions/List";
import NewTransaction from "./components/newTransaction/NewTransaction";

function App() {
  return (
    <div
      className="containerApp"
      style={{ backgroundColor: Layout.colors.mainBg }}
    >
      <div style={{ flex: 0.1 }}>
        <MonthsPicker />
      </div>
      <div className="appContent">
        <div style={{ flex: 2 }}>
          <Balance />
        </div>
        <div style={{ flex: 6, overflow: "auto" }}>
          <TransactionsList />
        </div>
        <div style={{ justifySelf: "flex-end", flex: 2 }}>
          <NewTransaction />
        </div>
      </div>
    </div>
  );
}

export default App;
