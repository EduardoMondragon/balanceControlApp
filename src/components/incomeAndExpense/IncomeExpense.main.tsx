import IncomeExpenseReusable from "./IncomeExpense.reusable";
import Layout from "../../common/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./incomeExpenses.css";
import { useGlobal } from "../../context/globalState";

const IncomeExpense = () => {
  const { transactionsList } = useGlobal();

  const expenses = transactionsList?.reduce((count: number, item: any) => {
    if (parseFloat(item.amount) < 0) {
      return count + parseFloat(item.amount);
    } else {
      return count;
    }
  }, 0);

  const incomes = transactionsList?.reduce((count: number, item: any) => {
    if (parseFloat(item.amount) > 0) {
      return count + parseFloat(item.amount);
    } else {
      return count;
    }
  }, 0);

  return (
    <Container>
      <Row>
        <IncomeExpenseReusable
          color={Layout.colors.incomes}
          title="Ingresos"
          amount={incomes ? incomes : 0}
          positive={true}
        />
        <span className="divider"></span>
        <IncomeExpenseReusable
          color={Layout.colors.expenses}
          title="Gastos"
          amount={expenses ? Math.abs(expenses) : 0}
          positive={false}
        />
      </Row>
    </Container>
  );
};

export default IncomeExpense;
