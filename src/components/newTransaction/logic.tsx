interface IInputEntries {
  title: string;
  amount: string;
}

const customDate = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "short" });
  const month = currentDate.toLocaleString("en-US", { month: "short" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const time = currentDate.toLocaleTimeString("en-US", { hour12: false });

  const formattedDate = `${dayOfWeek} ${month} ${day} ${year} ${time}`;
  return formattedDate;
};

export const getNewTransaccionAssambed = (inputEntries: IInputEntries) => {
  let decimalPart;
  if (inputEntries.amount.toString().includes(".")) {
    decimalPart = inputEntries.amount.toString().split(".")[1];
  }
  return {
    ...inputEntries,
    id: Math.floor(Math.random() * 100000000000),
    amount: decimalPart
      ? Number(inputEntries.amount)
      : Number(inputEntries.amount).toFixed(2),
    date: customDate(),
  };
};

export const saveTransactionInDB = async (itemToBeSent: any) => {
  let result;
  try {
    const url = `http://localhost:3004/transactions`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemToBeSent),
    });
    const data = await response.json();
    result = { ok: true, data };
  } catch (error: any) {
    result = { ok: false, error };
    throw new Error(error);
  }

  return result;
};
