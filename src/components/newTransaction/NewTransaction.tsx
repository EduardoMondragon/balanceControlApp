/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import BtnNewTransaction from "./BtnNewTransaction";
import Entry from "./EntryForm";
import "./style.css";
import { useGlobal } from "../../context/globalState";
import { getNewTransaccionAssambed, saveTransactionInDB } from "./logic";

const NewTransaction = () => {
  const { updateMonth, currentMonth } = useGlobal();
  const [show, setShow] = useState<boolean>(false);
  const [inputEntries, setInputEntries] = useState<any>({
    title: "",
    amount: "",
  });

  const handleInputs = (target: any) => {
    setInputEntries({ ...inputEntries, [target.name]: target.value });
  };

  const saveNewItem = async () => {
    const itemToBeSent = getNewTransaccionAssambed(inputEntries);
    const result = await saveTransactionInDB(itemToBeSent);

    if (result.ok) {
      let prevmonth = currentMonth;
      updateMonth("Enero");
      setTimeout(() => {
        updateMonth(prevmonth);
      }, 500);

      const date = new Date();
      const messageMonth = date.toLocaleString("es", { month: "long" });
      setInputEntries({ title: "", amount: "" });
      setShow(false);
      alert(`Movimiento guardado en el mes de : ${messageMonth}`);
    }
  };

  return (
    <div>
      {show && (
        <Entry
          setShow={setShow}
          handleInputs={handleInputs}
          saveNewItem={saveNewItem}
          inputEntries={inputEntries}
        />
      )}
      <BtnNewTransaction setShow={setShow} />
    </div>
  );
};

export default NewTransaction;
