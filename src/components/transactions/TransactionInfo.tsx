import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../common/layout";
import "./styles.css";

interface Iprops {
  title: string;
  amount: string;
  date: string;
}
const TransactionInfo = (props: Iprops) => {
  const { title, amount } = props;
  return (
    <Container>
      <Row>
        <div className="lightContainer">
          <div
            className={Number(amount) > 0 ? "lightSquared" : "lightCircle"}
            style={{
              backgroundColor:
                Number(amount) > 0
                  ? Layout.colors.incomes
                  : Layout.colors.expenses,
            }}
          ></div>
        </div>
        <div className="titleContainer">
          <p style={{ marginTop: 10 }}>{title}</p>
        </div>
        <div className="amountContainer">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              marginTop: 10,
              color:
                Number(amount) > 0
                  ? Layout.colors.incomes
                  : Layout.colors.expenses,
            }}
          >
            {Number(amount) > 0 && "+"}
            {amount}
            <FontAwesomeIcon icon={faChevronDown} color="black" />
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default TransactionInfo;
