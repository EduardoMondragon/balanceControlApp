import Layout from "../../common/layout";
import "./balance.css";
import { useGlobal } from "../../context/globalState";

const CurrentBalanceAmount = () => {
  const { transactionsList } = useGlobal();
  const currentBalance = transactionsList?.reduce(
    (count: number, item: any) => count + parseFloat(item.amount),
    0
  );
  return (
    <h1
      className="amountCurrentBalance"
      style={{ color: Layout.colors.currentBalance }}
    >
      ${currentBalance && currentBalance.toFixed(2)}
    </h1>
  );
};

export default CurrentBalanceAmount;
