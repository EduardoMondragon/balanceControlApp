import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./incomeExpenses.css";

interface IProps {
  color: string;
  title: string;
  amount: number;
  positive: boolean;
}

const IncomeExpenseReusable = (props: IProps) => {
  const { color, title, amount, positive } = props;

  const icon = positive ? (
    <FontAwesomeIcon pull="left" className="icon" icon={faPlus} color={color} />
  ) : (
    <FontAwesomeIcon
      pull="left"
      className="icon"
      icon={faMinus}
      color={color}
    />
  );

  return (
    <Col className="containerIncomeOrExpenses">
      <p className="amountTitle" style={{ color }}>
        {title}
      </p>

      <h5 className="amount" style={{ color }}>
        {icon} ${amount.toFixed(2)}
      </h5>
    </Col>
  );
};

export default IncomeExpenseReusable;
