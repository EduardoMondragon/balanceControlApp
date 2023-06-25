import Header from "../header/Header";
import CurrentBalanceAmount from "./CurrentBalanceAmount";
import IncomeExpense from "../incomeAndExpense/IncomeExpense.main";
import AnalyticalDetails from "../analyticalDetails/AnalyticalDetails";
import CustomCard from "../reusables/customCard/CustomCard";
import "./balance.css";

const Balance = () => {
  const childrenComponents = (
    <>
      <Header />
      <CurrentBalanceAmount />
      <IncomeExpense />
      <AnalyticalDetails />
    </>
  );
  return <CustomCard childrenComponents={childrenComponents} />;
};

export default Balance;
