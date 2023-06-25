import { useEffect, useState } from "react";

const useFetchTransactionListByMonth = (props: any) => {
  const [monthTransactionsList, setMonthTransactionsList] = useState([]);
  const { monthId } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const monthInLetter = getMonthName(parseInt(monthId));
        const url = `http://localhost:3004/transactions?date_like=${monthInLetter}`;

        const response = await fetch(url);
        const data = await response.json();
        setMonthTransactionsList(data);
      } catch (error: any) {
        throw new Error(
          "imposible to fecht data form db, dont forget to run db with this comand: npm run json:server ",
          { cause: error }
        );
      }
    };

    fetchData();
  }, [monthId]);
  return { monthTransactionsList };
};

const getMonthName = (monthId: number) => {
  const date = new Date();
  date.setMonth(monthId - 1);
  return date.toLocaleString("en-US", { month: "short" });
};

export default useFetchTransactionListByMonth;
