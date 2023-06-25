import { useEffect } from "react";
import CustomCard from "../reusables/customCard/CustomCard";
import { useGlobal } from "../../context/globalState";
import useFetchTransactionListByMonth from "../../hooks/useFetchTransactionListByMonth";
import monthsJsonArray from "../../common/months.json";
import TransactionInfo from "./TransactionInfo";
import { sortDates, newDateFormat } from "./sortDates";

const TransactionsList = () => {
  const { currentMonth, setTransactionList, transactionsList } = useGlobal();
  const { monthTransactionsList } = useFetchTransactionListByMonth({
    monthId: currentMonth
      ? monthsJsonArray.find((item) => item.month === currentMonth)?.id
      : undefined,
  });

  useEffect(() => {
    if (monthTransactionsList) {
      setTransactionList(monthTransactionsList);
    }
  }, [monthTransactionsList]);
  const sortedDates = sortDates(transactionsList);
  const list = sortedDates?.map((date: any, indexM: number) => {
    return (
      <div key={indexM}>
        <p>{date === newDateFormat(new Date()) ? "Hoy" : date}</p>
        {transactionsList?.map((item: any, index: number) => {
          if (date === newDateFormat(new Date(item.date))) {
            return (
              <div key={index} style={{ marginBottom: 20 }}>
                <CustomCard
                  childrenComponents={
                    <TransactionInfo
                      {...{
                        title: item.title,
                        amount: item.amount,
                        date: item.date,
                      }}
                    />
                  }
                ></CustomCard>
              </div>
            );
          }
        })}
      </div>
    );
  });
  return (
    <div style={{ marginTop: 20 }}>
      {list && list.length >= 1 ? (
        list
      ) : (
        <p style={{ color: "lightgray", textAlign: "center" }}>
          No hay transacciones en este periodo
        </p>
      )}
    </div>
  );
};

export default TransactionsList;
